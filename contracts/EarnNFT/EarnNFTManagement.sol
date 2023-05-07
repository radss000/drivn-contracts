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
    uint256 public constant commonTokenCarPrice = 0.01 ether;

    // commong token price
    uint256 public constant commonTokenBicyclePrice = 0.01 ether;

    // commong token price
    uint256 public constant commonTokenScooterPrice = 0.01 ether;

    // mapping for allowed addresses
    mapping(address=>bool) public isAllowed;

    // signer of the message
    address public messageSigner;


    /**
     * @dev Emitted when mint method is called
     */
    event Mint(address indexed sender, EType indexed eType, uint256 indexed tokenId);

    /**
     * @dev Emitted when merge method is called
     */
    event Merge(address indexed owner, uint256 indexed tokenId, uint256 newPower, Level rarity);


    /** 
     * @dev Sets main dependencies and constants
     * @param earnNFTAddress_ ERC721 contract address
     * @param gttAddress_ GTT ERC20 address
     * @param url url of backend endpoint
    */

    function initialize(
        address earnNFTAddress_,
        address gttAddress_,
        string memory url
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

    function mint(EType eType) external payable {

        if (eType == EType.CAR) {
            carCounter.increment();
            uint256 carCount = carCounter.current();
            require(commonTokenCarPrice == msg.value, "EarnNFTManagement: not enough money");
            require(carCount <= maxCarSupply, "EarnNFTManagement: can't mint, max car supply reached");
        }
        
        if (eType == EType.BICYCLE) {
            bicycleCounter.increment();
            uint256 _bicycleCount = bicycleCounter.current();
            require(commonTokenBicyclePrice == msg.value, "EarnNFTManagement: not enough money");
            require(_bicycleCount <= maxBicycleSupply, "EarnNFTManagement: can't mint, max bicycle supply reached");
        }

        if (eType == EType.SCOOTER) {
            scooterCounter.increment();
            uint256 _scooterCount = scooterCounter.current();
            require(commonTokenScooterPrice == msg.value, "EarnNFTManagement: not enough money");
            require(_scooterCount <= maxScooterSupply, "EarnNFTManagement: can't mint, max scooter supply reached");
        }

        uint256 tokenId = earnNFT.mint(msg.sender);

        nftInfo[tokenId] = NFTInformation(
            Level.COMMON, // nft type is common
            eType, // EVehile
            0 // power claimed
        );

        emit Mint(msg.sender, eType, tokenId);
    }

    function calculateMergeFee(Level newRarity) internal pure returns (uint256) {
        uint256 fee;
        if (newRarity == Level.UNCOMMON) {
            fee = 2500 * 10**18; // Fee for Uncommon
        } else if (newRarity == Level.RARE) {
            fee = 5000 * 10**18; // Fee for Rare
        } else if (newRarity == Level.EPIC) {
            fee = 7500 * 10**18; // Fee for Epic
        } else {
            revert("Invalid rarity value");
        }
        return fee;
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

        for (uint256 i = 0; i < tokenIds.length; i++) {
            earnNFT.burn(tokenIds[i]);
        }

        emit Merge(msg.sender, tokenId, newPower, newRarity);
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

        gttCoin.mint(earnNFT.ownerOf(tokenId), amount - nftInfo[tokenId].powerClaimed);
        nftInfo[tokenId].powerClaimed = amount;
    }

    /**
     * @dev withdraw the amount of coins from contract address to owner
    */

    function withdraw() external onlyOwner {
        (bool success,) = payable(owner()).call{value : address(this).balance}("");
        require(success, "EarnNFTManagement: unsuccessful withdraw");
    }

}
