import React from 'react';
import { NavigationContainer, LinkingOptions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView, Text, Button, View, ActivityIndicator, FlatList } from 'react-native';
import * as Linking from 'expo-linking';

import HomeScreen from './src/screens/HomeScreen';
import BalanceScreen from './src/screens/BalanceScreen';
import ReportScreen from './src/screens/ReportScreen';
import UploadApiScreen from './src/screens/UploadApiScreen';
import TransactionsScreen from './src/screens/TransactionsScreen';
import WalletScreen from './src/screens/WalletScreen';
import { WalletProvider, useWallet } from './src/wallet/WalletContext';

const Stack = createNativeStackNavigator();

function RootNavigator() {
  const { connected } = useWallet();

  return (
    <Stack.Navigator initialRouteName="Connect">
      {!connected ? (
        <Stack.Screen name="Connect" component={WalletScreen} options={{ title: 'Connect Wallet' }} />
      ) : (
        <>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Balance" component={BalanceScreen} />
          <Stack.Screen name="Transactions" component={TransactionsScreen} />
          <Stack.Screen name="Report" component={ReportScreen} />
          <Stack.Screen name="Upload" component={UploadApiScreen} />
          <Stack.Screen name="Wallet" component={WalletScreen} />
        </>
      )}
    </Stack.Navigator>
  );
}

export default function App() {
  const linking: LinkingOptions<any> = {
    prefixes: [Linking.createURL('/')],
    config: {
      screens: {
        Home: '',
        Balance: 'balance',
        Transactions: 'transactions',
        Report: 'report',
        Upload: 'upload'
      }
    }
  };
  return (
    <WalletProvider>
      <NavigationContainer linking={linking}>
        <RootNavigator />
      </NavigationContainer>
    </WalletProvider>
  );
}
