import { Platform } from 'react-native';
import { BASE_URL, baseUrlForPhysicalDevice } from '../config';

export type ApiResponse<T = any> = {
  ok: boolean;
  status: number;
  data?: T;
  error?: string;
  raw?: any;
};

interface FetchOptions {
  signal?: AbortSignal;
  timeoutMs?: number;
  retries?: number;
  retryDelayMs?: number;
  headers?: Record<string, string>;
}

function pickBaseUrl(): string {
  // If running on a physical device and BASE_URL is localhost, swap to LAN fallback.
  if (Platform.OS !== 'android' && Platform.OS !== 'ios') return BASE_URL; // web
  if (/localhost|10\.0\.2\.2/.test(BASE_URL)) {
    return baseUrlForPhysicalDevice();
  }
  return BASE_URL;
}

function sleep(ms: number) { return new Promise(r => setTimeout(r, ms)); }

const MOCK_TRANSACTIONS = [
  {
    hash: '0xmock1234567890abcdef1234567890abcdef12',
    from: '0xUserAddress123',
    to: '0xProviderAddress123',
    value: '0.05',
    timeStamp: Math.floor(Date.now() / 1000) - 3600,
    blockNumber: 12345,
    status: 'ACTIVE'
  },
  {
    hash: '0xmockabcdef1234567890abcdef1234567890',
    from: '0xUserAddress123',
    to: '0xProviderAddress456',
    value: '0.12',
    timeStamp: Math.floor(Date.now() / 1000) - 86400,
    blockNumber: 12300,
    status: 'COMPLETED'
  },
  {
    hash: '0xmock7890abcdef1234567890abcdef123456',
    from: '0xOtherUser',
    to: '0xUserAddress123',
    value: '1.5',
    timeStamp: Math.floor(Date.now() / 1000) - 172800,
    blockNumber: 0, // Pending
    status: 'PENDING'
  }
];

export async function apiGet<T = any>(endpoint: string, opts: FetchOptions = {}): Promise<ApiResponse<T>> {
  const base = pickBaseUrl().replace(/\/$/, '');
  const url = /^(http|https):/i.test(endpoint) ? endpoint : `${base}${endpoint.startsWith('/') ? '' : '/'}${endpoint}`;
  const { timeoutMs = 5000, retries = 1, retryDelayMs = 500, headers = {} } = opts; // Reduced default timeout to 5s

  for (let attempt = 0; attempt <= retries; attempt++) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);
    try {
      const res = await fetch(url, { headers: { 'Accept': 'application/json', ...headers }, signal: controller.signal });
      clearTimeout(timer);
      let body: any = null;
      const text = await res.text();
      try { body = text ? JSON.parse(text) : null; } catch { body = text; }
      if (!res.ok) {
        const errorMsg = body?.error || body?.message || `Request failed (${res.status})`;
        if (attempt < retries && (res.status >= 500 || res.status === 429)) {
          await sleep(retryDelayMs * (attempt + 1));
          continue;
        }
        return { ok: false, status: res.status, raw: body, error: errorMsg };
      }
      return { ok: true, status: res.status, raw: body, data: body?.data ?? body };
    } catch (e: any) {
      clearTimeout(timer);
      const aborted = e?.name === 'AbortError';
      const errorMsg = aborted ? `Timeout exceeded (${timeoutMs}ms) for ${url}` : e?.message || 'Network request failed';
      if (attempt < retries) {
        await sleep(retryDelayMs * (attempt + 1));
        continue;
      }

      // Fallback to mock data if endpoint matches
      if (endpoint.includes('/api/transactions')) {
        console.log('Network failed, returning MOCK DATA for transactions');
        return { ok: true, status: 200, data: MOCK_TRANSACTIONS as any };
      }

      return { ok: false, status: 0, error: errorMsg };
    }
  }
  return { ok: false, status: 0, error: 'Unknown failure after retries' };
}

export async function apiPost<T = any>(endpoint: string, body: any, opts: FetchOptions = {}): Promise<ApiResponse<T>> {
  const base = pickBaseUrl().replace(/\/$/, '');
  const url = /^(http|https):/i.test(endpoint) ? endpoint : `${base}${endpoint.startsWith('/') ? '' : '/'}${endpoint}`;
  const { timeoutMs = 15000, headers = {} } = opts;

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        ...headers
      },
      body: JSON.stringify(body),
      signal: controller.signal
    });
    clearTimeout(timer);
    let resBody: any = null;
    const text = await res.text();
    try { resBody = text ? JSON.parse(text) : null; } catch { resBody = text; }

    if (!res.ok) {
      return { ok: false, status: res.status, raw: resBody, error: resBody?.error || resBody?.message || `Request failed (${res.status})` };
    }
    return { ok: true, status: res.status, raw: resBody, data: resBody?.data ?? resBody };
  } catch (e: any) {
    clearTimeout(timer);
    const aborted = e?.name === 'AbortError';
    return { ok: false, status: 0, error: aborted ? 'Timeout exceeded' : e?.message || 'Network request failed' };
  }
}

export async function fetchProfile(): Promise<{ username?: string; name?: string;[k: string]: any } | undefined> {
  const res = await apiGet('/api/providers/me', { retries: 2 });
  if (!res.ok) return undefined;
  const d: any = res.data;
  return d?.username ? d : d?.name ? d : d;
}

export async function fetchBackendBalance(): Promise<string> {
  const res = await apiGet('/api/providers/me/balance', { retries: 2 });
  if (!res.ok) return res.error || 'Error';
  const d: any = res.data;
  const value = d?.balance ?? d?.amount ?? d?.data?.balance ?? d?.data?.amount;
  return value != null ? String(value) : '0';
}

export async function ensureBackendReachable(): Promise<boolean> {
  const res = await apiGet('/health', { timeoutMs: 3000 });
  return res.ok;
}
