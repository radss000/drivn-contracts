// SPDX-License-Identifier: MIT

pragma solidity 0.8.15;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/token/ERC20/utils/TokenTimelock.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "./VestingContract.sol";

/***
 * @title Drivn
 * @author radss000
 */

contract TokenTimeLockFactory is Ownable {
    function createTimeLock(IERC20 token, address beneficiaryAddress, uint256 releaseTime, uint256 amount) external onlyOwner returns (TokenTimelock) {
        TokenTimelock lock = new TokenTimelock(token, beneficiaryAddress, releaseTime);
        token.transfer(address(lock), amount);
        return lock;
    }
}
contract PrivateSales is Ownable {
    using SafeERC20 for IERC20;

    // DRVN token
    IERC20 public immutable token;

    // coin price
    uint256 public coinPrice;

    // private sale enable flag
    bool public privateSalesEnabled;

    // Vesting contract instance
    VestingContract public vesting;

    // mapping between address and its created VestingContracts 
    mapping(address => address[]) public vestingWallets;

    // mapping for allowed addresses
    mapping(address => bool) public isAllowed;

    // Events
    event TokenPurchase(address indexed buyer, uint256 amount, uint256 releaseTime);
    event CoinPriceUpdated(uint256 newCoinPrice);

    constructor(IERC20 token_, uint256 initialCoinPrice) {
        token = token_;
        coinPrice = initialCoinPrice;
    }

    function updateCoinPrice(uint256 newCoinPrice) external onlyOwner {
        coinPrice = newCoinPrice;
        emit CoinPriceUpdated(newCoinPrice);
    }
    /** 
     * @dev setting privateSalesEnabled variable
     * @param enabled boolean True if enables, False otherwise
    */
    function setPrivateSalesEnabled(bool enabled) external onlyOwner {
        privateSalesEnabled = enabled;
    }

    /** 
     * @dev setting allowed addresses
     * @param allowed boolean True if enables, False otherwise
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


    event Withdrawn(address indexed owner, uint256 amount);

    /**
     * @dev Withdraw the amount of coins from contract address to owner
     */
    function withdraw() external onlyOwner {
        uint256 balance = token.balanceOf(address(this));
        require(balance > 0, "PrivateSales: contract has no balance");

        token.safeTransfer(owner(), balance);

        emit Withdrawn(owner(), balance);
    }

    function getContractTokenBalance() external view returns (uint256) {
    return token.balanceOf(address(this));
}

    function getContractBalance() external view returns (uint256) {
    return address(this).balance;
}

    event TokensBought(address indexed buyer, uint256 amount, uint256 price);

    //**
 //* @dev Buy the coins in private Coins supply
 //
    function buy(uint256 amount) external payable whenAllowed {
        require(privateSalesEnabled, "Private sales is not enabled");
        require(amount > 0, "Amount must be greater than 0");

        uint256 tokenPrice;
        uint256 tokensSold;
        uint256 remainingEth;

        uint256 cliff;
        uint256 vestingDuration;
        uint256 initialAmountPercentage;
        uint256 releaseTime;

        if (amount <= 7000000) {
            // Private Sale 1
            tokenPrice = 27000000000000; // $0.045
            tokensSold = amount;

            cliff = 8 * 30 days; // cliff period of 8 months
            vestingDuration = 10 * 30 days; // vesting period of 10 months
            initialAmountPercentage = 10; // TGE => 10% of the allocation
        } else if (amount <= 13000000) {
            // Private Sale 2
            tokenPrice = 45000000000000; // $0.075
            tokensSold = amount - 7000000;

            cliff = 4 * 30 days; // cliff period of 4 months
            vestingDuration = 8 * 30 days; // vesting period of 8 months
            initialAmountPercentage = 15; // TGE => 15% of the allocation
        } else {
            revert("PrivateSales: amount exceeds total number of tokens available for private sale");
        }

        uint256 price = tokenPrice * tokensSold;

        require(msg.value >= price, "Insufficient Ether sent");

        // transfer the tokens to the buyer
        token.safeTransfer(msg.sender, tokensSold);

        // calculate the remaining Ether, and transfer it to the owner of the contract
        remainingEth = msg.value - price;
        if (remainingEth > 0) {
            payable(owner()).transfer(remainingEth);
        }

        // create a token time lock for the buyers tokens
        uint256 initialAmount = (tokensSold * initialAmountPercentage) / 100;
        uint256 remainingAmount = tokensSold - initialAmount;
        releaseTime = block.timestamp + cliff;

        // 1st day of the month at 00:00 UTC
        uint256 monthInSeconds = 30 days;
        releaseTime = (releaseTime / monthInSeconds) * monthInSeconds;

        TokenTimeLockFactory factory = new TokenTimeLockFactory();
        TokenTimelock initialLock = factory.createTimeLock(token, msg.sender, releaseTime, initialAmount);

        vestingWallets[msg.sender].push(address(initialLock));
        
        uint256 linearUnlock = remainingAmount / vestingDuration;
        for (uint256 i = 1; i <= vestingDuration / monthInSeconds; i++) {
            uint256 unlockTime = releaseTime + (i * monthInSeconds);
            factory.createTimeLock(token, msg.sender, unlockTime, linearUnlock);
        }

        emit TokensBought(msg.sender, tokensSold, price);
    }

        function getVestingWallets(address walletAddress) external view returns (address[] memory) {
            return vestingWallets[walletAddress];
        }

    }
