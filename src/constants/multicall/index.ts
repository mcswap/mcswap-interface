import { ChainId } from '@mcswap/swap-sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  // TODO: TRON: mainnet multicall contract address
  [ChainId.MAINNET]: '0xD3573a8728A49512A1485D63180Ed5b095e11D5C',
  [ChainId.NILE]: '0x04A6730FC23a5f2C3d94F7C7aCb4F92Eab8282c2',
  [ChainId.SHASTA]: '0x6AF98D1B75DC6B771CF7959F233C34C38048BEF5'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
