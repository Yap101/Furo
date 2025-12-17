# Furo Mobile Project Guide

## Getting Started

### Prerequisites
- Node.js (Latest LTS recommended)
- pnpm (Preferred package manager)
- PostgreSQL database

### Installation

1.  **Install dependencies:**
    ```bash
    pnpm install
    ```

2.  **Environment Setup:**
    - Create a `.env` file in the root directory.
    - Ensure `DATABASE_URL` and `DIRECT_DATABASE_URL` are set.

    Example `.env`:
    ```env
    DATABASE_URL="postgresql://user:password@localhost:5432/furo_db?schema=public"
    DIRECT_DATABASE_URL="postgresql://user:password@localhost:5432/furo_db?schema=public"
    ```

### Running the Project

You can run the backend and frontend separately or together.

#### Option 1: Run All (Recommended)
This runs both the backend server and the Expo frontend concurrently.
```bash
pnpm dev
```

#### Option 2: Run Separately

**1. Start the Backend Server:**
Runs the Express server on `http://localhost:3000`.
```bash
pnpm server
```

**2. Start the Mobile App (Expo):**
Runs the Expo development server.
```bash
pnpm start
```
*OR, from the root directory:*
```bash
pnpm -C mobile start
```

### Other Commands
- **Android:** `pnpm android` (or `pnpm -C mobile android`)
- **iOS:** `pnpm ios` (or `pnpm -C mobile ios`)
- **Web:** `pnpm web` (or `pnpm -C mobile web`)

## Project Structure

### Backend (`/server.ts`)
- **Entry Point:** `server.ts`
- **Framework:** Express.js
- **Database:** Prisma ORM with PostgreSQL

### Frontend (`/mobile`)
- **Entry Point:** `mobile/App.tsx`
- **Framework:** React Native with Expo
- **Navigation:** React Navigation

---

## Starting Code Snapshots

### Backend Entry (`server.ts`)

```typescript
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { PrismaClient } from './prisma/generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

if (!process.env.DIRECT_DATABASE_URL && !process.env.DATABASE_URL) {
    console.error('Error: DATABASE_URL or DIRECT_DATABASE_URL is missing in .env');
    process.exit(1);
}

// Use direct PostgreSQL connection for local development with prisma dev
const connectionString = process.env.DIRECT_DATABASE_URL || process.env.DATABASE_URL!;
const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get('/api/transactions', async (req: express.Request, res: express.Response) => {
    const { address } = req.query;

    if (!address || typeof address !== 'string') {
        return res.status(400).json({ error: 'Address is required' });
    }

    try {
        const history = await prisma.purchasedApi.findMany({
            where: {
                OR: [
                    { developerAddress: address },
                    { providerId: address },
                    { Provider: { walletAddress: address } }
                ]
            },
            include: {
                Provider: true,
                Api: true
            },
            orderBy: {
                createdAt: 'desc'
            }
        });

        const formattedHistory = history.map(tx => ({
            hash: tx.transactionHash,
            from: tx.developerAddress,
            to: tx.Provider?.walletAddress || 'Unknown',
            value: tx.paymentAmount,
            timeStamp: Math.floor(new Date(tx.createdAt).getTime() / 1000),
            blockNumber: 1,
            status: tx.status
        }));

        res.json({ data: formattedHistory });
    } catch (error) {
        console.error('Error fetching transactions:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/api/providers/me/report', async (req: express.Request, res: express.Response) => {
    const { address } = req.query;

    if (!address || typeof address !== 'string') {
        return res.status(400).json({ error: 'Address is required' });
    }

    try {
        // Find provider by wallet address
        const provider = await prisma.provider.findFirst({
            where: { walletAddress: address }
        });

        if (!provider) {
            // If provider not found, return empty report or create one?
            // For now, return zeros
            return res.json({
                data: {
                    revenue: { total: '0' },
                    performance: {
                        totalRequests: 0,
                        averageResponseTime: 0,
                        successRate: 100
                    },
                    purchasesByApi: []
                }
            });
        }

        // Get APIs owned by provider
        const apis = await prisma.api.findMany({
            where: { providerId: provider.id }
        });

        const totalCalls = apis.reduce((acc, api) => acc + api.totalCalls, 0);
        const avgResponseTime = apis.length > 0
            ? apis.reduce((acc, api) => acc + api.averageResponseTime, 0) / apis.length
            : 0;

        // Calculate revenue from PurchasedApi
        const purchases = await prisma.purchasedApi.findMany({
            where: { providerId: provider.id },
            include: { Api: true }
        });

        const totalRevenue = purchases.reduce((acc, p) => acc + parseFloat(p.paymentAmount || '0'), 0);

        // Group purchases by API
        const purchasesMap = new Map<string, { apiName: string, count: number }>();
        purchases.forEach(p => {
            const current = purchasesMap.get(p.apiId) || { apiName: p.Api.name, count: 0 };
            current.count++;
            purchasesMap.set(p.apiId, current);
        });

        const purchasesByApi = Array.from(purchasesMap.values());

        res.json({
            data: {
                revenue: { total: totalRevenue.toFixed(4) },
                performance: {
                    totalRequests: totalCalls,
                    averageResponseTime: Math.round(avgResponseTime),
                    successRate: 98 // Hardcoded for now as uptime is per API
                },
                purchasesByApi
            }
        });

    } catch (error) {
        console.error('Error fetching report:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.post('/api/providers/me/apis', async (req: express.Request, res: express.Response) => {
    // For now, we simulate "me" by taking providerId or walletAddress from body or assume a single user context if auth isn't fully set up.
    // Based on existing code conventions, it seems we might need to rely on a hardcoded provider or pass it in.
    // However, looking at the schema, Api requires providerId.
    // Let's check if we can get a default provider or if the client sends something identifying.
    // The previous client code didn't send auth headers.
    // We will assume a default provider exists or create one for "me" if missing, 
    // BUT strictly for this prototype, let's find the FIRST provider or create a seed one.

    try {
        let provider = await prisma.provider.findFirst();
        if (!provider) {
            provider = await prisma.provider.create({
                data: {
                    id: `provider_${Date.now()}`,
                    walletAddress: '0xDefaultProvider',
                    name: 'Default Provider',
                    email: 'provider@furo.com',
                    updatedAt: new Date()
                }
            });
        }

        const { name, description, category, endpoint, price, currency } = req.body;

        if (!name || !endpoint || !price) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        // Generate a simple public path
        const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        const publicPath = `/api/${provider.id.split('-')[0]}/${slug}-${Date.now()}`;

        const newApi = await prisma.api.create({
            data: {
                id: `api_${Date.now()}`,
                providerId: provider.id,
                name,
                description: description || '',
                category: category || 'Uncategorized',
                endpoint,
                publicPath,
                pricePerCall: price,
                currency: currency || 'ETH',
                isActive: true,
                updatedAt: new Date()
            }
        });

        res.json({ data: newApi });
    } catch (error: any) {
        console.error('Error creating API:', error);
        res.status(500).json({ error: error.message || 'Internal server error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
```

### Frontend Entry (`mobile/App.tsx`)

```tsx
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
```
