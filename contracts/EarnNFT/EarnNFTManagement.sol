// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

import "./ECDSA.sol";
import "@openzeppelin/contracts-upgradeable/utils/ContextUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

import "@openzeppelin/contracts/utils/Counters.sol";

import "./IEarnNFT.sol";
import "./IGTT.sol";

// enum for electic vehicle
enum EType { CAR, BICYCLE, SCOOTER }

// enum for NFT type
enum Level { COMMON, UNCOMMON, RARE, EPIC }

// struct NFT information
struct NFTInformation {
    Level nftType;
    EType eType;
    uint256 powerClaimed;
}

contract EarnNFTManagement is Initializable, ContextUpgradeable, OwnableUpgradeable  {
    using Counters for Counters.Counter;
    using ECDSA for bytes32;

    // car token counter
    Counters.Counter public carCounter;

    // bicycle token counter
    Counters.Counter public bicycleCounter;

    // scooter token counter
    Counters.Counter public scooterCounter;

    // gtt coin
    IGTT public gttCoin;

    // gtt coin
    IEarnNFT public earnNFT;

    // mapping for nft information
    mapping(uint256=>NFTInformation) public nftInfo;

    // max car possible supply
    uint256 public maxCarSupply;

    // max bicycle possible supply
    uint256 public maxBicycleSupply;

    // max scooter possible supply
    uint256 public maxScooterSupply;

    // commong token price
    uint256 public carTokenPrice;

    // commong token price
    uint256 public bicycleTokenPrice;

    // commong token price
    uint256 public scooterTokenPrice;

    // daily power cap
    uint256 public dailyPowerCap;

    // daily token cap
    uint256 public dailyTokenCap;

    // mapping for daily claimed power
    mapping(uint256 => mapping(address => uint256)) public dailyClaimedPower;

    // mapping for daily claimed tokens
    mapping(uint256 => mapping(address => uint256)) public dailyClaimedTokens;

    // variable to store the timestamp of the last claim
    uint256 public lastClaimTimestamp;

    // mapping for allowed addresses
    mapping(address=>bool) public isAllowed;

    // signer of the message
    address public messageSigner;

    uint256 private constant BASE_MERGE_FEE = 1000;



    /**
     * @dev Emitted when mint method is called
     */
    event Mint(address indexed sender, EType indexed eType, uint256 indexed tokenId);

    /**
     * @dev Emitted when merge method is called
     */
    event Merge(address indexed owner, uint256 indexed tokenId, uint256 newPower, Level rarity);


        // daily claim limit
    uint256 public dailyClaimLimit;

    /**
     * @dev Sets main dependencies and constants
     * @param earnNFTAddress_ ERC721 contract address
     * @param gttAddress_ GTT ERC20 address
     * @param url url of backend endpoint
     * @param carTokenPrice_ price of car token
     * @param bicycleTokenPrice_ price of bicycle token
     * @param scooterTokenPrice_ price of scooter token
     * @param dailyPowerCap_ daily power cap
     * @param dailyTokenCap_ daily token cap
     * @param dailyClaimLimit_ daily claim limit
     */
    function initialize(
        address earnNFTAddress_,
        address gttAddress_,
        string memory url,
        uint256 carTokenPrice_,
        uint256 bicycleTokenPrice_,
        uint256 scooterTokenPrice_,
        uint256 dailyPowerCap_,
        uint256 dailyTokenCap_,
        uint256 dailyClaimLimit_
    )
    public initializer 
    {
        __Context_init();
        __Ownable_init();

        gttCoin = IGTT(gttAddress_);
        earnNFT = IEarnNFT(earnNFTAddress_);

        // define initial eType supplies
        maxCarSupply = 7000;
        maxBicycleSupply = 1000;
        maxScooterSupply = 2000;

        carTokenPrice = carTokenPrice_;
        bicycleTokenPrice = bicycleTokenPrice_;
        scooterTokenPrice = scooterTokenPrice_;

        dailyPowerCap = dailyPowerCap_;
        dailyTokenCap = dailyTokenCap_;
        dailyClaimLimit = dailyClaimLimit_;
        lastClaimTimestamp = block.timestamp;    
    }


    /**
     * @dev setting maxCarSupply
     * @param maxCarSupply_ car supply
    */
    
    function setMaxCarSupply(uint256 maxCarSupply_) external onlyOwner {
        maxCarSupply = maxCarSupply_;
    }

    /**
     * @dev setting maxBicycleSupply
     * @param maxBicycleSupply_ car supply
    */
    
    function setMaxBicycleSupply(uint256 maxBicycleSupply_) external onlyOwner {
        maxBicycleSupply = maxBicycleSupply_;
    }

    /**
     * @dev setting maxScooterSupply
     * @param maxScooterSupply_ car supply
    */
    
    function setMaxScooterSupply(uint256 maxScooterSupply_) external onlyOwner {
        maxScooterSupply = maxScooterSupply_;
    }

    /** 
     * @dev setting the message signer
     * @param messageSigner_ signer of the message
    */

    function setMessageSigner(address messageSigner_) external onlyOwner {
        messageSigner = messageSigner_;
    }


    /**
     * @dev buying the token
     * @param eType vehicle type
    */
     
    function mint(EType eType, bytes memory allowSignature) external payable {
        require(isAllowed[msg.sender], "EarnNFTManagement: Sender not allowed");

        uint256 price;
        if (eType == EType.CAR) {
            price = carTokenPrice;
        } else if (eType == EType.BICYCLE) {
            price = bicycleTokenPrice;
        } else if (eType == EType.SCOOTER) {
            price = scooterTokenPrice;
        } else {
            revert("EarnNFTManagement: Invalid vehicle type");
        }

        require(msg.value == price, "EarnNFTManagement: Incorrect Ether value");

        // Check if user has reached their daily power and token cap
        require(dailyClaimedPower[block.timestamp][msg.sender] < dailyPowerCap, "EarnNFTManagement: User has reached their daily Power cap");
        require(dailyClaimedTokens[block.timestamp][msg.sender] < dailyTokenCap, "EarnNFTManagement: User has reached their daily Token cap");

        if (eType == EType.CAR) {
            carCounter.increment();
            uint256 carCount = carCounter.current();
            require(carCount <= maxCarSupply, "EarnNFTManagement: Can't mint, max car supply reached");
        } else if (eType == EType.BICYCLE) {
            bicycleCounter.increment();
            uint256 bicycleCount = bicycleCounter.current();
            require(bicycleCount <= maxBicycleSupply, "EarnNFTManagement: Can't mint, max bicycle supply reached");
        } else if (eType == EType.SCOOTER) {
            scooterCounter.increment();
            uint256 scooterCount = scooterCounter.current();
            require(scooterCount <= maxScooterSupply, "EarnNFTManagement: Can't mint, max scooter supply reached");
        }

        uint256 tokenId = earnNFT.mint(msg.sender);

        nftInfo[tokenId] = NFTInformation(
                Level.COMMON, // nft type is common
                eType, // EVehile
                0 // power claimed
            );

        emit Mint(msg.sender, eType, tokenId);
    }

uint256 private constant COMMON_RARITY_MULTIPLIER = 1;
uint256 private constant UNCOMMON_RARITY_MULTIPLIER = 2;
uint256 private constant RARE_RARITY_MULTIPLIER = 3;
uint256 private constant EPIC_RARITY_MULTIPLIER = 4;

function _getRarity(uint256 tokenId) private view returns (uint256) {
    uint256 rarity = 0;
    uint256 level = earnNFT.level(tokenId);
    
    if (level == 1) {
        rarity = 1; // common
    } else if (level == 2) {
        rarity = 2; // uncommon
    } else if (level == 3) {
        rarity = 3; // rare
    } else if (level == 4) {
        rarity = 4; // epic
    }
    
    return rarity;
}

    function calculateMergeFee(Level newRarity) public view returns (uint256) {
        uint256 rarityMultiplier = 0;
        if (newRarity == Level.EPIC) {
            rarityMultiplier = EPIC_RARITY_MULTIPLIER;
        } else if (newRarity == Level.RARE) {
            rarityMultiplier = RARE_RARITY_MULTIPLIER;
        } else if (newRarity == Level.UNCOMMON) {
            rarityMultiplier = UNCOMMON_RARITY_MULTIPLIER;
        } else {
            rarityMultiplier = COMMON_RARITY_MULTIPLIER;
        }

        uint256 mergeFee = BASE_MERGE_FEE * rarityMultiplier;
    return mergeFee;
    }


    /**
 * @dev Merges up to 4 NFTs.
 * @param tokenIds An array containing the token IDs of the NFTs to merge.
 */


   function merge(uint256[] calldata tokenIds) external {
        require(tokenIds.length >= 2 && tokenIds.length <= 4, "EarnNFTManagement: Invalid number of tokens to merge");
        
        EType eTypeToCheck = nftInfo[tokenIds[0]].eType;
        uint8 commonCount = 0;
        uint8 uncommonCount = 0;
        uint8 rareCount = 0;
        uint8 epicCount = 0;

        for (uint256 i = 0; i < tokenIds.length; i++) {
            require(earnNFT.ownerOf(tokenIds[i]) == msg.sender, "EarnNFTManagement: sender is not the owner of the tokens");
            require(nftInfo[tokenIds[i]].eType == eTypeToCheck, "EarnNFTManagement: EType of nft does not match");

            Level rarity = nftInfo[tokenIds[i]].nftType;
            if (rarity == Level.COMMON) {
                commonCount++;
            } else if (rarity == Level.UNCOMMON) {
                uncommonCount++;
            } else if (rarity == Level.RARE) {
                rareCount++;
            } else if (rarity == Level.EPIC) {
                epicCount++;
            }
        }

        Level newRarity;
        uint256 newPower;

        if (commonCount == 2 && uncommonCount == 0 && rareCount == 0 && epicCount == 0) {
            newRarity = Level.UNCOMMON;
            newPower = 1800;
        } else if (commonCount == 3 && uncommonCount == 0 && rareCount == 0 && epicCount == 0) {
            newRarity = Level.RARE;
            newPower = 2700;
        } else if (commonCount == 1 && uncommonCount == 1 && rareCount == 0 && epicCount == 0) {
            newRarity = Level.RARE;
            newPower = 2700;
        } else if (commonCount == 4 && uncommonCount == 0 && rareCount == 0 && epicCount == 0) {
            newRarity = Level.EPIC;
            newPower = 3600;
        } else if (commonCount == 0 && uncommonCount == 2 && rareCount == 0 && epicCount == 0) {
            newRarity = Level.EPIC;
            newPower = 3600;
        } else if (commonCount == 1 && uncommonCount == 0 && rareCount == 0 && epicCount == 1) {
            newRarity = Level.EPIC;
            newPower = 3600;
        } else {
            revert("EarnNFTManagement: Invalid merge combination");
        }

        uint256 fee = calculateMergeFee(newRarity);
        gttCoin.transferFrom(msg.sender, address(this), fee);

        uint256 tokenId = earnNFT.mint(msg.sender);

        nftInfo[tokenId] = NFTInformation(
            newRarity,
            eTypeToCheck,
            newPower
        );

        // burn original NFTs
        for (uint256 i = 0; i < tokenIds.length; i++) {
            nftInfo[tokenIds[i]].powerClaimed = 0; // set claimed power to zero before burning
            earnNFT.burn(tokenIds[i]);
        }

        emit Merge(msg.sender, tokenId, newPower, newRarity);
    }

    function getPowerClaimed(uint256 tokenId) public view returns (uint256) {
    return nftInfo[tokenId].powerClaimed;
    }


    function setCarTokenPrice(uint256 price) external onlyOwner {  // setting the price in wei 
    carTokenPrice = price;
    }

    function setBicycleTokenPrice(uint256 price) external onlyOwner {
        bicycleTokenPrice = price;
    }

    function setScooterTokenPrice(uint256 price) external onlyOwner {
        scooterTokenPrice = price;
    }

    /** 
     * @dev callback for Api Consumer
     * @param tokenId id of token
     * @param amount amount of coins
    */

    function generate(uint256 tokenId, uint256 amount, bytes memory allowSignature) external {
        bytes32 message = keccak256(abi.encodePacked(tokenId, amount, "earnNFT"));
        bytes32 hash = keccak256(abi.encodePacked("\x19Ethereum Signed Message:\n32", message));
        address signatureAddress = hash.recover(allowSignature);
        require(signatureAddress == messageSigner, "EarnNFTManagement: invalid signature");

        // Check if user has reached their daily claim limit
        require(dailyClaimedPower[block.timestamp][msg.sender] + amount <= dailyClaimLimit, "EarnNFTManagement: User has reached their daily claim limit");

        gttCoin.mint(earnNFT.ownerOf(tokenId), amount - nftInfo[tokenId].powerClaimed);
        nftInfo[tokenId].powerClaimed = amount;

        dailyClaimedPower[block.timestamp][msg.sender] += amount;
    }


    /**
     * @dev withdraw the amount of coins from contract address to owner
    */

    function withdraw() external onlyOwner {
        (bool success,) = payable(owner()).call{value : address(this).balance}("");
        require(success, "EarnNFTManagement: unsuccessful withdraw");
    }
}
