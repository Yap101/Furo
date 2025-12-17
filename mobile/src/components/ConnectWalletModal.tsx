import React, { useState, useEffect } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, ActivityIndicator, Linking, Alert, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

type WalletType = 'metamask' | 'rainbow' | 'coinbase' | 'walletconnect';

interface ConnectWalletModalProps {
    visible: boolean;
    onClose: () => void;
    pairingUri?: string | null;
    connect: () => Promise<void>;
}

export default function ConnectWalletModal({ visible, onClose, pairingUri, connect }: ConnectWalletModalProps) {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (visible) setLoading(false);
    }, [visible]);

    useEffect(() => {
        if (visible && !pairingUri) {
            connect().catch(() => { });
        }
    }, [visible, pairingUri]);

    async function connectVia(target: WalletType) {
        setLoading(true);
        try {
            let uri = pairingUri;
            if (!uri) {
                // If we don't have a URI yet, we might want to wait or try connect again, 
                // but for now we'll assume the parent/useEffect triggered it.
                // We'll give it a quick check or alert.
                if (!uri) {
                    Alert.alert('Initializing', 'Please wait for the connection link to generate...');
                    setLoading(false);
                    return;
                }
            }

            const link = walletLinkFor(target, uri!);
            const canOpen = await Linking.canOpenURL(link);
            if (canOpen) {
                await Linking.openURL(link);
                onClose();
            } else {
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

    return (
        <Modal visible={visible} animationType="fade" transparent onRequestClose={onClose}>
            <View style={styles.backdrop}>
                <View style={styles.card}>
                    {/* Digital Number GIF Background */}
                    <Image
                        source={{ uri: 'https://media.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif' }}
                        style={[StyleSheet.absoluteFillObject, { opacity: 0.08 }]}
                        resizeMode="cover"
                    />

                    <Text style={styles.title}>Choose your wallet</Text>

                    <View style={styles.listContainer}>
                        {!pairingUri ? (
                            <View style={styles.loadingContainer}>
                                <ActivityIndicator size="large" color="#000" />
                                <Text style={styles.loadingText}>Initializing...</Text>
                            </View>
                        ) : (
                            <>
                                <WalletOption
                                    name="Wallet Connect"
                                    icon={<MaterialCommunityIcons name="link-variant" size={24} color="#FFF" />}
                                    iconColor="#3B99FC"
                                    onPress={() => connectVia('walletconnect')}
                                    isFirst
                                />
                                <WalletOption
                                    name="Rainbow"
                                    icon={<MaterialCommunityIcons name="palette" size={24} color="#FFF" />}
                                    iconColor="#001E59"
                                    onPress={() => connectVia('rainbow')}
                                />
                                <WalletOption
                                    name="MetaMask"
                                    icon={<MaterialCommunityIcons name="paw" size={24} color="#FFF" />}
                                    iconColor="#F6851B"
                                    onPress={() => connectVia('metamask')}
                                />
                                <WalletOption
                                    name="Base Account"
                                    icon={<MaterialCommunityIcons name="cube-outline" size={24} color="#FFF" />}
                                    iconColor="#4F46E5"
                                    onPress={() => connectVia('coinbase')}
                                    isLast
                                />
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

function WalletOption({ name, icon, iconColor, onPress, isFirst, isLast }: any) {
    return (
        <TouchableOpacity
            style={[
                styles.optionBtn,
                isFirst && styles.optionBtnFirst,
                isLast && styles.optionBtnLast
            ]}
            onPress={onPress}
        >
            <View style={[styles.iconContainer, { backgroundColor: iconColor }]}>
                {icon}
            </View>
            <Text style={styles.optionText}>{name}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    backdrop: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.6)',
        justifyContent: 'flex-end',
        paddingBottom: 30
    },
    card: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        padding: 24,
        overflow: 'hidden', // Clip the background image
        // Semi-modal look implies it might not go all the way to bottom in some designs, 
        // but Image 2 looks like a bottom sheet.
        // We'll add some margin for the "Cancel" button separation if desired, 
        // but design shows Cancel button floating or part of the sheet.
        // Let's make it a full bottom sheet style.
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#000',
        textAlign: 'left'
    },
    listContainer: {
        backgroundColor: '#F2F2F7', // Standard iOS grouped background color
        borderRadius: 12,
        marginBottom: 20,
    },
    loadingContainer: {
        padding: 20,
        alignItems: 'center'
    },
    loadingText: {
        marginTop: 10,
        color: '#666'
    },
    optionBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#F2F2F7', // Or transparent if container has color
        borderBottomWidth: 1,
        borderBottomColor: '#D1D1D6',
    },
    optionBtnFirst: {
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
    },
    optionBtnLast: {
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        borderBottomWidth: 0,
    },
    iconContainer: {
        width: 32,
        height: 32,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 12,
    },
    optionText: {
        fontSize: 17,
        fontWeight: '600',
        color: '#000',
    },
    cancelButton: {
        backgroundColor: '#E5E5EA',
        borderRadius: 12,
        padding: 16,
        alignItems: 'center',
    },
    cancelText: {
        fontSize: 17,
        fontWeight: '600',
        color: '#000',
    }
});
