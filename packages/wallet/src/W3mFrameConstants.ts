/* eslint-disable @typescript-eslint/prefer-optional-chain */
const DEFAULT_SDK_URL = 'https://secure.walletconnect.org/sdk'

export const SECURE_SITE_SDK =
  (typeof process !== 'undefined' && typeof process.env !== 'undefined'
    ? process.env['NEXT_PUBLIC_SECURE_SITE_SDK_URL']
    : undefined) || DEFAULT_SDK_URL

export const DEFAULT_LOG_LEVEL =
  (typeof process !== 'undefined' && typeof process.env !== 'undefined'
    ? process.env['NEXT_PUBLIC_DEFAULT_LOG_LEVEL']
    : undefined) || 'error'

export const SECURE_SITE_SDK_VERSION =
  (typeof process !== 'undefined' && typeof process.env !== 'undefined'
    ? process.env['NEXT_PUBLIC_SECURE_SITE_SDK_VERSION']
    : undefined) || '4'

export const W3mFrameConstants = {
  APP_EVENT_KEY: '@w3m-app/',
  FRAME_EVENT_KEY: '@w3m-frame/',
  RPC_METHOD_KEY: 'RPC_',
  STORAGE_KEY: '@appkit-wallet/',

  SESSION_TOKEN_KEY: 'SESSION_TOKEN_KEY',
  EMAIL_LOGIN_USED_KEY: 'EMAIL_LOGIN_USED_KEY',
  LAST_USED_CHAIN_KEY: 'LAST_USED_CHAIN_KEY',
  LAST_EMAIL_LOGIN_TIME: 'LAST_EMAIL_LOGIN_TIME',
  EMAIL: 'EMAIL',
  PREFERRED_ACCOUNT_TYPE: 'PREFERRED_ACCOUNT_TYPE',
  SMART_ACCOUNT_ENABLED: 'SMART_ACCOUNT_ENABLED',
  SMART_ACCOUNT_ENABLED_NETWORKS: 'SMART_ACCOUNT_ENABLED_NETWORKS',
  SOCIAL_USERNAME: 'SOCIAL_USERNAME',

  APP_SWITCH_NETWORK: '@w3m-app/SWITCH_NETWORK',
  APP_CONNECT_EMAIL: '@w3m-app/CONNECT_EMAIL',
  APP_CONNECT_DEVICE: '@w3m-app/CONNECT_DEVICE',
  APP_CONNECT_OTP: '@w3m-app/CONNECT_OTP',
  APP_CONNECT_SOCIAL: '@w3m-app/CONNECT_SOCIAL',
  APP_GET_SOCIAL_REDIRECT_URI: '@w3m-app/GET_SOCIAL_REDIRECT_URI',
  APP_GET_USER: '@w3m-app/GET_USER',
  APP_SIGN_OUT: '@w3m-app/SIGN_OUT',
  APP_IS_CONNECTED: '@w3m-app/IS_CONNECTED',
  APP_GET_CHAIN_ID: '@w3m-app/GET_CHAIN_ID',
  APP_RPC_REQUEST: '@w3m-app/RPC_REQUEST',
  APP_UPDATE_EMAIL: '@w3m-app/UPDATE_EMAIL',
  APP_UPDATE_EMAIL_PRIMARY_OTP: '@w3m-app/UPDATE_EMAIL_PRIMARY_OTP',
  APP_UPDATE_EMAIL_SECONDARY_OTP: '@w3m-app/UPDATE_EMAIL_SECONDARY_OTP',
  APP_AWAIT_UPDATE_EMAIL: '@w3m-app/AWAIT_UPDATE_EMAIL',
  APP_SYNC_THEME: '@w3m-app/SYNC_THEME',
  APP_SYNC_DAPP_DATA: '@w3m-app/SYNC_DAPP_DATA',
  APP_GET_SMART_ACCOUNT_ENABLED_NETWORKS: '@w3m-app/GET_SMART_ACCOUNT_ENABLED_NETWORKS',
  APP_INIT_SMART_ACCOUNT: '@w3m-app/INIT_SMART_ACCOUNT',
  APP_SET_PREFERRED_ACCOUNT: '@w3m-app/SET_PREFERRED_ACCOUNT',
  APP_CONNECT_FARCASTER: '@w3m-app/CONNECT_FARCASTER',
  APP_GET_FARCASTER_URI: '@w3m-app/GET_FARCASTER_URI',
  APP_RELOAD: '@w3m-app/RELOAD',
  APP_RPC_ABORT: '@w3m-app/RPC_ABORT',

  FRAME_SWITCH_NETWORK_ERROR: '@w3m-frame/SWITCH_NETWORK_ERROR',
  FRAME_SWITCH_NETWORK_SUCCESS: '@w3m-frame/SWITCH_NETWORK_SUCCESS',
  FRAME_CONNECT_EMAIL_ERROR: '@w3m-frame/CONNECT_EMAIL_ERROR',
  FRAME_CONNECT_EMAIL_SUCCESS: '@w3m-frame/CONNECT_EMAIL_SUCCESS',
  FRAME_CONNECT_DEVICE_ERROR: '@w3m-frame/CONNECT_DEVICE_ERROR',
  FRAME_CONNECT_DEVICE_SUCCESS: '@w3m-frame/CONNECT_DEVICE_SUCCESS',
  FRAME_CONNECT_OTP_SUCCESS: '@w3m-frame/CONNECT_OTP_SUCCESS',
  FRAME_CONNECT_OTP_ERROR: '@w3m-frame/CONNECT_OTP_ERROR',
  FRAME_CONNECT_SOCIAL_SUCCESS: '@w3m-frame/CONNECT_SOCIAL_SUCCESS',
  FRAME_CONNECT_SOCIAL_ERROR: '@w3m-frame/CONNECT_SOCIAL_ERROR',
  FRAME_CONNECT_FARCASTER_SUCCESS: '@w3m-frame/CONNECT_FARCASTER_SUCCESS',
  FRAME_CONNECT_FARCASTER_ERROR: '@w3m-frame/CONNECT_FARCASTER_ERROR',
  FRAME_GET_FARCASTER_URI_SUCCESS: '@w3m-frame/GET_FARCASTER_URI_SUCCESS',
  FRAME_GET_FARCASTER_URI_ERROR: '@w3m-frame/GET_FARCASTER_URI_ERROR',

  FRAME_GET_SOCIAL_REDIRECT_URI_SUCCESS: '@w3m-frame/GET_SOCIAL_REDIRECT_URI_SUCCESS',
  FRAME_GET_SOCIAL_REDIRECT_URI_ERROR: '@w3m-frame/GET_SOCIAL_REDIRECT_URI_ERROR',
  FRAME_GET_USER_SUCCESS: '@w3m-frame/GET_USER_SUCCESS',
  FRAME_GET_USER_ERROR: '@w3m-frame/GET_USER_ERROR',
  FRAME_SIGN_OUT_SUCCESS: '@w3m-frame/SIGN_OUT_SUCCESS',
  FRAME_SIGN_OUT_ERROR: '@w3m-frame/SIGN_OUT_ERROR',
  FRAME_IS_CONNECTED_SUCCESS: '@w3m-frame/IS_CONNECTED_SUCCESS',
  FRAME_IS_CONNECTED_ERROR: '@w3m-frame/IS_CONNECTED_ERROR',
  FRAME_GET_CHAIN_ID_SUCCESS: '@w3m-frame/GET_CHAIN_ID_SUCCESS',
  FRAME_GET_CHAIN_ID_ERROR: '@w3m-frame/GET_CHAIN_ID_ERROR',
  FRAME_RPC_REQUEST_SUCCESS: '@w3m-frame/RPC_REQUEST_SUCCESS',
  FRAME_RPC_REQUEST_ERROR: '@w3m-frame/RPC_REQUEST_ERROR',
  FRAME_SESSION_UPDATE: '@w3m-frame/SESSION_UPDATE',
  FRAME_UPDATE_EMAIL_SUCCESS: '@w3m-frame/UPDATE_EMAIL_SUCCESS',
  FRAME_UPDATE_EMAIL_ERROR: '@w3m-frame/UPDATE_EMAIL_ERROR',
  FRAME_UPDATE_EMAIL_PRIMARY_OTP_SUCCESS: '@w3m-frame/UPDATE_EMAIL_PRIMARY_OTP_SUCCESS',
  FRAME_UPDATE_EMAIL_PRIMARY_OTP_ERROR: '@w3m-frame/UPDATE_EMAIL_PRIMARY_OTP_ERROR',
  FRAME_UPDATE_EMAIL_SECONDARY_OTP_SUCCESS: '@w3m-frame/UPDATE_EMAIL_SECONDARY_OTP_SUCCESS',
  FRAME_UPDATE_EMAIL_SECONDARY_OTP_ERROR: '@w3m-frame/UPDATE_EMAIL_SECONDARY_OTP_ERROR',
  FRAME_SYNC_THEME_SUCCESS: '@w3m-frame/SYNC_THEME_SUCCESS',
  FRAME_SYNC_THEME_ERROR: '@w3m-frame/SYNC_THEME_ERROR',
  FRAME_SYNC_DAPP_DATA_SUCCESS: '@w3m-frame/SYNC_DAPP_DATA_SUCCESS',
  FRAME_SYNC_DAPP_DATA_ERROR: '@w3m-frame/SYNC_DAPP_DATA_ERROR',
  FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS:
    '@w3m-frame/GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS',
  FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR:
    '@w3m-frame/GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR',
  FRAME_INIT_SMART_ACCOUNT_SUCCESS: '@w3m-frame/INIT_SMART_ACCOUNT_SUCCESS',
  FRAME_INIT_SMART_ACCOUNT_ERROR: '@w3m-frame/INIT_SMART_ACCOUNT_ERROR',
  FRAME_SET_PREFERRED_ACCOUNT_SUCCESS: '@w3m-frame/SET_PREFERRED_ACCOUNT_SUCCESS',
  FRAME_SET_PREFERRED_ACCOUNT_ERROR: '@w3m-frame/SET_PREFERRED_ACCOUNT_ERROR',
  FRAME_READY: '@w3m-frame/READY',
  FRAME_RELOAD_SUCCESS: '@w3m-frame/RELOAD_SUCCESS',
  FRAME_RELOAD_ERROR: '@w3m-frame/RELOAD_ERROR',
  FRAME_RPC_ABORT_SUCCESS: '@w3m-frame/RPC_ABORT_SUCCESS',
  FRAME_RPC_ABORT_ERROR: '@w3m-frame/RPC_ABORT_ERROR',

  RPC_RESPONSE_TYPE_ERROR: 'RPC_RESPONSE_ERROR',
  RPC_RESPONSE_TYPE_TX: 'RPC_RESPONSE_TRANSACTION_HASH',
  RPC_RESPONSE_TYPE_OBJECT: 'RPC_RESPONSE_OBJECT'
} as const

export type W3mFrameConstantValue = (typeof W3mFrameConstants)[keyof typeof W3mFrameConstants]

export const W3mFrameRpcConstants = {
  SAFE_RPC_METHODS: [
    'eth_accounts',
    'eth_blockNumber',
    'eth_call',
    'eth_chainId',
    'eth_estimateGas',
    'eth_feeHistory',
    'eth_gasPrice',
    'eth_getAccount',
    'eth_getBalance',
    'eth_getBlockByHash',
    'eth_getBlockByNumber',
    'eth_getBlockReceipts',
    'eth_getBlockTransactionCountByHash',
    'eth_getBlockTransactionCountByNumber',
    'eth_getCode',
    'eth_getFilterChanges',
    'eth_getFilterLogs',
    'eth_getLogs',
    'eth_getProof',
    'eth_getStorageAt',
    'eth_getTransactionByBlockHashAndIndex',
    'eth_getTransactionByBlockNumberAndIndex',
    'eth_getTransactionByHash',
    'eth_getTransactionCount',
    'eth_getTransactionReceipt',
    'eth_getUncleCountByBlockHash',
    'eth_getUncleCountByBlockNumber',
    'eth_maxPriorityFeePerGas',
    'eth_newBlockFilter',
    'eth_newFilter',
    'eth_newPendingTransactionFilter',
    'eth_sendRawTransaction',
    'eth_syncing',
    'eth_uninstallFilter',
    'wallet_getCapabilities',
    'wallet_getCallsStatus',
    'eth_getUserOperationReceipt',
    'eth_estimateUserOperationGas',
    'eth_getUserOperationByHash',
    'eth_supportedEntryPoints',
    //EIP-7811
    'wallet_getAssets'
  ],
  NOT_SAFE_RPC_METHODS: [
    'personal_sign',
    'eth_signTypedData_v4',
    'eth_sendTransaction',
    'solana_signMessage',
    'solana_signTransaction',
    'solana_signAllTransactions',
    'solana_signAndSendTransaction',
    'wallet_sendCalls',
    'wallet_grantPermissions',
    'wallet_revokePermissions',
    'eth_sendUserOperation'
  ],
  GET_CHAIN_ID: 'eth_chainId',
  RPC_METHOD_NOT_ALLOWED_MESSAGE: 'Requested RPC call is not allowed',
  RPC_METHOD_NOT_ALLOWED_UI_MESSAGE: 'Action not allowed',
  ACCOUNT_TYPES: {
    EOA: 'eoa',
    SMART_ACCOUNT: 'smartAccount'
  } as const
}
