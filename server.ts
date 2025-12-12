import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
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

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
