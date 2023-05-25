/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers'
import type { FunctionFragment, Result, EventFragment } from '@ethersproject/abi'
import type { Listener, Provider } from '@ethersproject/providers'
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from './common'

export interface ExchangePoolInterface extends utils.Interface {
  functions: {
    'DEFAULT_ADMIN_ROLE()': FunctionFragment
    'DOMAIN_SEPARATOR()': FunctionFragment
    'LIQUIDITY_PROVIDER_ROLE()': FunctionFragment
    'MINIMUM_LIQUIDITY()': FunctionFragment
    'PERMIT_TYPEHASH()': FunctionFragment
    'addLiquidity(uint256,uint256,uint256,uint256,address,uint256)': FunctionFragment
    'allowance(address,address)': FunctionFragment
    'approve(address,uint256)': FunctionFragment
    'balanceOf(address)': FunctionFragment
    'decimals()': FunctionFragment
    'feeWallet()': FunctionFragment
    'getAmountIn(uint256,uint256,uint256)': FunctionFragment
    'getAmountOut(uint256,uint256,uint256)': FunctionFragment
    'getReserves()': FunctionFragment
    'grantRole(bytes32,address)': FunctionFragment
    'hasRole(bytes32,address)': FunctionFragment
    'initialize(address,address)': FunctionFragment
    'kLast()': FunctionFragment
    'name()': FunctionFragment
    'nonces(address)': FunctionFragment
    'price0CumulativeLast()': FunctionFragment
    'price1CumulativeLast()': FunctionFragment
    'removeLiquidity(uint256,uint256,uint256,address,uint256)': FunctionFragment
    'revokeRole(bytes32,address)': FunctionFragment
    'skim(address)': FunctionFragment
    'swapExactTokensForTokens(uint256,uint256,address[],address,uint256)': FunctionFragment
    'swapTokensForExactTokens(uint256,uint256,address[],address,uint256)': FunctionFragment
    'symbol()': FunctionFragment
    'sync()': FunctionFragment
    'token0()': FunctionFragment
    'token1()': FunctionFragment
    'totalSupply()': FunctionFragment
    'transfer(address,uint256)': FunctionFragment
    'transferFrom(address,address,uint256)': FunctionFragment
  }

  getFunction(
    nameOrSignatureOrTopic:
      | 'DEFAULT_ADMIN_ROLE'
      | 'DOMAIN_SEPARATOR'
      | 'LIQUIDITY_PROVIDER_ROLE'
      | 'MINIMUM_LIQUIDITY'
      | 'PERMIT_TYPEHASH'
      | 'addLiquidity'
      | 'allowance'
      | 'approve'
      | 'balanceOf'
      | 'decimals'
      | 'feeWallet'
      | 'getAmountIn'
      | 'getAmountOut'
      | 'getReserves'
      | 'grantRole'
      | 'hasRole'
      | 'initialize'
      | 'kLast'
      | 'name'
      | 'nonces'
      | 'price0CumulativeLast'
      | 'price1CumulativeLast'
      | 'removeLiquidity'
      | 'revokeRole'
      | 'skim'
      | 'swapExactTokensForTokens'
      | 'swapTokensForExactTokens'
      | 'symbol'
      | 'sync'
      | 'token0'
      | 'token1'
      | 'totalSupply'
      | 'transfer'
      | 'transferFrom'
  ): FunctionFragment

  encodeFunctionData(functionFragment: 'DEFAULT_ADMIN_ROLE', values?: undefined): string
  encodeFunctionData(functionFragment: 'DOMAIN_SEPARATOR', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'LIQUIDITY_PROVIDER_ROLE',
    values?: undefined
  ): string
  encodeFunctionData(functionFragment: 'MINIMUM_LIQUIDITY', values?: undefined): string
  encodeFunctionData(functionFragment: 'PERMIT_TYPEHASH', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'addLiquidity',
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string
  encodeFunctionData(
    functionFragment: 'allowance',
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string
  encodeFunctionData(
    functionFragment: 'approve',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string
  encodeFunctionData(
    functionFragment: 'balanceOf',
    values: [PromiseOrValue<string>]
  ): string
  encodeFunctionData(functionFragment: 'decimals', values?: undefined): string
  encodeFunctionData(functionFragment: 'feeWallet', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'getAmountIn',
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string
  encodeFunctionData(
    functionFragment: 'getAmountOut',
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string
  encodeFunctionData(functionFragment: 'getReserves', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'grantRole',
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]
  ): string
  encodeFunctionData(
    functionFragment: 'hasRole',
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]
  ): string
  encodeFunctionData(
    functionFragment: 'initialize',
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string
  encodeFunctionData(functionFragment: 'kLast', values?: undefined): string
  encodeFunctionData(functionFragment: 'name', values?: undefined): string
  encodeFunctionData(functionFragment: 'nonces', values: [PromiseOrValue<string>]): string
  encodeFunctionData(functionFragment: 'price0CumulativeLast', values?: undefined): string
  encodeFunctionData(functionFragment: 'price1CumulativeLast', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'removeLiquidity',
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string
  encodeFunctionData(
    functionFragment: 'revokeRole',
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]
  ): string
  encodeFunctionData(functionFragment: 'skim', values: [PromiseOrValue<string>]): string
  encodeFunctionData(
    functionFragment: 'swapExactTokensForTokens',
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>[],
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string
  encodeFunctionData(
    functionFragment: 'swapTokensForExactTokens',
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>[],
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string
  encodeFunctionData(functionFragment: 'symbol', values?: undefined): string
  encodeFunctionData(functionFragment: 'sync', values?: undefined): string
  encodeFunctionData(functionFragment: 'token0', values?: undefined): string
  encodeFunctionData(functionFragment: 'token1', values?: undefined): string
  encodeFunctionData(functionFragment: 'totalSupply', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'transfer',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string
  encodeFunctionData(
    functionFragment: 'transferFrom',
    values: [PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string

  decodeFunctionResult(functionFragment: 'DEFAULT_ADMIN_ROLE', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'DOMAIN_SEPARATOR', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'LIQUIDITY_PROVIDER_ROLE',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'MINIMUM_LIQUIDITY', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'PERMIT_TYPEHASH', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'addLiquidity', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'allowance', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'approve', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'balanceOf', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'decimals', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'feeWallet', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getAmountIn', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getAmountOut', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getReserves', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'grantRole', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'hasRole', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'initialize', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'kLast', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'name', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'nonces', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'price0CumulativeLast', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'price1CumulativeLast', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'removeLiquidity', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'revokeRole', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'skim', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'swapExactTokensForTokens',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'swapTokensForExactTokens',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'symbol', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'sync', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'token0', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'token1', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'totalSupply', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'transfer', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'transferFrom', data: BytesLike): Result

  events: {
    'Approval(address,address,uint256)': EventFragment
    'Burn(address,uint256,uint256,address)': EventFragment
    'Mint(address,uint256,uint256)': EventFragment
    'Swap(address,uint256,uint256,uint256,uint256,address)': EventFragment
    'Sync(uint112,uint112)': EventFragment
    'Transfer(address,address,uint256)': EventFragment
  }

  getEvent(nameOrSignatureOrTopic: 'Approval'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'Burn'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'Mint'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'Swap'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'Sync'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'Transfer'): EventFragment
}

export interface ApprovalEventObject {
  owner: string
  spender: string
  value: BigNumber
}
export type ApprovalEvent = TypedEvent<[string, string, BigNumber], ApprovalEventObject>

export type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>

export interface BurnEventObject {
  sender: string
  amount0: BigNumber
  amount1: BigNumber
  to: string
}
export type BurnEvent = TypedEvent<
  [string, BigNumber, BigNumber, string],
  BurnEventObject
>

export type BurnEventFilter = TypedEventFilter<BurnEvent>

export interface MintEventObject {
  sender: string
  amount0: BigNumber
  amount1: BigNumber
}
export type MintEvent = TypedEvent<[string, BigNumber, BigNumber], MintEventObject>

export type MintEventFilter = TypedEventFilter<MintEvent>

export interface SwapEventObject {
  sender: string
  amount0In: BigNumber
  amount1In: BigNumber
  amount0Out: BigNumber
  amount1Out: BigNumber
  to: string
}
export type SwapEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber, BigNumber, string],
  SwapEventObject
>

export type SwapEventFilter = TypedEventFilter<SwapEvent>

export interface SyncEventObject {
  reserve0: BigNumber
  reserve1: BigNumber
}
export type SyncEvent = TypedEvent<[BigNumber, BigNumber], SyncEventObject>

export type SyncEventFilter = TypedEventFilter<SyncEvent>

export interface TransferEventObject {
  from: string
  to: string
  value: BigNumber
}
export type TransferEvent = TypedEvent<[string, string, BigNumber], TransferEventObject>

export type TransferEventFilter = TypedEventFilter<TransferEvent>

export interface ExchangePool extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  interface: ExchangePoolInterface

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>
  listeners(eventName?: string): Array<Listener>
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this
  removeAllListeners(eventName?: string): this
  off: OnEvent<this>
  on: OnEvent<this>
  once: OnEvent<this>
  removeListener: OnEvent<this>

  functions: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>

    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<[string]>

    LIQUIDITY_PROVIDER_ROLE(overrides?: CallOverrides): Promise<[string]>

    MINIMUM_LIQUIDITY(overrides?: CallOverrides): Promise<[BigNumber]>

    PERMIT_TYPEHASH(overrides?: CallOverrides): Promise<[string]>

    addLiquidity(
      amountADesired: PromiseOrValue<BigNumberish>,
      amountBDesired: PromiseOrValue<BigNumberish>,
      amountAMin: PromiseOrValue<BigNumberish>,
      amountBMin: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      deadline: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    allowance(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>

    approve(
      spender: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    balanceOf(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>

    decimals(overrides?: CallOverrides): Promise<[number]>

    feeWallet(overrides?: CallOverrides): Promise<[string]>

    getAmountIn(
      amountOut: PromiseOrValue<BigNumberish>,
      reserveIn: PromiseOrValue<BigNumberish>,
      reserveOut: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>

    getAmountOut(
      amountIn: PromiseOrValue<BigNumberish>,
      reserveIn: PromiseOrValue<BigNumberish>,
      reserveOut: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>

    getReserves(overrides?: CallOverrides): Promise<
      [BigNumber, BigNumber, number] & {
        _reserve0: BigNumber
        _reserve1: BigNumber
        _blockTimestampLast: number
      }
    >

    grantRole(
      role_: PromiseOrValue<BytesLike>,
      to_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    hasRole(
      role_: PromiseOrValue<BytesLike>,
      who_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>

    initialize(
      _token0: PromiseOrValue<string>,
      _token1: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    kLast(overrides?: CallOverrides): Promise<[BigNumber]>

    name(overrides?: CallOverrides): Promise<[string]>

    nonces(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>

    price0CumulativeLast(overrides?: CallOverrides): Promise<[BigNumber]>

    price1CumulativeLast(overrides?: CallOverrides): Promise<[BigNumber]>

    removeLiquidity(
      liquidity: PromiseOrValue<BigNumberish>,
      amountAMin: PromiseOrValue<BigNumberish>,
      amountBMin: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      deadline: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    revokeRole(
      role_: PromiseOrValue<BytesLike>,
      from_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    skim(
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    swapExactTokensForTokens(
      amountIn: PromiseOrValue<BigNumberish>,
      amountOutMin: PromiseOrValue<BigNumberish>,
      path: PromiseOrValue<string>[],
      to: PromiseOrValue<string>,
      deadline: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    swapTokensForExactTokens(
      amountOut: PromiseOrValue<BigNumberish>,
      amountInMax: PromiseOrValue<BigNumberish>,
      path: PromiseOrValue<string>[],
      to: PromiseOrValue<string>,
      deadline: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    symbol(overrides?: CallOverrides): Promise<[string]>

    sync(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    token0(overrides?: CallOverrides): Promise<[string]>

    token1(overrides?: CallOverrides): Promise<[string]>

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>

    transfer(
      to: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    transferFrom(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>
  }

  DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>

  DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>

  LIQUIDITY_PROVIDER_ROLE(overrides?: CallOverrides): Promise<string>

  MINIMUM_LIQUIDITY(overrides?: CallOverrides): Promise<BigNumber>

  PERMIT_TYPEHASH(overrides?: CallOverrides): Promise<string>

  addLiquidity(
    amountADesired: PromiseOrValue<BigNumberish>,
    amountBDesired: PromiseOrValue<BigNumberish>,
    amountAMin: PromiseOrValue<BigNumberish>,
    amountBMin: PromiseOrValue<BigNumberish>,
    to: PromiseOrValue<string>,
    deadline: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  allowance(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>

  approve(
    spender: PromiseOrValue<string>,
    value: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  balanceOf(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>

  decimals(overrides?: CallOverrides): Promise<number>

  feeWallet(overrides?: CallOverrides): Promise<string>

  getAmountIn(
    amountOut: PromiseOrValue<BigNumberish>,
    reserveIn: PromiseOrValue<BigNumberish>,
    reserveOut: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>

  getAmountOut(
    amountIn: PromiseOrValue<BigNumberish>,
    reserveIn: PromiseOrValue<BigNumberish>,
    reserveOut: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>

  getReserves(overrides?: CallOverrides): Promise<
    [BigNumber, BigNumber, number] & {
      _reserve0: BigNumber
      _reserve1: BigNumber
      _blockTimestampLast: number
    }
  >

  grantRole(
    role_: PromiseOrValue<BytesLike>,
    to_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  hasRole(
    role_: PromiseOrValue<BytesLike>,
    who_: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>

  initialize(
    _token0: PromiseOrValue<string>,
    _token1: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  kLast(overrides?: CallOverrides): Promise<BigNumber>

  name(overrides?: CallOverrides): Promise<string>

  nonces(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>

  price0CumulativeLast(overrides?: CallOverrides): Promise<BigNumber>

  price1CumulativeLast(overrides?: CallOverrides): Promise<BigNumber>

  removeLiquidity(
    liquidity: PromiseOrValue<BigNumberish>,
    amountAMin: PromiseOrValue<BigNumberish>,
    amountBMin: PromiseOrValue<BigNumberish>,
    to: PromiseOrValue<string>,
    deadline: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  revokeRole(
    role_: PromiseOrValue<BytesLike>,
    from_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  skim(
    to: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  swapExactTokensForTokens(
    amountIn: PromiseOrValue<BigNumberish>,
    amountOutMin: PromiseOrValue<BigNumberish>,
    path: PromiseOrValue<string>[],
    to: PromiseOrValue<string>,
    deadline: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  swapTokensForExactTokens(
    amountOut: PromiseOrValue<BigNumberish>,
    amountInMax: PromiseOrValue<BigNumberish>,
    path: PromiseOrValue<string>[],
    to: PromiseOrValue<string>,
    deadline: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  symbol(overrides?: CallOverrides): Promise<string>

  sync(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  token0(overrides?: CallOverrides): Promise<string>

  token1(overrides?: CallOverrides): Promise<string>

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>

  transfer(
    to: PromiseOrValue<string>,
    value: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  transferFrom(
    from: PromiseOrValue<string>,
    to: PromiseOrValue<string>,
    value: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  callStatic: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>

    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>

    LIQUIDITY_PROVIDER_ROLE(overrides?: CallOverrides): Promise<string>

    MINIMUM_LIQUIDITY(overrides?: CallOverrides): Promise<BigNumber>

    PERMIT_TYPEHASH(overrides?: CallOverrides): Promise<string>

    addLiquidity(
      amountADesired: PromiseOrValue<BigNumberish>,
      amountBDesired: PromiseOrValue<BigNumberish>,
      amountAMin: PromiseOrValue<BigNumberish>,
      amountBMin: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      deadline: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        amountA: BigNumber
        amountB: BigNumber
        liquidity: BigNumber
      }
    >

    allowance(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    approve(
      spender: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>

    balanceOf(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>

    decimals(overrides?: CallOverrides): Promise<number>

    feeWallet(overrides?: CallOverrides): Promise<string>

    getAmountIn(
      amountOut: PromiseOrValue<BigNumberish>,
      reserveIn: PromiseOrValue<BigNumberish>,
      reserveOut: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    getAmountOut(
      amountIn: PromiseOrValue<BigNumberish>,
      reserveIn: PromiseOrValue<BigNumberish>,
      reserveOut: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    getReserves(overrides?: CallOverrides): Promise<
      [BigNumber, BigNumber, number] & {
        _reserve0: BigNumber
        _reserve1: BigNumber
        _blockTimestampLast: number
      }
    >

    grantRole(
      role_: PromiseOrValue<BytesLike>,
      to_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>

    hasRole(
      role_: PromiseOrValue<BytesLike>,
      who_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>

    initialize(
      _token0: PromiseOrValue<string>,
      _token1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>

    kLast(overrides?: CallOverrides): Promise<BigNumber>

    name(overrides?: CallOverrides): Promise<string>

    nonces(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>

    price0CumulativeLast(overrides?: CallOverrides): Promise<BigNumber>

    price1CumulativeLast(overrides?: CallOverrides): Promise<BigNumber>

    removeLiquidity(
      liquidity: PromiseOrValue<BigNumberish>,
      amountAMin: PromiseOrValue<BigNumberish>,
      amountBMin: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      deadline: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { amountA: BigNumber; amountB: BigNumber }>

    revokeRole(
      role_: PromiseOrValue<BytesLike>,
      from_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>

    skim(to: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>

    swapExactTokensForTokens(
      amountIn: PromiseOrValue<BigNumberish>,
      amountOutMin: PromiseOrValue<BigNumberish>,
      path: PromiseOrValue<string>[],
      to: PromiseOrValue<string>,
      deadline: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>

    swapTokensForExactTokens(
      amountOut: PromiseOrValue<BigNumberish>,
      amountInMax: PromiseOrValue<BigNumberish>,
      path: PromiseOrValue<string>[],
      to: PromiseOrValue<string>,
      deadline: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>

    symbol(overrides?: CallOverrides): Promise<string>

    sync(overrides?: CallOverrides): Promise<void>

    token0(overrides?: CallOverrides): Promise<string>

    token1(overrides?: CallOverrides): Promise<string>

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>

    transfer(
      to: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>

    transferFrom(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>
  }

  filters: {
    'Approval(address,address,uint256)'(
      owner?: PromiseOrValue<string> | null,
      spender?: PromiseOrValue<string> | null,
      value?: null
    ): ApprovalEventFilter
    Approval(
      owner?: PromiseOrValue<string> | null,
      spender?: PromiseOrValue<string> | null,
      value?: null
    ): ApprovalEventFilter

    'Burn(address,uint256,uint256,address)'(
      sender?: PromiseOrValue<string> | null,
      amount0?: null,
      amount1?: null,
      to?: PromiseOrValue<string> | null
    ): BurnEventFilter
    Burn(
      sender?: PromiseOrValue<string> | null,
      amount0?: null,
      amount1?: null,
      to?: PromiseOrValue<string> | null
    ): BurnEventFilter

    'Mint(address,uint256,uint256)'(
      sender?: PromiseOrValue<string> | null,
      amount0?: null,
      amount1?: null
    ): MintEventFilter
    Mint(
      sender?: PromiseOrValue<string> | null,
      amount0?: null,
      amount1?: null
    ): MintEventFilter

    'Swap(address,uint256,uint256,uint256,uint256,address)'(
      sender?: PromiseOrValue<string> | null,
      amount0In?: null,
      amount1In?: null,
      amount0Out?: null,
      amount1Out?: null,
      to?: PromiseOrValue<string> | null
    ): SwapEventFilter
    Swap(
      sender?: PromiseOrValue<string> | null,
      amount0In?: null,
      amount1In?: null,
      amount0Out?: null,
      amount1Out?: null,
      to?: PromiseOrValue<string> | null
    ): SwapEventFilter

    'Sync(uint112,uint112)'(reserve0?: null, reserve1?: null): SyncEventFilter
    Sync(reserve0?: null, reserve1?: null): SyncEventFilter

    'Transfer(address,address,uint256)'(
      from?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      value?: null
    ): TransferEventFilter
    Transfer(
      from?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      value?: null
    ): TransferEventFilter
  }

  estimateGas: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>

    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<BigNumber>

    LIQUIDITY_PROVIDER_ROLE(overrides?: CallOverrides): Promise<BigNumber>

    MINIMUM_LIQUIDITY(overrides?: CallOverrides): Promise<BigNumber>

    PERMIT_TYPEHASH(overrides?: CallOverrides): Promise<BigNumber>

    addLiquidity(
      amountADesired: PromiseOrValue<BigNumberish>,
      amountBDesired: PromiseOrValue<BigNumberish>,
      amountAMin: PromiseOrValue<BigNumberish>,
      amountBMin: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      deadline: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>

    allowance(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    approve(
      spender: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>

    balanceOf(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>

    decimals(overrides?: CallOverrides): Promise<BigNumber>

    feeWallet(overrides?: CallOverrides): Promise<BigNumber>

    getAmountIn(
      amountOut: PromiseOrValue<BigNumberish>,
      reserveIn: PromiseOrValue<BigNumberish>,
      reserveOut: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    getAmountOut(
      amountIn: PromiseOrValue<BigNumberish>,
      reserveIn: PromiseOrValue<BigNumberish>,
      reserveOut: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    getReserves(overrides?: CallOverrides): Promise<BigNumber>

    grantRole(
      role_: PromiseOrValue<BytesLike>,
      to_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>

    hasRole(
      role_: PromiseOrValue<BytesLike>,
      who_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    initialize(
      _token0: PromiseOrValue<string>,
      _token1: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>

    kLast(overrides?: CallOverrides): Promise<BigNumber>

    name(overrides?: CallOverrides): Promise<BigNumber>

    nonces(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>

    price0CumulativeLast(overrides?: CallOverrides): Promise<BigNumber>

    price1CumulativeLast(overrides?: CallOverrides): Promise<BigNumber>

    removeLiquidity(
      liquidity: PromiseOrValue<BigNumberish>,
      amountAMin: PromiseOrValue<BigNumberish>,
      amountBMin: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      deadline: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>

    revokeRole(
      role_: PromiseOrValue<BytesLike>,
      from_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>

    skim(
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>

    swapExactTokensForTokens(
      amountIn: PromiseOrValue<BigNumberish>,
      amountOutMin: PromiseOrValue<BigNumberish>,
      path: PromiseOrValue<string>[],
      to: PromiseOrValue<string>,
      deadline: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>

    swapTokensForExactTokens(
      amountOut: PromiseOrValue<BigNumberish>,
      amountInMax: PromiseOrValue<BigNumberish>,
      path: PromiseOrValue<string>[],
      to: PromiseOrValue<string>,
      deadline: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>

    symbol(overrides?: CallOverrides): Promise<BigNumber>

    sync(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>

    token0(overrides?: CallOverrides): Promise<BigNumber>

    token1(overrides?: CallOverrides): Promise<BigNumber>

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>

    transfer(
      to: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>

    transferFrom(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>
  }

  populateTransaction: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>

    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<PopulatedTransaction>

    LIQUIDITY_PROVIDER_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>

    MINIMUM_LIQUIDITY(overrides?: CallOverrides): Promise<PopulatedTransaction>

    PERMIT_TYPEHASH(overrides?: CallOverrides): Promise<PopulatedTransaction>

    addLiquidity(
      amountADesired: PromiseOrValue<BigNumberish>,
      amountBDesired: PromiseOrValue<BigNumberish>,
      amountAMin: PromiseOrValue<BigNumberish>,
      amountBMin: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      deadline: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    allowance(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    approve(
      spender: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    balanceOf(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>

    feeWallet(overrides?: CallOverrides): Promise<PopulatedTransaction>

    getAmountIn(
      amountOut: PromiseOrValue<BigNumberish>,
      reserveIn: PromiseOrValue<BigNumberish>,
      reserveOut: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    getAmountOut(
      amountIn: PromiseOrValue<BigNumberish>,
      reserveIn: PromiseOrValue<BigNumberish>,
      reserveOut: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    getReserves(overrides?: CallOverrides): Promise<PopulatedTransaction>

    grantRole(
      role_: PromiseOrValue<BytesLike>,
      to_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    hasRole(
      role_: PromiseOrValue<BytesLike>,
      who_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    initialize(
      _token0: PromiseOrValue<string>,
      _token1: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    kLast(overrides?: CallOverrides): Promise<PopulatedTransaction>

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>

    nonces(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    price0CumulativeLast(overrides?: CallOverrides): Promise<PopulatedTransaction>

    price1CumulativeLast(overrides?: CallOverrides): Promise<PopulatedTransaction>

    removeLiquidity(
      liquidity: PromiseOrValue<BigNumberish>,
      amountAMin: PromiseOrValue<BigNumberish>,
      amountBMin: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      deadline: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    revokeRole(
      role_: PromiseOrValue<BytesLike>,
      from_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    skim(
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    swapExactTokensForTokens(
      amountIn: PromiseOrValue<BigNumberish>,
      amountOutMin: PromiseOrValue<BigNumberish>,
      path: PromiseOrValue<string>[],
      to: PromiseOrValue<string>,
      deadline: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    swapTokensForExactTokens(
      amountOut: PromiseOrValue<BigNumberish>,
      amountInMax: PromiseOrValue<BigNumberish>,
      path: PromiseOrValue<string>[],
      to: PromiseOrValue<string>,
      deadline: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>

    sync(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    token0(overrides?: CallOverrides): Promise<PopulatedTransaction>

    token1(overrides?: CallOverrides): Promise<PopulatedTransaction>

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>

    transfer(
      to: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    transferFrom(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>
  }
}
