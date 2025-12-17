// ===========================================================================
// POLYFILLS - Order is CRITICAL. Must be before any other imports.
// ===========================================================================

// 1. Crypto polyfill - MUST be first for ethers/walletconnect
import 'react-native-get-random-values';

// 2. Buffer polyfill
import { Buffer } from 'buffer';
global.Buffer = global.Buffer || Buffer;

// 3. Process polyfill
if (typeof global.process === 'undefined') {
    global.process = require('process');
}

// 4. TextEncoder/TextDecoder polyfill using fast-text-encoding
import 'fast-text-encoding';

// 5. URL polyfill
import 'react-native-url-polyfill/auto';

// 6. React Native Gesture Handler (must be early for navigation)
import 'react-native-gesture-handler';

// 7. WalletConnect React Native compatibility shim
import '@walletconnect/react-native-compat';

// ===========================================================================
// APP CODE
// ===========================================================================

// Patch AsyncStorage for WalletConnect
import './src/wallet/asyncStoragePatch';

import { registerRootComponent } from 'expo';
import App from './App';

registerRootComponent(App);
