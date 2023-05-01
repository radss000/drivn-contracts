// SPDX-License-Identifier: MIT

pragma solidity 0.8.0;

import "C:\Users\radia\node_modules\@openzeppelin\contracts\token\ERC20\SafeERC20.sol";
import "@openzeppelin/contracts/utils/Address.sol";
import "@openzeppelin/contracts/utils/Context.sol";
import "C:\Users\radia\node_modules\@openzeppelin\contracts\math\Math.sol";

contract VestingContract is Context {
    event Released(uint256 amount);

    uint256 private _released;
    address private immutable _beneficiary;
    address private immutable _token;
    uint64 private immutable _duration;
    uint64 private immutable _cliff;
    uint256 private immutable _start;

    constructor(
        address beneficiary_,
        uint256 startTimestamp_,
        uint64 duration_,
        uint64 cliff_,
        address token_
    ) {
        require(beneficiary_ != address(0), "VestingContract: beneficiary is zero address");
        require(duration_ > 0, "VestingContract: duration is zero");
        require(duration_ > cliff_, "VestingContract: duration must be greater than cliff");
        _beneficiary = beneficiary_;
        _duration = duration_;
        _cliff = cliff_;
        _start = startTimestamp_;
        _token = token_;
    }

    function beneficiary() public view virtual returns (address) {
        return _beneficiary;
    }

    function start() public view virtual returns (uint256) {
        return _start;
    }

    function duration() public view virtual returns (uint256) {
        return _duration;
    }

    function cliff() public view virtual returns (uint256) {
        return _cliff;
    }

    function released() public view virtual returns (uint256) {
        return _released;
    }

    function release() public virtual {
        uint256 releasable = vestedAmount(uint64(block.timestamp)) - released();
        _released += releasable;
        emit Released(releasable);
        SafeERC20.safeTransfer(IERC20(_token), beneficiary(), releasable);
    }

    function vestedAmount(uint64 timestamp) public view virtual returns (uint256) {
        return _vestingSchedule(IERC20(_token).balanceOf(address(this)) + released(), timestamp);
    }

    function _vestingSchedule(uint256 totalAllocation, uint64 timestamp) internal view virtual returns (uint256) {
        if (timestamp < start()) {
            return 0;
        } else if (timestamp <= start() + cliff()) {
            return 0;
        } else if (timestamp > start() + duration()) {
            return totalAllocation;
        } else {
            return (totalAllocation * (timestamp - start() - cliff())) / (duration() - cliff());
        }
    }
}
