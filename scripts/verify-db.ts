
import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

async function main() {
    console.log('--- Starting DB Verification ---');

    const connectionString = process.env.DATABASE_URL;
    if (!connectionString) {
        console.error('❌ DATABASE_URL is missing');
        process.exit(1);
    }

    const getInnerUrl = (url: string) => {
        try {
            const urlObj = new URL(url);
            const apiKey = urlObj.searchParams.get('api_key');
            if (apiKey) {
                const decoded = Buffer.from(apiKey, 'base64').toString();
                const json = JSON.parse(decoded);
                if (json.databaseUrl) return json.databaseUrl;
            }
        } catch (e) { console.error('Failed to parse inner URL', e); }
        return url;
    };

    const effectiveUrl = (connectionString.startsWith('prisma+'))
        ? getInnerUrl(connectionString)
        : connectionString;

    console.log(`Using effective URL: ${effectiveUrl.replace(/:([^:@]+)@/, ':****@')}`);

    try {
        console.log('1. Testing Connection Pool...');
        // Match server.ts config
        const isLocal = effectiveUrl.includes('localhost') || effectiveUrl.includes('127.0.0.1');
        const pool = new Pool({
            connectionString: effectiveUrl,
            ssl: isLocal ? false : { rejectUnauthorized: false },
            connectionTimeoutMillis: 5000,
            idleTimeoutMillis: 1000,
            max: 1
        });

        const client = await pool.connect();
        const res = await client.query('SELECT NOW()');
        console.log('✅ Pool Connected! DB Time:', res.rows[0].now);
        client.release();

        console.log('2. Testing Prisma Client...');
        const adapter = new PrismaPg(pool);
        const prisma = new PrismaClient({ adapter });

        const providerCount = await prisma.provider.count();
        console.log(`✅ Prisma Connected! Found ${providerCount} providers.`);

        const apiCount = await prisma.api.count();
        console.log(`✅ Found ${apiCount} APIs.`);

        await prisma.$disconnect();
        await pool.end();
        console.log('--- Verification Complete: SUCCESS ---');

    } catch (e: any) {
        console.error('❌ Verification FAILED:', e);
        process.exit(1);
    }
}

main();
