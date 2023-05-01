// // SPDX-License-Identifier: MIT
pragma solidity 0.8.0;

// import "@openzeppelin/contracts-upgradeable/utils/ContextUpgradeable.sol";
// import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
// import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
// import "@openzeppelin/contracts/utils/Counters.sol";

// import "./IBurnNFT.sol";

// // enum for electic vehicle
// enum EType { CAR, BICYCLE, SCOOTER }

// // struct NFT information
// struct NFTInformation {
//     EType eType;
//     uint256 lastUsage;
//     uint256 powerLeft;
//     uint256 maxPower;
//     uint256 score;
// }

// contract BurnNFTManagement is Initializable, ContextUpgradeable, OwnableUpgradeable  {
//     using Counters for Counters.Counter;

//     // token counter
//     Counters.Counter public tokenIdCounter;

//     // max supply 
//     uint256 public maxBurnNFTSupply;

//     // burn power
//     uint256 public constant burnPower = 900;

//     // mapping for nft information
//     mapping(uint256=>NFTInformation) public nftInfo;

//     // mapping for allowed addresses
//     mapping(address=>bool) public isAllowed;

//     // mapping for nft earning gap
//     mapping(EType=>uint256) public vehicleGTTGap;

//     // burn nft instance
//     IBurnNFT public burnNFT;

//     /**
//      * @dev Emitted when mint method is called
//      */
//     event Mint(address indexed sender, uint256 indexed tokenId);

//     /**
//      * @dev Emitted when mint method is called
//      */
//     event Burn(address indexed sender, uint256 indexed tokenId, uint256 indexed amount);

//     /** 
//      * @dev Sets main dependencies and constants
//      * @param burnNFTAddress_ ERC721 contract address
//     */

//     function initialize(
//         address burnNFTAddress_
//     )
//     public initializer 
//     {
//         __Context_init();
//         __Ownable_init();

//         burnNFT = IBurnNFT(burnNFTAddress_);

//         // define nft GTT earning gap
//         vehicleGTTGap[EType.CAR] = 4 * 10 ** 18;
//         vehicleGTTGap[EType.SCOOTER] = 9 * 10 ** 18 / 2;
//         vehicleGTTGap[EType.BICYCLE] = 5 * 10 ** 18;

//         // setting max burn nft supply
//         maxBurnNFTSupply = 1000;
//     }


//     /**
//      * @dev buying the token
//     */

//     function mint(EType eType) external {
//         require(burnNFT.balanceOf(msg.sender) == 0, "BurnNFTManagement: you have already minted once");
        
//         tokenIdCounter.increment();
//         uint256 tokenId = tokenIdCounter.current();
        
//         require(tokenId < maxBurnNFTSupply, "BurnNFTManagement: max supply reached");

//         burnNFT.mint(msg.sender, tokenId);
        
//         nftInfo[tokenId] = NFTInformation(
//             eType, // EVehile
//             0, // last usage
//             burnPower, // powerLeft
//             burnPower, // max power,
//             0 // score
//         );

//         emit Mint(msg.sender, tokenId);
//     }

//     /**
//      * @dev setting maxBurnNftSupply
//      * @param maxBurnNFTSupply_ car supply
//     */
    
//     function setMaxBurnNFTSupply(uint256 maxBurnNFTSupply_) external onlyOwner {
//         maxBurnNFTSupply = maxBurnNFTSupply_;
//     }

//     /**
//      * @dev calculates power left for given token id
//      * @param tokenId nft token id
//     */

//     function calculatePower(uint256 tokenId) public view returns (uint256) {
//         uint256 maxPower = nftInfo[tokenId].maxPower;
//         uint256 replenishPower = nftInfo[tokenId].powerLeft + (block.timestamp - nftInfo[tokenId].lastUsage) * maxPower / 1 days;
//         replenishPower =  replenishPower <= maxPower ? replenishPower : maxPower;
//         return replenishPower;
//     }

//     /**
//      * @dev modifier to detect if address is allowed for specific operation
//     */

//     modifier whenAllowed() {
//         require(isAllowed[msg.sender], "BurnNFTManagement: address is not allowed to call this function");
//         _;
//     }
//     /**
//      * @dev setting allowed addresses for nft usage
//      * @param allowedAddress allowed address
//      * @param allowed True/False bool for enable certain operations
//     */
    
//     function setAllowed(address allowedAddress, bool allowed) external onlyOwner {
//         isAllowed[allowedAddress] = allowed;
//     }
    
//     /**
//      * @dev updates the vehicle traffic
//      * @param tokenId nft token id
//      * @param durationSeconds movement durations in seconds
//     */ 

//     function generate(uint256 tokenId, uint256 durationSeconds) external whenAllowed {
//         uint256 currentPower = calculatePower(tokenId);

//         if (currentPower < durationSeconds) {
//             durationSeconds = currentPower;
//         }

//         NFTInformation storage tokenInfo = nftInfo[tokenId];
//         currentPower = currentPower - durationSeconds;
//         tokenInfo.powerLeft = currentPower;
//         tokenInfo.lastUsage = block.timestamp;
        
//         uint256 earningGap = vehicleGTTGap[tokenInfo.eType];
//         tokenInfo.score += durationSeconds * earningGap / burnPower;
//     }

// }