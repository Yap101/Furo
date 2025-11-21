import React, { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import SignClient from '@walletconnect/sign-client';
import type { SessionTypes } from '@walletconnect/types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Linking, Platform } from 'react-native';
import { ethers } from 'ethers';
import Constants from 'expo-constants';
import { defaultChains } from '../config';

type WalletState = {
  connected: boolean;
  address?: string;
  chainId?: number;
  pairingUri?: string | null;
  initError?: string | null;
  connect: (opts?: { chains?: string[] }) => Promise<void>;
  disconnect: () => Promise<void>;
  signMessage: (message: string) => Promise<string>;
  sendTransaction: (tx: any) => Promise<string>;
  signTypedData: (domain: any, types: any, value: any) => Promise<string>;
  cancelPending: () => void;
  validated: boolean;
  validating: boolean;
  forceReset: () => Promise<void>;
  lastError?: string | null;
  purgeStorage: () => Promise<void>;
};

const WalletCtx = createContext<WalletState | null>(null);

const WC_SESSION_KEY = 'wc_session_v2';

export function WalletProvider({ children }: { children: React.ReactNode }) {
  const projectId =
    process.env.EXPO_PUBLIC_WC_PROJECT_ID ||
    ((Constants?.expoConfig as any)?.extra?.EXPO_PUBLIC_WC_PROJECT_ID as string | undefined) ||
    ((Constants as any)?.manifest2?.extra?.EXPO_PUBLIC_WC_PROJECT_ID as string | undefined) ||
    '';

  const [client, setClient] = useState<SignClient | null>(null);
  const [session, setSession] = useState<SessionTypes.Struct | null>(null);
  const [pairingUri, setPairingUri] = useState<string | null>(null);
  const [initError, setInitError] = useState<string | null>(null);
  const pendingApprovalRef = useRef<Promise<SessionTypes.Struct> | null>(null);
  const cancelRejectRef = useRef<(() => void) | null>(null);
  const [validated, setValidated] = useState(false);
  const [validating, setValidating] = useState(false);
  const validationAttemptsRef = useRef(0);
  const [lastError, setLastError] = useState<string | null>(null);

  const address = useMemo(() => session?.namespaces?.eip155?.accounts?.[0]?.split(':')[2], [session]);
  const chainId = useMemo(() => {
    const ns = session?.namespaces?.eip155?.accounts?.[0];
    if (!ns) return undefined;
    const cid = Number(ns.split(':')[1]);
    return Number.isFinite(cid) ? cid : undefined;
  }, [session]);

  // Initialize Client
  useEffect(() => {
    (async () => {
      if (!projectId) {
        setInitError('Missing WalletConnect project ID (set EXPO_PUBLIC_WC_PROJECT_ID)');
        return;
      }
      let clientInstance: SignClient | null = null;
      try {
        clientInstance = await SignClient.init({
          projectId, metadata: {
            name: 'Furo Mobile',
            description: 'Furo Mobile WalletConnect',
            url: 'https://example.com',
            icons: ['https://walletconnect.com/walletconnect-logo.png']
          }
        });
        setClient(clientInstance);
      } catch (e: any) {
        setInitError(e?.message || 'Failed to initialize wallet client');
        return;
      }

      const cached = await AsyncStorage.getItem(WC_SESSION_KEY);
      if (cached) {
        try {
          const sess = JSON.parse(cached) as SessionTypes.Struct;
          setSession(sess);
          setValidated(false);
        } catch { }
      }

      if (!clientInstance) return;

      clientInstance.on('session_update', ({ topic, params }: any) => {
        const { namespaces } = params;
        const current = clientInstance!.session.get(topic);
        const next = { ...current, namespaces } as SessionTypes.Struct;
        setSession(next);
        AsyncStorage.setItem(WC_SESSION_KEY, JSON.stringify(next)).catch(() => { });
      });

      clientInstance.on('session_ping', ({ topic }: any) => {
        console.log(`[WC] Session ping received for topic ${topic}`);
      });

      clientInstance.on('session_delete', () => {
        setSession(null);
        AsyncStorage.removeItem(WC_SESSION_KEY).catch(() => { });
        setValidated(false);
      });
    })();
  }, [projectId]);

  // Validate Session
  useEffect(() => {
    (async () => {
      if (!client || !session || validated || validating) return;
      if (validationAttemptsRef.current > 2) return;
      setValidating(true);
      try {
        // @ts-ignore
        if (typeof client.ping === 'function') {
          // @ts-ignore
          await client.ping({ topic: session.topic });
        }
        setValidated(true);
      } catch {
        setSession(null);
        AsyncStorage.removeItem(WC_SESSION_KEY).catch(() => { });
        setValidated(false);
        validationAttemptsRef.current += 1;
      } finally {
        setValidating(false);
      }
    })();
  }, [client, session, validated, validating]);

  const connect = useCallback(async (opts?: { chains?: string[] }) => {
    if (initError) throw new Error(initError);
    if (!client) throw new Error('Wallet client not ready');
    const chains = opts?.chains ?? defaultChains();
    let uri: string | undefined;
    let approval: () => Promise<SessionTypes.Struct>;
    try {
      const res = await client.connect({
        requiredNamespaces: {
          eip155: {
            methods: ['eth_sendTransaction', 'personal_sign', 'eth_signTypedData'],
            chains,
            events: ['chainChanged', 'accountsChanged']
          }
        }
      });
      uri = res.uri;
      approval = res.approval;
    } catch (e: any) {
      const msg = e?.message || String(e);
      setLastError(msg);
      if (/No matching key/i.test(msg)) {
        await AsyncStorage.removeItem(WC_SESSION_KEY).catch(() => { });
        setSession(null);
        setValidated(false);
      }
      throw e;
    }
    if (uri) setPairingUri(uri);
    const cancelWait = new Promise<never>((_, reject) => {
      cancelRejectRef.current = () => reject(new Error('Connection cancelled'));
    });
    const approvalPromise = approval();
    pendingApprovalRef.current = approvalPromise;
    Promise.race([approvalPromise, cancelWait])
      .then(async (sess) => {
        if (sess) {
          setSession(sess as SessionTypes.Struct);
          await AsyncStorage.setItem(WC_SESSION_KEY, JSON.stringify(sess));
          setValidated(true);
          setLastError(null);
        }
      })
      .catch((e: any) => {
        const msg = e?.message || String(e);
        if (/No matching key/i.test(msg)) {
          AsyncStorage.removeItem(WC_SESSION_KEY).catch(() => { });
          setSession(null);
          setValidated(false);
          setLastError('Stale or invalid session; please reconnect');
        } else if (!/Connection cancelled/i.test(msg)) {
          setLastError(msg);
        }
      })
      .finally(() => {
        setPairingUri(null);
        pendingApprovalRef.current = null;
        cancelRejectRef.current = null;
      });
  }, [client, initError]);

  const disconnect = useCallback(async () => {
    if (client && session) {
      await client.disconnect({ topic: session.topic, reason: { code: 6000, message: 'User disconnected' } });
    }
    setSession(null);
    setPairingUri(null);
    await AsyncStorage.removeItem(WC_SESSION_KEY);
  }, [client, session]);

  const signMessage = useCallback(async (message: string) => {
    if (!client || !session) throw new Error('Not connected');
    const account = session.namespaces.eip155.accounts[0];
    const [, , addr] = account.split(':');
    const msgHex = ethers.hexlify(ethers.toUtf8Bytes(message));
    const result = await client.request({
      topic: session.topic,
      chainId: session.namespaces.eip155.chains?.[0] || 'eip155:1',
      request: {
        method: 'personal_sign',
        params: [msgHex, addr]
      }
    });
    return String(result);
  }, [client, session]);

  const sendTransaction = useCallback(async (tx: any) => {
    if (!client || !session) throw new Error('Not connected');
    const account = session.namespaces.eip155.accounts[0];
    const [, , addr] = account.split(':');
    const result = await client.request({
      topic: session.topic,
      chainId: session.namespaces.eip155.chains?.[0] || 'eip155:1',
      request: {
        method: 'eth_sendTransaction',
        params: [{ ...tx, from: addr }]
      }
    });
    return String(result);
  }, [client, session]);

  const signTypedData = useCallback(async (domain: any, types: any, value: any) => {
    if (!client || !session) throw new Error('Not connected');
    const account = session.namespaces.eip155.accounts[0];
    const [, , addr] = account.split(':');
    const payload = JSON.stringify({
      types,
      domain,
      primaryType: Object.keys(types)[0],
      message: value
    });

    const result = await client.request({
      topic: session.topic,
      chainId: session.namespaces.eip155.chains?.[0] || 'eip155:1',
      request: {
        method: 'eth_signTypedData',
        params: [addr, payload]
      }
    });
    return String(result);
  }, [client, session]);

  const value = useMemo<WalletState>(() => ({
    connected: !!session && validated,
    address,
    chainId,
    pairingUri,
    initError,
    connect,
    disconnect,
    signMessage,
    sendTransaction,
    signTypedData,
    cancelPending: () => {
      setPairingUri(null);
      if (cancelRejectRef.current) {
        cancelRejectRef.current();
        cancelRejectRef.current = null;
      }
      pendingApprovalRef.current = null;
    },
    validated,
    validating,
    forceReset: async () => {
      pendingApprovalRef.current = null;
      cancelRejectRef.current = null;
      setPairingUri(null);
      setSession(null);
      setValidated(false);
      try {
        const keys = await AsyncStorage.getAllKeys();
        const targets = keys.filter(k => k.startsWith('walletconnect') || k.includes('wc@') || k.includes('wc_session'));
        if (targets.length) await AsyncStorage.multiRemove(targets);
      } catch { }
      await AsyncStorage.removeItem(WC_SESSION_KEY).catch(() => { });
      setLastError(null);
      console.log('[WC] Force reset executed');
    },
    lastError,
    purgeStorage: async () => {
      try {
        const keys = await AsyncStorage.getAllKeys();
        const targets = keys.filter(k => k.startsWith('walletconnect') || k.includes('wc@') || k.includes('wc_session'));
        if (targets.length) await AsyncStorage.multiRemove(targets);
      } catch { }
    },
  }), [session, address, chainId, pairingUri, initError, connect, disconnect, signMessage, sendTransaction, signTypedData, validated, validating, lastError]);

  return <WalletCtx.Provider value={value}>{children}</WalletCtx.Provider>;
}

export function useWallet() {
  const ctx = useContext(WalletCtx);
  if (!ctx) throw new Error('useWallet must be used within WalletProvider');
  return ctx;
}
