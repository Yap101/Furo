import 'dotenv/config';
import { PrismaClient } from '@prisma/client';


let prisma: PrismaClient;

async function main() {
    prisma = new PrismaClient();
    console.log('Seeding database...');

    // Create a provider
    const provider = await prisma.provider.upsert({
        where: { walletAddress: '0xProviderAddress123' },
        update: {},
        create: {
            id: 'provider-1',
            walletAddress: '0xProviderAddress123',
            name: 'Test Provider',
            email: 'provider@test.com',
            updatedAt: new Date(),
        },
    });

    // Create an API
    const api = await prisma.api.upsert({
        where: { publicPath: '/api/test' },
        update: {},
        create: {
            id: 'api-1',
            providerId: provider.id,
            name: 'Test API',
            description: 'A test API',
            category: 'Test',
            endpoint: 'https://api.test.com',
            publicPath: '/api/test',
            pricePerCall: '0.001',
            updatedAt: new Date(),
        },
    });

    // Create fake transactions (PurchasedApi)
    const transactions = [
        {
            id: 'tx-1',
            apiId: api.id,
            developerAddress: '0xUserAddress123', // This should match the user's wallet address in the app for testing
            providerId: provider.id,
            transactionHash: '0xFakeHash1',
            paymentAmount: '0.01',
            status: 'ACTIVE',
            expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24), // 1 day from now
        },
        {
            id: 'tx-2',
            apiId: api.id,
            developerAddress: '0xUserAddress123',
            providerId: provider.id,
            transactionHash: '0xFakeHash2',
            paymentAmount: '0.05',
            status: 'EXPIRED',
            expiresAt: new Date(Date.now() - 1000 * 60 * 60), // 1 hour ago
        },
        {
            id: 'tx-3',
            apiId: api.id,
            developerAddress: '0xUserAddress123',
            providerId: provider.id,
            transactionHash: '0xFakeHash3',
            paymentAmount: '0.02',
            status: 'ACTIVE',
            expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 48), // 2 days from now
        },
        {
            id: 'tx-4',
            apiId: api.id,
            developerAddress: '0xUserAddress123',
            providerId: provider.id,
            transactionHash: '0xFakeHash4',
            paymentAmount: '0.15',
            status: 'COMPLETED',
            expiresAt: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
        },
        {
            id: 'tx-5',
            apiId: api.id,
            developerAddress: '0xUserAddress123',
            providerId: provider.id,
            transactionHash: '0xFakeHash5',
            paymentAmount: '0.005',
            status: 'FAILED',
            expiresAt: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
        },
        {
            id: 'tx-6',
            apiId: api.id,
            developerAddress: '0xUserAddress123',
            providerId: provider.id,
            transactionHash: '0xFakeHash6',
            paymentAmount: '1.2',
            status: 'PENDING',
            expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 1), // 1 hour from now
        }
    ];

    for (const tx of transactions) {
        await prisma.purchasedApi.upsert({
            where: { id: tx.id },
            update: {},
            create: tx,
        });
    }

    console.log('Seeding completed.');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        if (prisma) await prisma.$disconnect();
    });
