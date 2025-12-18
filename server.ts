import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import * as fs from 'fs';
import * as path from 'path';
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
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

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

// Helper functions for mock database
const MOCK_DB_PATH = path.join(__dirname, 'mock-db.json');

interface MockDb {
    providers: any[];
    apis: any[];
}

function readMockDb(): MockDb {
    try {
        const data = fs.readFileSync(MOCK_DB_PATH, 'utf-8');
        return JSON.parse(data);
    } catch {
        return { providers: [], apis: [] };
    }
}

function writeMockDb(db: MockDb): void {
    fs.writeFileSync(MOCK_DB_PATH, JSON.stringify(db, null, 2), 'utf-8');
}

app.post('/api/providers/me/apis', async (req: express.Request, res: express.Response) => {
    // Using mock JSON file instead of Prisma for local development
    try {
        const db = readMockDb();

        // Get or create default provider
        let provider = db.providers[0];
        if (!provider) {
            provider = {
                id: `provider_${Date.now()}`,
                walletAddress: '0xDefaultProvider',
                name: 'Default Provider',
                email: 'provider@furo.com',
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            };
            db.providers.push(provider);
        }

        const { name, description, category, endpoint, price, currency } = req.body;

        if (!name || !endpoint || !price) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        // Generate a simple public path
        const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        const publicPath = `/api/${provider.id.split('_')[1] || 'default'}/${slug}-${Date.now()}`;

        const newApi = {
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
            totalCalls: 0,
            averageResponseTime: 0,
            uptime: 100,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };

        db.apis.push(newApi);
        writeMockDb(db);

        console.log(`✅ API saved to mock-db.json: ${name}`);
        res.json({ data: newApi });
    } catch (error: any) {
        console.error('Error creating API:', error);
        res.status(500).json({ error: error.message || 'Internal server error' });
    }
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
    console.log(`📱 Mobile device access: http://192.168.0.101:${PORT}`);
});
