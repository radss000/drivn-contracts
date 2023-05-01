//SPDX-License-Identifier: MIT
pragma solidity =0.8.18;

import '@openzeppelin/contracts/token/ERC20/ERC20.sol';
import '@openzeppelin/contracts/access/AccessControl.sol';

/***
 * @title GTT
 * @author gotbit
 */

contract GTT is ERC20, AccessControl {
    bytes32 public constant MINTER_ROLE = keccak256('MINTER_ROLE');
    bytes32 public constant BURNER_ROLE = keccak256('BURNER_ROLE');

    uint256 public constant INITIAL_SUPPLY = 200_000 ether;

    constructor(
        string memory name,
        string memory symbol,
        address admin
    ) ERC20(name, symbol) {
        _mint(msg.sender, INITIAL_SUPPLY);
        _grantRole(DEFAULT_ADMIN_ROLE, admin);
    }

    /// @dev Only the owner mints to user selected amount
    /// @param to tokens recipient
    /// @param amount amount to receive
    function mint(address to, uint256 amount) external onlyRole(MINTER_ROLE) {
        _mint(to, amount);
    }

    /// @dev Only the owner burns selected amount of tokens from user
    /// @param from address of user to burn from
    /// @param amount amount to burn from user
    function burn(address from, uint256 amount) external onlyRole(BURNER_ROLE) {
        _burn(from, amount);
    }
}
