import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Box } from 'native-base';
import { Picker } from '@react-native-picker/picker';

import DaysList from '../lists/DaysList';

const ScheduleCard = ({ selectedDays, setSelectedDays, checkDays, setSelected, times, setFrom, setTo, to, from }) => {
    return (
        <Box style={styles.schedule}>
            {selectedDays !== null && <DaysList selectedDays={selectedDays} setSelectedDays={setSelectedDays} checkDays={checkDays} setSelected={setSelected} />}

            <Box style={styles.times}>
                <Box style={styles.toFrom}>
                    <Text style={styles.timeHeader}>From</Text>
                    <Box style={styles.pickerContainer}>
                        <Picker
                            style={styles.picker}
                            selectedValue={from}
                            onValueChange={(itemValue) => setFrom(itemValue)
                            }>
                            {
                                times.map((time, index) => <Picker.Item label={time} value={time} key={index} />)
                            }
                        </Picker>
                    </Box>
                </Box>
                <Box style={[styles.toFrom, { marginLeft: 10 }]}>
                    <Text style={styles.timeHeader}>To</Text>
                    <Box style={styles.pickerContainer}>
                        <Picker
                            style={styles.picker}
                            selectedValue={to}
                            onValueChange={(itemValue) => setTo(itemValue)
                            }>
                            {
                                times.map((time, index) => <Picker.Item label={time} value={time} key={index} />)
                            }
                        </Picker>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default ScheduleCard

const styles = StyleSheet.create({
    schedule: {
        backgroundColor: '#FFFFFF',
        marginBottom: 24,
        paddingVertical: 24,
        paddingHorizontal: 16,
        borderRadius: 4
    },
    daysText: {
        fontSize: 20,
        fontFamily: 'josefin-regular'
    },
    times: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    toFrom: {
        flexBasis: '45%',
        alignItems: 'center'
    },
    timeHeader: {
        fontSize: 20,
        fontFamily: 'josefin-regular',
        marginBottom: 8
    },
    pickerContainer: {
        borderWidth: 1.5,
        borderColor: '#355C97',
        width: '100%',
        borderRadius: 20,
        paddingLeft: 12,
        alignItems: 'center'
    },
    picker: {
        height: 40,
        width: '100%',
    }
})
