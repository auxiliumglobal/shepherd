export enum DefaultNetworkIds {
  ETH = 'ETH',
  Ropsten = 'Ropsten',
  Kovan = 'Kovan',
  Rinkeby = 'Rinkeby',
  ETC = 'ETC',
  UBQ = 'UBQ',
  EXP = 'EXP',
}

export interface NetworkConfig {
  name: DefaultNetworkIds;
  chainId: number;
}
