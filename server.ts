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
