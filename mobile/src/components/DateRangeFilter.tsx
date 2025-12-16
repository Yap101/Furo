import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform, Modal, TouchableWithoutFeedback } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface DateRangeFilterProps {
    startDate: Date;
    endDate: Date;
    onApply: (start: Date, end: Date) => void;
}

export default function DateRangeFilter({ startDate, endDate, onApply }: DateRangeFilterProps) {
    const [modalVisible, setModalVisible] = useState(false);
    const [tempStart, setTempStart] = useState(startDate);
    const [tempEnd, setTempEnd] = useState(endDate);

    // Controls for Android pickers
    const [showPicker, setShowPicker] = useState<'start' | 'end' | null>(null);

    const formatDate = (date: Date) => {
        return date.toISOString().split('T')[0];
    };

    const handleApply = () => {
        onApply(tempStart, tempEnd);
        setModalVisible(false);
    };

    const onDateChange = (event: any, selectedDate?: Date) => {
        if (Platform.OS === 'android') {
            // Close picker immediately on Android selection
            const currentMode = showPicker;
            setShowPicker(null);

            if (selectedDate && currentMode === 'start') {
                setTempStart(selectedDate);
            } else if (selectedDate && currentMode === 'end') {
                setTempEnd(selectedDate);
            }
        } else {
            // iOS handled in modal inline or similar
        }
    };

    return (
        <>
            <TouchableOpacity style={styles.filterButton} onPress={() => setModalVisible(true)}>
                <Text style={styles.filterText}>{`${formatDate(startDate)} - ${formatDate(endDate)}`}</Text>
                <MaterialCommunityIcons name="calendar-month" size={20} color="#FFF" />
            </TouchableOpacity>

            <Modal transparent visible={modalVisible} animationType="fade" onRequestClose={() => setModalVisible(false)}>
                <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
                    <View style={styles.overlay}>
                        <TouchableWithoutFeedback>
                            <View style={styles.modalContent}>
                                <Text style={styles.title}>Select Date Range</Text>

                                <View style={styles.row}>
                                    <View style={styles.col}>
                                        <Text style={styles.label}>Start Date</Text>
                                        {Platform.OS === 'android' ? (
                                            <TouchableOpacity style={styles.dateBox} onPress={() => setShowPicker('start')}>
                                                <Text style={styles.dateText}>{formatDate(tempStart)}</Text>
                                            </TouchableOpacity>
                                        ) : (
                                            <DateTimePicker
                                                value={tempStart}
                                                mode="date"
                                                display="default"
                                                onChange={(e, d) => d && setTempStart(d)}
                                                themeVariant="dark"
                                            />
                                        )}
                                    </View>

                                    <View style={styles.col}>
                                        <Text style={styles.label}>End Date</Text>
                                        {Platform.OS === 'android' ? (
                                            <TouchableOpacity style={styles.dateBox} onPress={() => setShowPicker('end')}>
                                                <Text style={styles.dateText}>{formatDate(tempEnd)}</Text>
                                            </TouchableOpacity>
                                        ) : (
                                            <DateTimePicker
                                                value={tempEnd}
                                                mode="date"
                                                display="default"
                                                onChange={(e, d) => d && setTempEnd(d)}
                                                themeVariant="dark"
                                            />
                                        )}
                                    </View>
                                </View>

                                <TouchableOpacity style={styles.applyButton} onPress={handleApply}>
                                    <Text style={styles.applyText}>Apply Filter</Text>
                                </TouchableOpacity>

                                {/* Android Pickers */}
                                {Platform.OS === 'android' && showPicker && (
                                    <DateTimePicker
                                        value={showPicker === 'start' ? tempStart : tempEnd}
                                        mode="date"
                                        display="default"
                                        onChange={onDateChange}
                                    />
                                )}
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    filterButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#333',
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 8,
        gap: 8,
        marginBottom: 16,
        alignSelf: 'flex-start'
    },
    filterText: {
        color: '#FFF',
        fontSize: 14,
        fontFamily: 'monospace',
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.7)',
        justifyContent: 'center',
        padding: 20,
    },
    modalContent: {
        backgroundColor: '#222',
        borderRadius: 16,
        padding: 20,
        borderWidth: 1,
        borderColor: '#444',
    },
    title: {
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 24,
    },
    col: {
        flex: 1,
        alignItems: 'center',
    },
    label: {
        color: '#AAA',
        marginBottom: 8,
        fontSize: 14,
    },
    dateBox: {
        backgroundColor: '#333',
        padding: 10,
        borderRadius: 8,
        minWidth: 120,
        alignItems: 'center',
    },
    dateText: {
        color: '#FFF',
        fontSize: 16,
    },
    applyButton: {
        backgroundColor: '#2D2CBA',
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: 'center',
    },
    applyText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
