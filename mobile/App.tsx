import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView, Text, Button, View, ActivityIndicator, FlatList } from 'react-native';

import HomeScreen from './src/screens/HomeScreen';
import BalanceScreen from './src/screens/BalanceScreen';
import TransactionsScreen from './src/screens/TransactionsScreen';
import ReportScreen from './src/screens/ReportScreen';
import UploadApiScreen from './src/screens/UploadApiScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Balance" component={BalanceScreen} />
        <Stack.Screen name="Transactions" component={TransactionsScreen} />
        <Stack.Screen name="Report" component={ReportScreen} />
        <Stack.Screen name="Upload" component={UploadApiScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
