//SPDX-License-Identifier: MIT
pragma solidity >=0.5.16;

/**
 * @title ExchangePoolAccessControl
 * @notice This contract implements openzeppelin AccessControl functionality
  because of different compiler version of uniswap pair and openzepplin lib contract
 * @author gotbit
 */

contract ExchangePoolAccessControl {
    bytes32 public constant DEFAULT_ADMIN_ROLE = 0x0;
    bytes32 public constant LIQUIDITY_PROVIDER_ROLE =
        keccak256('LIQUIDITY_PROVIDER_ROLE');

    // role => (user => hasRole)
    mapping(bytes32 => mapping(address => bool)) private _roles;

    modifier onlyRole(bytes32 role_) {
        require(hasRole(role_, msg.sender), 'Address does not have role');
        _;
    }

    /// @dev Allows to view selected role ownership for needed address
    /// @param role_ is role to check user has this role
    /// @param who_ is user address to check has selected role
    function hasRole(bytes32 role_, address who_) public view returns (bool) {
        return _roles[role_][who_];
    }

    /// @dev Internal function to grant role to selected address
    /// @param role_ is role to grant
    /// @param to_ is address to grant selected role to
    function _grantRole(bytes32 role_, address to_) internal {
        require(!_roles[role_][to_], 'Alerady has role');
        _roles[role_][to_] = true;
    }

    /// @dev Internal function to revoke role from selected address
    /// @param role_ is role to revoke
    /// @param from_ is address to revoke selected role from
    function _revokeRole(bytes32 role_, address from_) internal {
        require(_roles[role_][from_], 'Does not have role');
        _roles[role_][from_] = false;
    }

    /// @dev External function allowing only admin to grant roles
    /// @param role_ is role to grant
    /// @param to_ is address to grant selected role to
    function grantRole(bytes32 role_, address to_) external onlyRole(DEFAULT_ADMIN_ROLE) {
        _grantRole(role_, to_);
    }

    /// @dev External function allowing only admin to revoke roles
    /// @param role_ is role to revoke
    /// @param from_ is address to revoke selected role from
    function revokeRole(bytes32 role_, address from_)
        external
        onlyRole(DEFAULT_ADMIN_ROLE)
    {
        _revokeRole(role_, from_);
    }
}
