/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from 'ethers'
import { BytesLike } from '@ethersproject/bytes'
import { Listener, Provider } from '@ethersproject/providers'
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi'
import type { TypedEventFilter, TypedEvent, TypedListener } from './common'

interface EarnNFTManagementInterface extends ethers.utils.Interface {
  functions: {
    'bicycleCounter()': FunctionFragment
    'bicycleTokenPrice()': FunctionFragment
    'calculateMergeFee(uint8)': FunctionFragment
    'carCounter()': FunctionFragment
    'carTokenPrice()': FunctionFragment
    'dailyClaimLimit()': FunctionFragment
    'dailyClaimedPower(uint256,address)': FunctionFragment
    'dailyClaimedTokens(uint256,address)': FunctionFragment
    'dailyPowerCap()': FunctionFragment
    'dailyTokenCap()': FunctionFragment
    'earnNFT()': FunctionFragment
    'generate(uint256,uint256,bytes)': FunctionFragment
    'getCurrentPower(uint256)': FunctionFragment
    'getPowerClaimed(uint256)': FunctionFragment
    'gttCoin()': FunctionFragment
    'initialize(address,address,uint256,uint256,uint256,uint256,uint256,uint256)': FunctionFragment
    'isAllowed(address)': FunctionFragment
    'lastClaimTimestamp()': FunctionFragment
    'maxBicycleSupply()': FunctionFragment
    'maxCarSupply()': FunctionFragment
    'maxScooterSupply()': FunctionFragment
    'merge(uint256[])': FunctionFragment
    'messageSigner()': FunctionFragment
    'mint(uint8)': FunctionFragment
    'nftInfo(uint256)': FunctionFragment
    'owner()': FunctionFragment
    'renounceOwnership()': FunctionFragment
    'scooterCounter()': FunctionFragment
    'scooterTokenPrice()': FunctionFragment
    'setAllowed(address,bool)': FunctionFragment
    'setBicycleTokenPrice(uint256)': FunctionFragment
    'setCarTokenPrice(uint256)': FunctionFragment
    'setMaxBicycleSupply(uint256)': FunctionFragment
    'setMaxCarSupply(uint256)': FunctionFragment
    'setMaxScooterSupply(uint256)': FunctionFragment
    'setMessageSigner(address)': FunctionFragment
    'setScooterTokenPrice(uint256)': FunctionFragment
    'transferOwnership(address)': FunctionFragment
    'withdraw()': FunctionFragment
  }

  encodeFunctionData(functionFragment: 'bicycleCounter', values?: undefined): string
  encodeFunctionData(functionFragment: 'bicycleTokenPrice', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'calculateMergeFee',
    values: [BigNumberish]
  ): string
  encodeFunctionData(functionFragment: 'carCounter', values?: undefined): string
  encodeFunctionData(functionFragment: 'carTokenPrice', values?: undefined): string
  encodeFunctionData(functionFragment: 'dailyClaimLimit', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'dailyClaimedPower',
    values: [BigNumberish, string]
  ): string
  encodeFunctionData(
    functionFragment: 'dailyClaimedTokens',
    values: [BigNumberish, string]
  ): string
  encodeFunctionData(functionFragment: 'dailyPowerCap', values?: undefined): string
  encodeFunctionData(functionFragment: 'dailyTokenCap', values?: undefined): string
  encodeFunctionData(functionFragment: 'earnNFT', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'generate',
    values: [BigNumberish, BigNumberish, BytesLike]
  ): string
  encodeFunctionData(functionFragment: 'getCurrentPower', values: [BigNumberish]): string
  encodeFunctionData(functionFragment: 'getPowerClaimed', values: [BigNumberish]): string
  encodeFunctionData(functionFragment: 'gttCoin', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'initialize',
    values: [
      string,
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string
  encodeFunctionData(functionFragment: 'isAllowed', values: [string]): string
  encodeFunctionData(functionFragment: 'lastClaimTimestamp', values?: undefined): string
  encodeFunctionData(functionFragment: 'maxBicycleSupply', values?: undefined): string
  encodeFunctionData(functionFragment: 'maxCarSupply', values?: undefined): string
  encodeFunctionData(functionFragment: 'maxScooterSupply', values?: undefined): string
  encodeFunctionData(functionFragment: 'merge', values: [BigNumberish[]]): string
  encodeFunctionData(functionFragment: 'messageSigner', values?: undefined): string
  encodeFunctionData(functionFragment: 'mint', values: [BigNumberish]): string
  encodeFunctionData(functionFragment: 'nftInfo', values: [BigNumberish]): string
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string
  encodeFunctionData(functionFragment: 'renounceOwnership', values?: undefined): string
  encodeFunctionData(functionFragment: 'scooterCounter', values?: undefined): string
  encodeFunctionData(functionFragment: 'scooterTokenPrice', values?: undefined): string
  encodeFunctionData(functionFragment: 'setAllowed', values: [string, boolean]): string
  encodeFunctionData(
    functionFragment: 'setBicycleTokenPrice',
    values: [BigNumberish]
  ): string
  encodeFunctionData(functionFragment: 'setCarTokenPrice', values: [BigNumberish]): string
  encodeFunctionData(
    functionFragment: 'setMaxBicycleSupply',
    values: [BigNumberish]
  ): string
  encodeFunctionData(functionFragment: 'setMaxCarSupply', values: [BigNumberish]): string
  encodeFunctionData(
    functionFragment: 'setMaxScooterSupply',
    values: [BigNumberish]
  ): string
  encodeFunctionData(functionFragment: 'setMessageSigner', values: [string]): string
  encodeFunctionData(
    functionFragment: 'setScooterTokenPrice',
    values: [BigNumberish]
  ): string
  encodeFunctionData(functionFragment: 'transferOwnership', values: [string]): string
  encodeFunctionData(functionFragment: 'withdraw', values?: undefined): string

  decodeFunctionResult(functionFragment: 'bicycleCounter', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'bicycleTokenPrice', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'calculateMergeFee', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'carCounter', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'carTokenPrice', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'dailyClaimLimit', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'dailyClaimedPower', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'dailyClaimedTokens', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'dailyPowerCap', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'dailyTokenCap', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'earnNFT', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'generate', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getCurrentPower', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getPowerClaimed', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'gttCoin', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'initialize', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'isAllowed', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'lastClaimTimestamp', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'maxBicycleSupply', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'maxCarSupply', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'maxScooterSupply', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'merge', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'messageSigner', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'mint', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'nftInfo', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'renounceOwnership', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'scooterCounter', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'scooterTokenPrice', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'setAllowed', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'setBicycleTokenPrice', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'setCarTokenPrice', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'setMaxBicycleSupply', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'setMaxCarSupply', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'setMaxScooterSupply', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'setMessageSigner', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'setScooterTokenPrice', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'transferOwnership', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'withdraw', data: BytesLike): Result

  events: {
    'Initialized(uint8)': EventFragment
    'Merge(address,uint256,uint256,uint8)': EventFragment
    'Mint(address,uint8,uint256)': EventFragment
    'OwnershipTransferred(address,address)': EventFragment
  }

  getEvent(nameOrSignatureOrTopic: 'Initialized'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'Merge'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'Mint'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'OwnershipTransferred'): EventFragment
}

export type InitializedEvent = TypedEvent<[number] & { version: number }>

export type MergeEvent = TypedEvent<
  [string, BigNumber, BigNumber, number] & {
    owner: string
    tokenId: BigNumber
    newPower: BigNumber
    rarity: number
  }
>

export type MintEvent = TypedEvent<
  [string, number, BigNumber] & {
    sender: string
    eType: number
    tokenId: BigNumber
  }
>

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>

export class EarnNFTManagement extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this

  listeners(eventName?: string): Array<Listener>
  off(eventName: string, listener: Listener): this
  on(eventName: string, listener: Listener): this
  once(eventName: string, listener: Listener): this
  removeListener(eventName: string, listener: Listener): this
  removeAllListeners(eventName?: string): this

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>

  interface: EarnNFTManagementInterface

  functions: {
    bicycleCounter(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { _value: BigNumber }>

    bicycleTokenPrice(overrides?: CallOverrides): Promise<[BigNumber]>

    calculateMergeFee(
      newRarity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>

    carCounter(overrides?: CallOverrides): Promise<[BigNumber] & { _value: BigNumber }>

    carTokenPrice(overrides?: CallOverrides): Promise<[BigNumber]>

    dailyClaimLimit(overrides?: CallOverrides): Promise<[BigNumber]>

    dailyClaimedPower(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>

    dailyClaimedTokens(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>

    dailyPowerCap(overrides?: CallOverrides): Promise<[BigNumber]>

    dailyTokenCap(overrides?: CallOverrides): Promise<[BigNumber]>

    earnNFT(overrides?: CallOverrides): Promise<[string]>

    generate(
      tokenId: BigNumberish,
      amount: BigNumberish,
      allowSignature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    getCurrentPower(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>

    getPowerClaimed(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>

    gttCoin(overrides?: CallOverrides): Promise<[string]>

    initialize(
      earnNFTAddress_: string,
      gttAddress_: string,
      carTokenPrice_: BigNumberish,
      bicycleTokenPrice_: BigNumberish,
      scooterTokenPrice_: BigNumberish,
      dailyPowerCap_: BigNumberish,
      dailyTokenCap_: BigNumberish,
      dailyClaimLimit_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    isAllowed(arg0: string, overrides?: CallOverrides): Promise<[boolean]>

    lastClaimTimestamp(overrides?: CallOverrides): Promise<[BigNumber]>

    maxBicycleSupply(overrides?: CallOverrides): Promise<[BigNumber]>

    maxCarSupply(overrides?: CallOverrides): Promise<[BigNumber]>

    maxScooterSupply(overrides?: CallOverrides): Promise<[BigNumber]>

    merge(
      tokenIds: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    messageSigner(overrides?: CallOverrides): Promise<[string]>

    mint(
      eType: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    nftInfo(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [number, number, BigNumber, BigNumber, BigNumber] & {
        nftType: number
        eType: number
        powerClaimed: BigNumber
        currentPower: BigNumber
        lastClaimTime: BigNumber
      }
    >

    owner(overrides?: CallOverrides): Promise<[string]>

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    scooterCounter(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { _value: BigNumber }>

    scooterTokenPrice(overrides?: CallOverrides): Promise<[BigNumber]>

    setAllowed(
      _address: string,
      _allowed: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    setBicycleTokenPrice(
      price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    setCarTokenPrice(
      price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    setMaxBicycleSupply(
      maxBicycleSupply_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    setMaxCarSupply(
      maxCarSupply_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    setMaxScooterSupply(
      maxScooterSupply_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    setMessageSigner(
      messageSigner_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    setScooterTokenPrice(
      price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    withdraw(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>
  }

  bicycleCounter(overrides?: CallOverrides): Promise<BigNumber>

  bicycleTokenPrice(overrides?: CallOverrides): Promise<BigNumber>

  calculateMergeFee(
    newRarity: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>

  carCounter(overrides?: CallOverrides): Promise<BigNumber>

  carTokenPrice(overrides?: CallOverrides): Promise<BigNumber>

  dailyClaimLimit(overrides?: CallOverrides): Promise<BigNumber>

  dailyClaimedPower(
    arg0: BigNumberish,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>

  dailyClaimedTokens(
    arg0: BigNumberish,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>

  dailyPowerCap(overrides?: CallOverrides): Promise<BigNumber>

  dailyTokenCap(overrides?: CallOverrides): Promise<BigNumber>

  earnNFT(overrides?: CallOverrides): Promise<string>

  generate(
    tokenId: BigNumberish,
    amount: BigNumberish,
    allowSignature: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  getCurrentPower(tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>

  getPowerClaimed(tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>

  gttCoin(overrides?: CallOverrides): Promise<string>

  initialize(
    earnNFTAddress_: string,
    gttAddress_: string,
    carTokenPrice_: BigNumberish,
    bicycleTokenPrice_: BigNumberish,
    scooterTokenPrice_: BigNumberish,
    dailyPowerCap_: BigNumberish,
    dailyTokenCap_: BigNumberish,
    dailyClaimLimit_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  isAllowed(arg0: string, overrides?: CallOverrides): Promise<boolean>

  lastClaimTimestamp(overrides?: CallOverrides): Promise<BigNumber>

  maxBicycleSupply(overrides?: CallOverrides): Promise<BigNumber>

  maxCarSupply(overrides?: CallOverrides): Promise<BigNumber>

  maxScooterSupply(overrides?: CallOverrides): Promise<BigNumber>

  merge(
    tokenIds: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  messageSigner(overrides?: CallOverrides): Promise<string>

  mint(
    eType: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  nftInfo(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [number, number, BigNumber, BigNumber, BigNumber] & {
      nftType: number
      eType: number
      powerClaimed: BigNumber
      currentPower: BigNumber
      lastClaimTime: BigNumber
    }
  >

  owner(overrides?: CallOverrides): Promise<string>

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  scooterCounter(overrides?: CallOverrides): Promise<BigNumber>

  scooterTokenPrice(overrides?: CallOverrides): Promise<BigNumber>

  setAllowed(
    _address: string,
    _allowed: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  setBicycleTokenPrice(
    price: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  setCarTokenPrice(
    price: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  setMaxBicycleSupply(
    maxBicycleSupply_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  setMaxCarSupply(
    maxCarSupply_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  setMaxScooterSupply(
    maxScooterSupply_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  setMessageSigner(
    messageSigner_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  setScooterTokenPrice(
    price: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  withdraw(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  callStatic: {
    bicycleCounter(overrides?: CallOverrides): Promise<BigNumber>

    bicycleTokenPrice(overrides?: CallOverrides): Promise<BigNumber>

    calculateMergeFee(
      newRarity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    carCounter(overrides?: CallOverrides): Promise<BigNumber>

    carTokenPrice(overrides?: CallOverrides): Promise<BigNumber>

    dailyClaimLimit(overrides?: CallOverrides): Promise<BigNumber>

    dailyClaimedPower(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    dailyClaimedTokens(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    dailyPowerCap(overrides?: CallOverrides): Promise<BigNumber>

    dailyTokenCap(overrides?: CallOverrides): Promise<BigNumber>

    earnNFT(overrides?: CallOverrides): Promise<string>

    generate(
      tokenId: BigNumberish,
      amount: BigNumberish,
      allowSignature: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>

    getCurrentPower(tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>

    getPowerClaimed(tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>

    gttCoin(overrides?: CallOverrides): Promise<string>

    initialize(
      earnNFTAddress_: string,
      gttAddress_: string,
      carTokenPrice_: BigNumberish,
      bicycleTokenPrice_: BigNumberish,
      scooterTokenPrice_: BigNumberish,
      dailyPowerCap_: BigNumberish,
      dailyTokenCap_: BigNumberish,
      dailyClaimLimit_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>

    isAllowed(arg0: string, overrides?: CallOverrides): Promise<boolean>

    lastClaimTimestamp(overrides?: CallOverrides): Promise<BigNumber>

    maxBicycleSupply(overrides?: CallOverrides): Promise<BigNumber>

    maxCarSupply(overrides?: CallOverrides): Promise<BigNumber>

    maxScooterSupply(overrides?: CallOverrides): Promise<BigNumber>

    merge(tokenIds: BigNumberish[], overrides?: CallOverrides): Promise<void>

    messageSigner(overrides?: CallOverrides): Promise<string>

    mint(eType: BigNumberish, overrides?: CallOverrides): Promise<void>

    nftInfo(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [number, number, BigNumber, BigNumber, BigNumber] & {
        nftType: number
        eType: number
        powerClaimed: BigNumber
        currentPower: BigNumber
        lastClaimTime: BigNumber
      }
    >

    owner(overrides?: CallOverrides): Promise<string>

    renounceOwnership(overrides?: CallOverrides): Promise<void>

    scooterCounter(overrides?: CallOverrides): Promise<BigNumber>

    scooterTokenPrice(overrides?: CallOverrides): Promise<BigNumber>

    setAllowed(
      _address: string,
      _allowed: boolean,
      overrides?: CallOverrides
    ): Promise<void>

    setBicycleTokenPrice(price: BigNumberish, overrides?: CallOverrides): Promise<void>

    setCarTokenPrice(price: BigNumberish, overrides?: CallOverrides): Promise<void>

    setMaxBicycleSupply(
      maxBicycleSupply_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>

    setMaxCarSupply(maxCarSupply_: BigNumberish, overrides?: CallOverrides): Promise<void>

    setMaxScooterSupply(
      maxScooterSupply_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>

    setMessageSigner(messageSigner_: string, overrides?: CallOverrides): Promise<void>

    setScooterTokenPrice(price: BigNumberish, overrides?: CallOverrides): Promise<void>

    transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>

    withdraw(overrides?: CallOverrides): Promise<void>
  }

  filters: {
    'Initialized(uint8)'(version?: null): TypedEventFilter<[number], { version: number }>

    Initialized(version?: null): TypedEventFilter<[number], { version: number }>

    'Merge(address,uint256,uint256,uint8)'(
      owner?: string | null,
      tokenId?: BigNumberish | null,
      newPower?: null,
      rarity?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber, number],
      { owner: string; tokenId: BigNumber; newPower: BigNumber; rarity: number }
    >

    Merge(
      owner?: string | null,
      tokenId?: BigNumberish | null,
      newPower?: null,
      rarity?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber, number],
      { owner: string; tokenId: BigNumber; newPower: BigNumber; rarity: number }
    >

    'Mint(address,uint8,uint256)'(
      sender?: string | null,
      eType?: BigNumberish | null,
      tokenId?: BigNumberish | null
    ): TypedEventFilter<
      [string, number, BigNumber],
      { sender: string; eType: number; tokenId: BigNumber }
    >

    Mint(
      sender?: string | null,
      eType?: BigNumberish | null,
      tokenId?: BigNumberish | null
    ): TypedEventFilter<
      [string, number, BigNumber],
      { sender: string; eType: number; tokenId: BigNumber }
    >

    'OwnershipTransferred(address,address)'(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<[string, string], { previousOwner: string; newOwner: string }>

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<[string, string], { previousOwner: string; newOwner: string }>
  }

  estimateGas: {
    bicycleCounter(overrides?: CallOverrides): Promise<BigNumber>

    bicycleTokenPrice(overrides?: CallOverrides): Promise<BigNumber>

    calculateMergeFee(
      newRarity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    carCounter(overrides?: CallOverrides): Promise<BigNumber>

    carTokenPrice(overrides?: CallOverrides): Promise<BigNumber>

    dailyClaimLimit(overrides?: CallOverrides): Promise<BigNumber>

    dailyClaimedPower(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    dailyClaimedTokens(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    dailyPowerCap(overrides?: CallOverrides): Promise<BigNumber>

    dailyTokenCap(overrides?: CallOverrides): Promise<BigNumber>

    earnNFT(overrides?: CallOverrides): Promise<BigNumber>

    generate(
      tokenId: BigNumberish,
      amount: BigNumberish,
      allowSignature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    getCurrentPower(tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>

    getPowerClaimed(tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>

    gttCoin(overrides?: CallOverrides): Promise<BigNumber>

    initialize(
      earnNFTAddress_: string,
      gttAddress_: string,
      carTokenPrice_: BigNumberish,
      bicycleTokenPrice_: BigNumberish,
      scooterTokenPrice_: BigNumberish,
      dailyPowerCap_: BigNumberish,
      dailyTokenCap_: BigNumberish,
      dailyClaimLimit_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    isAllowed(arg0: string, overrides?: CallOverrides): Promise<BigNumber>

    lastClaimTimestamp(overrides?: CallOverrides): Promise<BigNumber>

    maxBicycleSupply(overrides?: CallOverrides): Promise<BigNumber>

    maxCarSupply(overrides?: CallOverrides): Promise<BigNumber>

    maxScooterSupply(overrides?: CallOverrides): Promise<BigNumber>

    merge(
      tokenIds: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    messageSigner(overrides?: CallOverrides): Promise<BigNumber>

    mint(
      eType: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    nftInfo(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>

    owner(overrides?: CallOverrides): Promise<BigNumber>

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    scooterCounter(overrides?: CallOverrides): Promise<BigNumber>

    scooterTokenPrice(overrides?: CallOverrides): Promise<BigNumber>

    setAllowed(
      _address: string,
      _allowed: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    setBicycleTokenPrice(
      price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    setCarTokenPrice(
      price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    setMaxBicycleSupply(
      maxBicycleSupply_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    setMaxCarSupply(
      maxCarSupply_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    setMaxScooterSupply(
      maxScooterSupply_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    setMessageSigner(
      messageSigner_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    setScooterTokenPrice(
      price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    withdraw(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>
  }

  populateTransaction: {
    bicycleCounter(overrides?: CallOverrides): Promise<PopulatedTransaction>

    bicycleTokenPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>

    calculateMergeFee(
      newRarity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    carCounter(overrides?: CallOverrides): Promise<PopulatedTransaction>

    carTokenPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>

    dailyClaimLimit(overrides?: CallOverrides): Promise<PopulatedTransaction>

    dailyClaimedPower(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    dailyClaimedTokens(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    dailyPowerCap(overrides?: CallOverrides): Promise<PopulatedTransaction>

    dailyTokenCap(overrides?: CallOverrides): Promise<PopulatedTransaction>

    earnNFT(overrides?: CallOverrides): Promise<PopulatedTransaction>

    generate(
      tokenId: BigNumberish,
      amount: BigNumberish,
      allowSignature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    getCurrentPower(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    getPowerClaimed(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    gttCoin(overrides?: CallOverrides): Promise<PopulatedTransaction>

    initialize(
      earnNFTAddress_: string,
      gttAddress_: string,
      carTokenPrice_: BigNumberish,
      bicycleTokenPrice_: BigNumberish,
      scooterTokenPrice_: BigNumberish,
      dailyPowerCap_: BigNumberish,
      dailyTokenCap_: BigNumberish,
      dailyClaimLimit_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    isAllowed(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>

    lastClaimTimestamp(overrides?: CallOverrides): Promise<PopulatedTransaction>

    maxBicycleSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>

    maxCarSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>

    maxScooterSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>

    merge(
      tokenIds: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    messageSigner(overrides?: CallOverrides): Promise<PopulatedTransaction>

    mint(
      eType: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    nftInfo(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    scooterCounter(overrides?: CallOverrides): Promise<PopulatedTransaction>

    scooterTokenPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>

    setAllowed(
      _address: string,
      _allowed: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    setBicycleTokenPrice(
      price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    setCarTokenPrice(
      price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    setMaxBicycleSupply(
      maxBicycleSupply_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    setMaxCarSupply(
      maxCarSupply_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    setMaxScooterSupply(
      maxScooterSupply_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    setMessageSigner(
      messageSigner_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    setScooterTokenPrice(
      price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    withdraw(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>
  }
}