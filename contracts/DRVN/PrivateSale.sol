// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./DRVNVesting.sol";

contract PrivateSales is Ownable {

    // DRVN token
    IERC20 public immutable token;

    // private sale enable flag
    bool public privateSalesEnabled;

    // mapping between address and its created VestingContracts contracts
    mapping(address => address[]) public vestingWallets;

    // mapping for allowed addresses
    mapping(address => bool) public isAllowed;

    // price of one DRVN token in wei
    uint256 public coinPrice;

    constructor(address token_, uint256 initialCoinPrice) {
        token = IERC20(token_);
        coinPrice = initialCoinPrice;
    }

    /**
     * @dev setting privateSalesEnabled variable
     * @param enabled boolean True if enabled, False otherwise
     */
    function setPrivateSalesEnabled(bool enabled) external onlyOwner {
        privateSalesEnabled = enabled;
    }

    /**
     * @dev setting allowed addresses
     * @param allowed boolean True if enabled, False otherwise
     */
    function setAllowed(address[] calldata addresses, bool allowed) external onlyOwner {
        for (uint256 i = 0; i < addresses.length; i++) {
            isAllowed[addresses[i]] = allowed;
        }
    }

    /**
     * @dev modifier to detect if address is allowed for buying coins
     */
    modifier whenAllowed() {
        require(isAllowed[msg.sender], "PrivateSales: address is not allowed to call this function");
        _;
    }

    /**
     * @dev createVestWallet function will create the VestWallet
     * @param beneficiaryAddress is the address of the beneficiary
     * @param durationSeconds is the duration of vesting in seconds after it starts
     * @param amount is the amount of coins
     */
    function _createVestWallet(
        address beneficiaryAddress,
        uint64 durationSeconds,
        uint256 amount
    ) internal {
        // creating vesting wallet contract
        VestingContract vestingWallet = new VestingContract(
            beneficiaryAddress, 
            block.timestamp + 360 days,
            durationSeconds, 
            address(token)
        );

        // transfer vesting amount to VestingWallet contract
        token.transfer(address(vestingWallet), amount);

        // adding created contract in this mapping
        vestingWallets[beneficiaryAddress].push(address(vestingWallet));
    }

    /**
     * @dev function gets a created VestWallet contracts for provided account
     * @param account is the account address
     */
    function getAccountVestingWallets(address account) external view returns (address[] memory) {
        return vestingWallets[account];
    }

    /**
     * @dev Buy coins in private coin supply
     */
    function buy() external payable whenAllowed {
        require(privateSalesEnabled, "PrivateSales: sale is not enabled");
        require(msg.value > 0, "PrivateSales: should not be zero amount");

        uint256 amount = msg.value * 10 ** 18 / coinPrice;
        _createVestWallet(msg.sender, 360 days, amount);
    }

    /**
     * @dev Update the coin price
     * @param newCoinPrice The new coin price in wei
     */
    function setCoinPrice(uint256 newCoinPrice) external onlyOwner {
        require(newCoinPrice > 0, "PrivateSales: coin price should be greater than 0");
        coinPrice = newCoinPrice;
    }

    /**
     * @dev Withdraw the amount of coins from contract
     */
    function withdraw() external onlyOwner {
        (bool success,) = payable(owner()).call{value : address(this).balance}("");
        require(success, "PrivateSales: unsuccessful withdraw");
    }
}

