import React, { useState, useEffect } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, ActivityIndicator, Linking, Alert, Image } from 'react-native';

type WalletType = 'metamask' | 'rainbow' | 'coinbase' | 'walletconnect';

interface ConnectWalletModalProps {
    visible: boolean;
    onClose: () => void;
    pairingUri?: string | null;
    connect: () => Promise<void>;
}

export default function ConnectWalletModal({ visible, onClose, pairingUri, connect }: ConnectWalletModalProps) {
    const [loading, setLoading] = useState(false);

    // Reset loading state when modal opens/closes
    useEffect(() => {
        if (visible) setLoading(false);
    }, [visible]);

    async function connectVia(target: WalletType) {
        setLoading(true);
        try {
            // 1. Ensure we have a pairing URI (start connection if needed)
            let uri = pairingUri;
            if (!uri) {
                await connect();
                // Wait for URI to populate in context
                // simpler approach: we can't easily "await" the context update here unless we poll or the parent handles it.
                // But assuming connect() in context updates the state, we just need to wait a tick or poll.
                uri = await waitForPairingUri(15000);
            }

            if (!uri) {
                Alert.alert('Connection Failed', 'Could not generate a pairing link. Please try again.');
                setLoading(false);
                return;
            }

            // 2. Generate Deep Link
            const link = walletLinkFor(target, uri);

            // 3. Open
            const canOpen = await Linking.canOpenURL(link);
            if (canOpen) {
                await Linking.openURL(link);
                onClose(); // Close modal after selection implies "Go confirm in wallet"
            } else {
                // Fallback or error
                await Linking.openURL(link).catch(() => {
                    Alert.alert('Error', `Could not open ${target}. Do you have the app installed?`);
                });
                onClose();
            }
        } catch (e: any) {
            Alert.alert('Error', e.message || 'Failed to connect');
        } finally {
            setLoading(false);
        }
    }

    // Poll helper to get updated URI from (likely) context updates or prop updates
    async function waitForPairingUri(timeout: number): Promise<string | null> {
        // Current prop might be stale if connect() matches updates.
        // However, since we are inside a component, we can't easily see future prop updates in a sync function.
        // We will rely on the parent (Context) already having set pairingUri if connect() finished.
        // But WalletContext.connect() is async and sets state.

        // If we truly need to wait for the Prop to update, we need a refined flow. 
        // For now, let's assume if connect() returns, the URI is available or soon to be.
        // A simple hacky poll on the prop isn't possible because the closure captures the old prop.
        // We actually need to rely on `connect` returning the URI, but the context `connect` returns `void`.

        // FIX: We'll just wait a small delay, or better, we should modify WalletContext or use a ref mechanism if possible.
        // But to avoid changing Context too much, let's just attempt to use the pairingUri we have. 
        // If it was null, and we called connect(), we hope `connect()` awaits internally until URI is set?
        // Looking at WalletContext.tsx:
        // `if (uri) setPairingUri(uri);` happens inside connect().
        // So by the time `await connect()` finishes, state update is scheduled.
        // React state updates might not be visible in this closure immediately.

        // We will use a small sleep then check if existing logic in BalanceScreen works.
        // BalanceScreen used a `waitForPairingUri` loop that checked `pairingUri` from closure? 
        // Wait, BalanceScreen's `waitForPairingUri` checks `pairingUri` which is a constant in that render scope... 
        // actually it relies on re-renders? No, `while` loop in a functional component WON'T see updated state unless using a Ref.
        // BalanceScreen's implementation was actually buggy if it relied on state variable updates inside a loop in one render!
        // But let's look at BalanceScreen again.

        // BalanceScreen:
        // `const { ... pairingUri ... } = useWallet();`
        // `async function waitForPairingUri(ms: number) { ... while... if (pairingUri) return pairingUri ... }`
        // This looks like it wouldn't work if pairingUri updates in next render completely.
        // UNLESS `pairingUri` is a Ref in the context? No, it's state.
        // So BalanceScreen logic seems flawed for "waiting" on a state update inside an async function component closure.

        // HOWEVER, for this Modal, we will assume `await connect()` is sufficient, OR we just trust that `connect()` sets it.
        // We will implement a clearer path: If `pairingUri` is null, call `connect()`.
        // We might need to ask the user to "Tap again" if it wasn't instant?
        // Or we simply close the modal and expect the user to have connected?

        // Better Approach: Trigger `connect()` immediately when Modal opens if URI is null?
        // Parent handles `connect`.
        // The Modal just assumes if `pairingUri` is available, we use it. 
        // If `pairingUri` is null, we show "Initializing...".

        // Let's rely on the parent to handle `connect()` before or during.
        // But to be robust, we'll try to use the `uri` from `connect` if we can change `connect` validation.
        // But I can't easily change `connect` return type without exploring more.

        // I will implement a simpler flow:
        // If `pairingUri` is null, show "Loading QR...".
        // Once `pairingUri` (prop) is set, enable buttons.
        // If buttons are clicked, we use the prop.

        // So `connectVia` will just use `props.pairingUri`.
        // If it's null, we warn "Please wait for connection initialization".

        return pairingUri || null;
    }

    function walletLinkFor(target: WalletType, uri: string) {
        const encoded = encodeURIComponent(uri);
        switch (target) {
            case 'metamask': return `https://metamask.app.link/wc?uri=${encoded}`;
            case 'rainbow': return `https://rnbwapp.com/wc?uri=${encoded}`;
            case 'coinbase': return `https://go.cb-w.com/wc?uri=${encoded}`;
            case 'walletconnect':
            default: return `walletconnect://wc?uri=${encoded}`;
        }
    }

    // We should auto-trigger connect if missing when modal opens?
    // User might have canceled previous.
    // We'll leave that to the parent or a `useEffect`.
    useEffect(() => {
        if (visible && !pairingUri) {
            connect().catch(() => { });
        }
    }, [visible, pairingUri]);

    return (
        <Modal visible={visible} animationType="slide" transparent onRequestClose={onClose}>
            <View style={styles.backdrop}>
                <View style={styles.card}>
                    <Text style={styles.title}>Connect Wallet</Text>
                    <Text style={styles.subtitle}>Select your wallet to log in</Text>

                    <View style={styles.grid}>
                        {!pairingUri ? (
                            <ActivityIndicator size="large" color="#444" style={{ margin: 20 }} />
                        ) : (
                            <>
                                <WalletButton name="MetaMask" type="metamask" onPress={() => connectVia('metamask')} color="#F6851B" />
                                <WalletButton name="Rainbow" type="rainbow" onPress={() => connectVia('rainbow')} color="#001E59" />
                                <WalletButton name="Coinbase" type="coinbase" onPress={() => connectVia('coinbase')} color="#0052FF" />
                                <WalletButton name="WalletConnect" type="walletconnect" onPress={() => connectVia('walletconnect')} color="#3B99FC" />
                            </>
                        )}
                    </View>

                    <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
                        <Text style={styles.cancelText}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}

function WalletButton({ name, type, onPress, color }: { name: string, type: string, onPress: () => void, color: string }) {
    // We can add icons later. For now, styled buttons.
    return (
        <TouchableOpacity style={[styles.walletBtn, { borderColor: color }]} onPress={onPress}>
            <View style={[styles.iconPlaceholder, { backgroundColor: color }]}>
                <Text style={styles.iconText}>{name[0]}</Text>
            </View>
            <Text style={styles.walletName}>{name}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    backdrop: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'flex-end' },
    card: { backgroundColor: '#fff', borderTopLeftRadius: 20, borderTopRightRadius: 20, padding: 24, paddingBottom: 40 },
    title: { fontSize: 20, fontWeight: '700', textAlign: 'center', marginBottom: 8 },
    subtitle: { fontSize: 14, color: '#666', textAlign: 'center', marginBottom: 24 },
    grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginBottom: 16 },
    walletBtn: { width: '48%', flexDirection: 'row', alignItems: 'center', padding: 12, borderWidth: 1, borderRadius: 12, marginBottom: 12 },
    iconPlaceholder: { width: 32, height: 32, borderRadius: 16, alignItems: 'center', justifyContent: 'center', marginRight: 10 },
    iconText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
    walletName: { fontSize: 16, fontWeight: '600', color: '#333' },
    cancelButton: { marginTop: 8, padding: 16, alignItems: 'center' },
    cancelText: { fontSize: 16, color: '#666' }
});
