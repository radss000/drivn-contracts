// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/utils/TokenTimelock.sol";

/***
 * @title Drivn
 * @author radss000
 */

contract TokenTimeLockFactory is Ownable {
    function createTimeLock(IERC20 token, address beneficiaryAddress, uint256 releaseTime, uint256 amount) external onlyOwner {
        TokenTimelock lock = new TokenTimelock(token, beneficiaryAddress, releaseTime);
        token.transfer(address(lock), amount);
    }
}

contract PreSales is Ownable {
    // DRVN token
    IERC20 public immutable token;

    // coin price
    uint256 public coinPrice;

    // private sale enable flag
    bool public preSalesEnabled;

    // allowed addresses mapping
    mapping(address => bool) public allowed;

    // mapping between address and its created tokenTimeLock contracts
    mapping(address => address[]) public lockContracts;

    // Events
    event TokenPurchase(address indexed buyer, uint256 amount, uint256 releaseTime);
    event CoinPriceUpdated(uint256 newCoinPrice);

    constructor(IERC20 token_, uint256 initialCoinPrice) {
        token = token_;
        coinPrice = initialCoinPrice;
    }

    function setPreSalesEnabled(bool enabled) external onlyOwner {
        preSalesEnabled = enabled;
    }


    function setAllowed(address[] calldata addresses, bool isAllowed) external onlyOwner {
        for (uint256 i = 0; i < addresses.length; i++) {
            _setAllowed(addresses[i], isAllowed);
        }
    }

    function _setAllowed(address addr, bool isAllowed) internal {
        require(addr != address(0), "PreSales: zero address not allowed");
        allowed[addr] = isAllowed;
    }



    function isAllowed(address addr) external view returns (bool) {
        return allowed[addr];
    }

    function updateCoinPrice(uint256 newCoinPrice) external onlyOwner {
        coinPrice = newCoinPrice;
        emit CoinPriceUpdated(newCoinPrice);
    }

    function _createTimeLock(
        address beneficiaryAddress,
        uint256 releaseTime,
        uint256 amount
    ) internal {
        for (uint i = 0; i < 12; i++) {
            uint256 installmentReleaseTime = releaseTime + i * 30 days;
            TokenTimelock lock = new TokenTimelock(token, beneficiaryAddress, installmentReleaseTime);
            token.transfer(address(lock), amount / 12);
            lockContracts[beneficiaryAddress].push(address(lock));
        }
    }

    function getAccountLockContracts(address account) external view returns (address[] memory) {
        return lockContracts[account];
    }

    function getContractTokenBalance() external view returns (uint256) {
    return token.balanceOf(address(this));
}

    function buy() external payable {
        require(preSalesEnabled, "PreSales: sale is not enabled");
        require(allowed[msg.sender], "PreSales: address not allowed");
        require(msg.value > 0, "PreSales: should not be zero amount");

        uint256 amount = (msg.value * coinPrice) / 10**18;
        uint256 maxAmount = 9000000; // max nb of tokens that can be sold in seed sale 
        require(amount <= maxAmount, "PreSales: amount exceeds maximum number of tokens that can be sold in the Seed sale");

        require(token.transferFrom(msg.sender, address(this), amount), "PreSales: token transfer failed");

        // 5% tokens released immediately (TGE)
        uint256 immediateReleaseAmount = (amount * 5) / 100;
        token.transfer(msg.sender, immediateReleaseAmount);

        // 95% tokens released linearly after the cliff
        uint256 cliff = 10 * 30 days; // 10 months for the cliff period 
        uint256 remainingAmount = (amount * 95) / 100;
        uint256 releaseTime = block.timestamp + cliff;
        _createTimeLock(msg.sender, releaseTime, remainingAmount);

        emit TokenPurchase(msg.sender, amount, releaseTime);
    }

    function withdraw() external onlyOwner {
        payable(owner()).transfer(address(this).balance);
    }

    function getContractBalance() external view returns (uint256) {
    return address(this).balance;
}

    receive() external payable {}
}
