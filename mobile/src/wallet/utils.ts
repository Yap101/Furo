import { ethers } from 'ethers';

/**
 * Fetches transaction history for a given address from Etherscan.
 * Uses the default shared API key, which has rate limits.
 * 
 * @param address The wallet address to fetch history for.
 * @param chainId The chain ID (e.g., 11155111 for Sepolia).
 * @returns Array of TransactionResponse objects.
 */
export async function fetchTransactionHistory(address: string, chainId: number) {
    try {
        // Use Etherscan V2 API
        // Docs: https://docs.etherscan.io/v2-migration
        const baseUrl = 'https://api.etherscan.io/v2/api';
        const url = `${baseUrl}?chainid=${chainId}&module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=desc`;

        const response = await fetch(url);
        const data = await response.json();

        if (data.status === '1' && Array.isArray(data.result)) {
            return data.result.map((tx: any) => ({
                hash: tx.hash,
                from: tx.from,
                to: tx.to,
                value: tx.value,
                timeStamp: tx.timeStamp,
                blockNumber: tx.blockNumber,
                // Map other fields as needed to match what UI expects
            }));
        } else if (data.message === 'No transactions found') {
            return [];
        } else {
            throw new Error(data.result || 'Failed to fetch transactions');
        }
    } catch (error: any) {
        console.error("Failed to fetch transaction history:", error);
        throw error;
    }
}
