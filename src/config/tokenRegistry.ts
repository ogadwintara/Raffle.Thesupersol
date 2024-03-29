export const wrappedSOL = 'So11111111111111111111111111111111111111112';

const tokenRegistry = {
  So11111111111111111111111111111111111111112: {
    chainId: 101,
    address: wrappedSOL,
    symbol: 'SOL',
    name: 'SOL',
    decimals: 9,
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png',
    tags: [],
    extensions: {
      website: 'https://solana.com/',
      serumV3Usdc: '9wFFyRfZBsuAha4YcuxcXLKwMxJR43S7fPfQLusDBzvT',
      serumV3Usdt: 'HWHvQhFmJB3NUcu1aihKmrKegfVxBEHzwVX6yZCKEsi1',
      coingeckoId: 'solana',
      imageURI: '/resources/solana-logo.gif',
    },
  },
  DUSTawucrTsGU8hcqRdHDCbuYhCPADMLM2VcCb8VnFnQ: {
    chainId: 101,
    address: 'DUSTawucrTsGU8hcqRdHDCbuYhCPADMLM2VcCb8VnFnQ',
    symbol: 'DUST',
    name: 'DUST Protocol',
    decimals: 9,
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/DUSTawucrTsGU8hcqRdHDCbuYhCPADMLM2VcCb8VnFnQ/logo.jpg',
    tags: [],
    extensions: {
      website: 'https://docs.dustprotocol.com/',
      twitter: 'https://twitter.com/degodsnft',
    },
  },
  '72UgZ7avdJZBbv3wR7hbWcFy6dyHHNAoJw7CimGA55Zh': {
    chainId: 101,
    address: '72UgZ7avdJZBbv3wR7hbWcFy6dyHHNAoJw7CimGA55Zh',
    symbol: 'PM1',
    name: 'USDT',
    decimals: 2,
    logoURI: `${process.env.REACT_APP_URL}/tether-usdt-logo.png`,
    tags: [],
    extensions: {
      website: 'https://sollama.finance',
      twitter: 'https://twitter.com/SollamaFinance',
    },
  },
  H32RbcbAoskfMVyPSTNQucEkYP2qvYLkmDg5ij4cPBhH: {
    chainId: 101,
    address: 'H32RbcbAoskfMVyPSTNQucEkYP2qvYLkmDg5ij4cPBhH',
    symbol: 'PM2',
    name: 'Prize Mint 2',
    decimals: 0,
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/9nusLQeFKiocswDt6NQsiErm1M43H2b8x6v5onhivqKv/logo.png',
    tags: [],
    extensions: {
      website: 'https://sollama.finance',
      twitter: 'https://twitter.com/SollamaFinance',
    },
  },
  DCTo8EdRrycGpjRDntmdAMoaHdq77mQwdEchtoXAtje3: {
    chainId: 101,
    address: 'DCTo8EdRrycGpjRDntmdAMoaHdq77mQwdEchtoXAtje3',
    symbol: 'DCT',
    name: 'dRaffle Community Token',
    decimals: 6,
    logoURI: '/dRaffle-logo.png',
    tags: []
  },
  '7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU': {
    chainId: 101,
    address: '7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU',
    symbol: 'SAMO',
    name: 'SAMO',
    decimals: 9,
    logoURI: '/resources/samo-logo.png',
    tags: []
  },
  TSSR5RTciNRE4n4nude8WFmd7FpibpeCvzgjzT3Ni7t: {
    chainId: 101,
    address: 'TSSR5RTciNRE4n4nude8WFmd7FpibpeCvzgjzT3Ni7t',
    symbol: 'TSOS',
    name: 'TheSuperSOL',
    decimals: 9,
    logoURI:
      'https://raw.githubusercontent.com/ogadwintara/SOSTOKEN/main/logotoken.png',
    tags: [],
  },
  GaegtumiRRyWzmjmU34okT8wJGSE5UkHCcCsseF2yxiz: {
    chainId: 101,
    address: 'GaegtumiRRyWzmjmU34okT8wJGSE5UkHCcCsseF2yxiz',
    symbol: 'BULG',
    name: 'Bulgae',
    decimals: 9,
    logoURI: 'https://raw.githubusercontent.com/dodechaedron/Labsbulg/main/bulgae.jpeg',
    tags: []
  },
};

export const tokenInfoMap = new Map(Object.entries(tokenRegistry));

export const UNKNOWN_TOKEN_INFO = {
  chainId: 101,
  symbol: '???',
  name: 'Unkown token',
  decimals: 0,
  logoURI:
    'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/9nusLQeFKiocswDt6NQsiErm1M43H2b8x6v5onhivqKv/logo.png',
  tags: [],
  extensions: {},
};
