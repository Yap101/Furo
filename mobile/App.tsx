import React from 'react';
import { NavigationContainer, LinkingOptions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView, Text, Button, View, ActivityIndicator, FlatList } from 'react-native';
import * as Linking from 'expo-linking';

import HomeScreen from './src/screens/HomeScreen';
import BalanceScreen from './src/screens/BalanceScreen';
import TransactionsScreen from './src/screens/TransactionsScreen';
import ReportScreen from './src/screens/ReportScreen';
import UploadApiScreen from './src/screens/UploadApiScreen';
import { WalletProvider } from './src/wallet/WalletContext';

const Stack = createNativeStackNavigator();

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
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Balance" component={BalanceScreen} />
          <Stack.Screen name="Transactions" component={TransactionsScreen} />
          <Stack.Screen name="Report" component={ReportScreen} />
          <Stack.Screen name="Upload" component={UploadApiScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </WalletProvider>
  );
}
