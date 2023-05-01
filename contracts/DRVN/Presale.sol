// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/utils/TokenTimelock.sol";

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

    function enablePreSales() external onlyOwner {
        _setAllowed(0x0A0f423b26AdE420c960c8Ca9a30170afc5f4001, true);
        preSalesEnabled = true;
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
        TokenTimelock lock = new TokenTimelock(token, beneficiaryAddress, releaseTime);
        token.transfer(address(lock), amount);
        lockContracts[beneficiaryAddress].push(address(lock));
    }

    function getAccountLockContracts(address account) external view returns (address[] memory) {
        return lockContracts[account];
    }

    function buy() external payable {
    require(preSalesEnabled, "PreSales: sale is not enabled");
    require(allowed[msg.sender], "PreSales: address not allowed");
    require(msg.value > 0, "PreSales: should not be zero amount");

    uint256 amount = (msg.value * coinPrice) / 10**18;

    require(token.balanceOf(address(this)) >= amount, "PreSales: insufficient balance");

    uint256 halfAmount = amount / 2;
    uint256 remainingAmount = amount - halfAmount;

    require(token.transferFrom(msg.sender, address(this), halfAmount), "PreSales: token transfer failed");

    // Remaining tokens released after 360 days
    uint256 releaseTime = block.timestamp + 360 days;
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