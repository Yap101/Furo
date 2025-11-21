import AsyncStorage from '@react-native-async-storage/async-storage';

// Prefix all WalletConnect-related keys to avoid clashes and allow bulk purge.
const PREFIX = 'wc2:';
const isTargetKey = (k: string) => k.startsWith(PREFIX) || k.startsWith('walletconnect') || k.includes('wc@') || k.includes('wc_session');
const withPrefix = (k: string) => (k.startsWith(PREFIX) ? k : PREFIX + k);

async function safe<T>(op: () => Promise<T>, fallback: T): Promise<T> {
  try { return await op(); } catch (e: any) { console.warn('[WC Storage] error:', e?.message || e); return fallback; }
}

export const WalletStorage = {
  async getItem(key: string): Promise<string | null> {
    return safe(() => AsyncStorage.getItem(withPrefix(key)), null);
  },
  async setItem(key: string, value: string): Promise<void> {
    await safe(() => AsyncStorage.setItem(withPrefix(key), value), undefined);
  },
  async removeItem(key: string): Promise<void> {
    await safe(() => AsyncStorage.removeItem(withPrefix(key)), undefined);
  },
  async getKeys(): Promise<string[]> {
    const all = await safe(() => AsyncStorage.getAllKeys(), [] as string[]);
    return all.filter(isTargetKey).map(k => k.startsWith(PREFIX) ? k.slice(PREFIX.length) : k);
  },
  async clear(): Promise<void> {
    const all = await safe(() => AsyncStorage.getAllKeys(), [] as string[]);
    const targets = all.filter(isTargetKey);
    if (targets.length) await safe(() => AsyncStorage.multiRemove(targets), undefined);
  }
};

// Monkey-patch AsyncStorage methods used by @walletconnect/keyvaluestorage to be more fault tolerant.
// We do not override the export, but wrap commonly used functions to swallow errors and avoid unhandled rejections.
function patchAsyncStorage() {
  const originalGetItem = AsyncStorage.getItem.bind(AsyncStorage);
  AsyncStorage.getItem = (key: string) => safe(() => originalGetItem(key), null);

  const originalSetItem = AsyncStorage.setItem.bind(AsyncStorage);
  AsyncStorage.setItem = (key: string, value: string) => safe(() => originalSetItem(key, value), undefined);

  const originalRemoveItem = AsyncStorage.removeItem.bind(AsyncStorage);
  AsyncStorage.removeItem = (key: string) => safe(() => originalRemoveItem(key), undefined);

  const originalMultiGet = AsyncStorage.multiGet?.bind(AsyncStorage);
  if (originalMultiGet) {
    // @ts-ignore
    AsyncStorage.multiGet = (keys: string[]) => safe(() => originalMultiGet(keys), []);
  }
  const originalMultiRemove = AsyncStorage.multiRemove?.bind(AsyncStorage);
  if (originalMultiRemove) {
    // @ts-ignore
    AsyncStorage.multiRemove = (keys: string[]) => safe(() => originalMultiRemove(keys), undefined);
  }
  const originalMultiSet = AsyncStorage.multiSet?.bind(AsyncStorage);
  if (originalMultiSet) {
    // @ts-ignore
    AsyncStorage.multiSet = (pairs: [string, string][]) => safe(() => originalMultiSet(pairs), undefined);
  }
  console.log('[WC Storage] AsyncStorage patched for WalletConnect compatibility');
}

patchAsyncStorage();

// Optionally expose a global hook for debugging.
// @ts-ignore
global.__WALLET_STORAGE__ = WalletStorage;
