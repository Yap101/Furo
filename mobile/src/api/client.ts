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

export async function apiGet<T = any>(endpoint: string, opts: FetchOptions = {}): Promise<ApiResponse<T>> {
  const base = pickBaseUrl().replace(/\/$/, '');
  const url = /^(http|https):/i.test(endpoint) ? endpoint : `${base}${endpoint.startsWith('/') ? '' : '/'}${endpoint}`;
  const { timeoutMs = 8000, retries = 1, retryDelayMs = 500, headers = {} } = opts;

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
      const errorMsg = aborted ? 'Timeout exceeded' : e?.message || 'Network request failed';
      if (attempt < retries) {
        await sleep(retryDelayMs * (attempt + 1));
        continue;
      }
      return { ok: false, status: 0, error: errorMsg };
    }
  }
  return { ok: false, status: 0, error: 'Unknown failure after retries' };
}

export async function fetchProfile(): Promise<{ username?: string; name?: string; [k: string]: any } | undefined> {
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
