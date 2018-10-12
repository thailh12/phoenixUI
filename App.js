import './global';
import React from 'react';
import { root } from './Router';
import {
  StyleSheet,
  Platform,
  Dimensions,
  StatusBar,
  View
} from 'react-native';
const Router = root;
const {
  Wallet,
  CoinType,
  EthWallet,
  BchWallet,
  InfinitoApi,
  NeoWallet
} = require('node-infinito-wallet');
let apiConfig = {
  apiKey: '0dda8e7f-a7b3-445b-80a0-f5ca66339081',
  secret: 'B9JoneDZJdxdEWp2mVXq2qYC9ZWubEYRz6vloHEtUAp1gbyJiXdWvF8Z9bTaCTyo',
  baseUrl: 'https://staging-api-testnet.infinitowallet.io',
  logLevel: 'NONE'
};

///if you have privateKey then supply private key to create wallet or you can pass passphrase to create wallet
let walletConfig = {
  coinType: CoinType.ETH.symbol, //change for case LTC, DOGE, DASH
  isTestNet: false,
  privateKey:
    '0xfa002a9572da5e2fe400e9d57616213efa96720946d35d9c04ccff6bca43e3e4'
};

// Create wallet instanse.
// Note: need to set InfinitoApi
let api = new InfinitoApi(apiConfig);
let wallet = new Wallet(walletConfig);
wallet.setApi(api);
export default class App extends React.Component {
  componentWillMount() {
    console.log(wallet.getBalance);
  }
  render() {
    return <Router />;
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
  }
});
