// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "./IEarnNFTManagement.sol";

interface IEarnNFT {
    function mint(address account) external returns (uint256);
    function burn(uint256 tokenId) external;
    function setAllowed(address allowedAddress, bool allowed) external;
    function level(uint256 tokenId) external view returns (uint256);
}

contract EarnNFT is ERC721Enumerable, Ownable, IEarnNFT {
    using Counters for Counters.Counter;

    // token counter
    Counters.Counter public tokenIdCounter;

    // mapping for allowed addresses
    mapping(address => bool) public isAllowed;

    // base token URI
    string public baseTokenURI;

    IEarnNFTManagement public earnNFTManagement;

    /**
     * @dev Sets main dependencies and constants
     * @param name_ 721A nft name
     * @param symbol_ 721A nft symbol
     * @param baseURI baseUri for mint
     * @param earnNFTManagement_ address of EarnNFTManagement contract
     */
    constructor(
        string memory name_,
        string memory symbol_,
        string memory baseURI,
        address earnNFTManagement_
    ) ERC721(name_, symbol_) {
        setBaseURI(baseURI);
        earnNFTManagement = IEarnNFTManagement(earnNFTManagement_);
    }

    /**
     * @dev modifier to detect if address is allowed for specific operation
     */
    modifier whenAllowed() {
        require(isAllowed[msg.sender], "EarnNFT: address is not allowed to call this function");
        _;
    }

    /**
     * @dev minting the token on certain address
     */
    function mint(address account) external override whenAllowed returns (uint256) {
        tokenIdCounter.increment();
        uint256 tokenId = tokenIdCounter.current();
        _mint(account, tokenId);
        return tokenId;
    }

    /**
     * @dev burning the token
     * @param tokenId id of token
     */
    function burn(uint256 tokenId) external override whenAllowed {
        _burn(tokenId);
    }

    /**
     * @dev setting allowed addresses for nft usage
     * @param allowedAddress allowed address
     * @param allowed True/False bool for enable certain operations
     */
    function setAllowed(address allowedAddress, bool allowed) external override onlyOwner {
        isAllowed[allowedAddress] = allowed;
    }

    /**
     * @dev Set the base URI
     * @param baseURI_ Base path to metadata
     */
    function setBaseURI(string memory baseURI_) public virtual onlyOwner {
        baseTokenURI = baseURI_;
    }

    function level(uint256 tokenId) external view override returns (uint256) {
        IEarnNFTManagement.NFTInformation memory nftInfo = earnNFTManagement.nftInfo(tokenId);
        return uint256(nftInfo.nftType);
    }
    /**
     * @dev Get current base uri
     */
    

    function _baseURI() internal view override returns (string memory) {
        return baseTokenURI;
    }
}
