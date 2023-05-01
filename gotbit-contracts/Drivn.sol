//SPDX-License-Identifier: MIT
pragma solidity =0.8.18;

import '@openzeppelin/contracts/token/ERC20/ERC20.sol';

/***
 * @title Drivn
 * @author gotbit
 */

contract Drivn is ERC20 {
    uint256 public constant TOTAL_SUPPLY = 100_000_000 ether;

    constructor(string memory name, string memory symbol) ERC20(name, symbol) {
        _mint(msg.sender, TOTAL_SUPPLY);
    }
}
