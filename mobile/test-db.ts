import { PrismaClient } from './lib/generated/prisma';
import { config } from 'dotenv';

config();

const prisma = new PrismaClient();

async function main() {
    try {
        console.log('Attempting to connect to database...');
        console.log('URL:', process.env.DATABASE_URL);
        await prisma.$connect();
        console.log('✅ Connection successful!');
        const count = await prisma.provider.count();
        console.log('Provider count:', count);
    } catch (e) {
        console.error('❌ Connection failed:', e);
    } finally {
        await prisma.$disconnect();
    }
}

main();
