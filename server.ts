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
        // Fetch data from Mock DB only as requested
        const db = readMockDb();
        const mockApis = db.apis;

        const totalApis = mockApis.length;
        const totalCalls = mockApis.reduce((acc: number, api: any) => acc + (api.totalCalls || 0), 0);
        const avgResponseTime = totalApis > 0
            ? mockApis.reduce((acc: number, api: any) => acc + (api.averageResponseTime || 0), 0) / totalApis
            : 0;

        // Simulate revenue based on calls
        const totalRevenue = totalCalls * 0.001;

        res.json({
            data: {
                summary: {
                    totalApis: totalApis,
                    totalCalls: totalCalls,
                    netEarning: (totalRevenue * 0.97).toFixed(4),
                    platformFee: (totalRevenue * 0.03).toFixed(4),
                    averageRating: 4.8
                },
                revenue: { total: totalRevenue.toFixed(4) },
                performance: {
                    totalRequests: totalCalls,
                    averageResponseTime: Math.round(avgResponseTime),
                    successRate: 98
                },
                purchasesByApi: mockApis.map((api: any) => ({
                    apiName: api.name,
                    count: api.totalCalls || 0
                }))
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
    console.log(`📱 Mobile device access: http://10.74.250.210:${PORT}`);
});
