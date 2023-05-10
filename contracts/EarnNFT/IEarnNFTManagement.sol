// SPDX-License-Identifier: MIT

pragma solidity ^0.8.18;

interface IEarnNFTManagement {
    enum EType { CAR, BICYCLE, SCOOTER }
    enum Level { COMMON, UNCOMMON, RARE, EPIC }
    struct NFTInformation {
        Level nftType;
        EType eType;
        uint256 powerClaimed;
        uint256 currentPower;
        uint256 lastClaimTime;
    }
    function initialize(address earnNFTAddress_, address gttAddress_, uint256 carTokenPrice_, uint256 bicycleTokenPrice_, uint256 scooterTokenPrice_, uint256 dailyPowerCap_, uint256 dailyTokenCap_, uint256 dailyClaimLimit_) external;
    function setAllowed(address _address, bool _allowed) external;
    function setMaxCarSupply(uint256 maxCarSupply_) external;
    function setMaxBicycleSupply(uint256 maxBicycleSupply_) external;
    function setMaxScooterSupply(uint256 maxScooterSupply_) external;
    function setMessageSigner(address messageSigner_) external;
    function mint(EType eType) external payable;
    function merge(uint256[] calldata tokenIds) external;
    function getPowerClaimed(uint256 tokenId) external view returns (uint256);
    function getCurrentPower(uint256 tokenId) external view returns (uint256);
    function setCarTokenPrice(uint256 price) external;
    function setBicycleTokenPrice(uint256 price) external;
    function setScooterTokenPrice(uint256 price) external;
    function nftInfo(uint256 tokenId) external view returns (NFTInformation memory);
}
