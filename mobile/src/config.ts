import { Platform } from 'react-native';

// Prefer runtime env: set EXPO_PUBLIC_BASE_URL in .env or your environment.
const ENV_URL = process.env.EXPO_PUBLIC_BASE_URL;
const ENV_RPC_URL = process.env.EXPO_PUBLIC_RPC_URL;

// Default base URLs - replace `LAN_IP` with your PC's LAN address when testing on a physical device.
const LOCALHOST = 'http://localhost:3000';
const ANDROID_EMULATOR = 'http://10.0.2.2:3000';
const LAN_IP = 'http://192.168.1.100:3000'; // <- replace with your machine IP for physical devices

// Resolution order:
// 1) EXPO_PUBLIC_BASE_URL if provided
// 2) iOS Simulator -> localhost
// 3) Android emulator -> 10.0.2.2
export const BASE_URL =
  ENV_URL && ENV_URL.trim().length > 0
    ? ENV_URL
    : Platform.OS === 'android'
      ? ANDROID_EMULATOR
      : LOCALHOST;

// Helper to override at runtime if necessary
export function baseUrlForPhysicalDevice(): string {
  return ENV_URL || LAN_IP;
}

// Basic RPC URL resolution. Prefer EXPO_PUBLIC_RPC_URL if provided.
// For mainnet (1) default to Cloudflare; extend mapping as needed.
export function rpcUrlForChain(chainId?: number): string {
  if (ENV_RPC_URL && ENV_RPC_URL.trim().length > 0) return ENV_RPC_URL;
  if (!chainId || chainId === 1) return 'https://cloudflare-eth.com';
  // Fallback to a public Ethereum gateway when chain is unknown
  return 'https://cloudflare-eth.com';
}
