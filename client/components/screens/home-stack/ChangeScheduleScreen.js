import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Box, Switch } from 'native-base';
import { Entypo } from '@expo/vector-icons';

import ScheduleCard from '../../cards/ScheduleCard';

const ChangeScheduleScreen = ({ navigation, route }) => {
    const { schedule, user } = route.params    

    const times = ["08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "01:00", "01:30", "02:00", "02:30", "03:00", "03:30", "04:00", "04:30", "05:00", "05:30", "06:00", "06:30", "07:00", "07:30", "08:00", "08:30"];

    const [from, setFrom] = useState(schedule.from);
    const [to, setTo] = useState(schedule.to);
    const [silentMode, setSilentMode] = useState(schedule.silentMode);
    const [selectedDays, setSelectedDays] = useState({
        monday: schedule.monday,
        tuesday: schedule.tuesday,
        wednesday: schedule.wednesday,
        thursday: schedule.thursday,
        friday: schedule.friday,
        saturday: schedule.saturday,
        sunday: schedule.sunday
    });

    const changeSchedule = async () => {
        const url = 'http://192.168.1.92:8080/app/schedule/change';
        const response = await fetch(url, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${user.token}`
            },
            body: JSON.stringify({
                ...selectedDays,
                id: schedule._id,
                to,
                from,
                interval: 30,
                silentMode: silentMode,
            })
        });

        if(response.status == 200) {
            navigation.goBack();
        }
        else {
            const responseJsonArray = await response.json();  // Get response text
            console.log(responseJsonArray);
        }
    }

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
                checkDays={() => { return }}
                setSelected={() => { return }}
                times={times}
                setFrom={setFrom}
                setTo={setTo}
                to={to}
                from={from}
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
                    <Switch
                        size='lg'
                        offTrackColor='#F4F4F4'
                        onTrackColor='#355C97'
                        onThumbColor='#FFFFFF'
                        offThumbColor='#F4F4F4'
                        onChange={() => setSilentMode(!silentMode)}
                        defaultIsChecked={silentMode}
                    />
                </Box>
            </TouchableOpacity>

            <TouchableOpacity style={styles.nextButton} onPress={() => {
                changeSchedule();
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
        backgroundColor: '#FFFFFF',
        height: 48,
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
