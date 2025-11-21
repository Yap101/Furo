import 'react-native-gesture-handler';
import 'react-native-get-random-values';
import 'react-native-url-polyfill/auto';
// Patch AsyncStorage before WalletConnect loads
import './src/wallet/asyncStoragePatch';
import '@walletconnect/react-native-compat';
import { registerRootComponent } from 'expo';
import App from './App';

registerRootComponent(App);
