import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Box } from 'native-base';
import { Entypo } from '@expo/vector-icons';

import ScheduleCard from '../../cards/ScheduleCard';

const ChangeScheduleScreen = ({ navigation }) => {
    const [selectedDays, setSelectedDays] = useState({
        monday: false,
        tuesday: false,
        wednesday: false,
        thursday: false,
        friday: false,
        saturday: false,
        sunday: false,
    });

    const times = ["08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "01:00", "01:30", "02:00", "02:30", "03:00", "03:30", "04:00", "04:30", "05:00", "05:30", "06:00", "06:30", "07:00", "07:30", "08:00", "08:30"];

    return (
        <Box style={styles.container} safeAreaTop>
            <Box style={styles.header}>
                <TouchableOpacity style={styles.backLink} onPress={() => {
                    navigation.goBack();
                }}>
                    <Text style={styles.backLinkText}>Cancel</Text>
                </TouchableOpacity>
                <Text style={styles.heading}>My Schedule</Text>
            </Box>

            <ScheduleCard
                selectedDays={selectedDays} 
                setSelectedDays={setSelectedDays} 
                checkDays={() => {return}} 
                setSelected={() => {return}}
                times={times}
                setFrom={() => {return}}
                setTo={() => {return}}
                to={times[1]}
                from={times[17]}
            />

            <TouchableOpacity onPress={() => navigation.navigate('SetIntervalScreen')}>
                <Box style={styles.card}>
                    <Text style={styles.cardTitle}>Interval</Text>
                    <Entypo name="chevron-right" size={24} color="#F94144" />
                </Box>
            </TouchableOpacity>

            <TouchableOpacity>
                <Box style={styles.card}>
                    <Text style={styles.cardTitle}>Noon Break</Text>
                    <Text style={styles.cardText}>12:00 - 13:00</Text>
                </Box>
            </TouchableOpacity>

            <TouchableOpacity>
                <Box style={styles.card}>
                    <Text style={styles.cardTitle}>Sound</Text>
                    <Entypo name="chevron-right" size={24} color="#F94144" />
                </Box>
            </TouchableOpacity>

            <TouchableOpacity>
                <Box style={styles.card}>
                    <Text style={styles.cardTitle}>Silent Mode</Text>
                    <Text style={styles.cardText}>PH</Text>
                </Box>
            </TouchableOpacity>

            <TouchableOpacity style={styles.nextButton} onPress={() => {
                navigation.goBack();
            }}>
                <Text style={styles.nextButtonText}>Confirm</Text>
            </TouchableOpacity>
        </Box>
    )
}

export default ChangeScheduleScreen

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingBottom: 24,
        paddingTop: 34,
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 16
    },
    backLink: {
        position: 'absolute',
        left: 0,
    },
    backLinkText: {
        fontSize: 18,
        fontFamily: 'josefin-regular'
    },
    heading: {
        fontSize: 20,
        fontFamily: 'josefin-semi-bold'
    },
    times: {
        height: '27%',
        backgroundColor: 'rgba(0,0,0,0.04)',
    },
    card: {
        paddingHorizontal: 16,
        paddingBottom: 10,
        paddingTop: 13,
        backgroundColor: '#FFFFFF',
        borderRadius: 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 16
    },
    cardTitle: {
        fontSize: 18,
        fontFamily: 'josefin-regular'
    },
    cardText: {
        color: '#355C97',
        fontSize: 16,
        fontFamily: 'josefin-regular'
    },
    nextButton: {
        backgroundColor: '#F94144',
        height: 48,
        justifyContent: 'center',
        width: '45%',
        alignSelf: 'center',
        marginTop: 32,
        borderRadius: 24
    },
    nextButtonText: {
        fontSize: 18,
        textAlign: 'center',
        color: '#FFFFFF',
        fontFamily: 'josefin-regular'
    }
})
