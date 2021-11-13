import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Box, Switch } from 'native-base';
import { Entypo } from '@expo/vector-icons';

import ScheduleCard from '../../cards/ScheduleCard';

const ChangeRoutineScreen = ({ navigation, route }) => {

    const { routine, user } = route.params

    const times = ["08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "01:00", "01:30", "02:00", "02:30", "03:00", "03:30", "04:00", "04:30", "05:00", "05:30", "06:00", "06:30", "07:00", "07:30", "08:00", "08:30"];

    const [from, setFrom] = useState(routine.from);
    const [to, setTo] = useState(routine.to);
    const [silentMode, setSilentMode] = useState(routine.silentMode);
    const [saveForNextTime, setsaveForNextTime] = useState(routine.saveForNextTime);

    const changeRoutine = async () => {
        const url = 'http://192.168.1.92:8080/app/routine/change';
        const response = await fetch(url, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${user.token}`
            },
            body: JSON.stringify({
                id: routine._id,
                to,
                from,
                interval: 30,
                silentMode: silentMode,
                label: "Sultan",
                saveForNextTime: saveForNextTime
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

    const deleteRoutine = async () => {
        const url = 'http://192.168.1.92:8080/app/routine/delete';
        const response = await fetch(url, {
            method: "DELETE",
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${user.token}`
            },
            body: JSON.stringify({
                id: routine._id,
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

                <Text style={styles.heading}>My task</Text>

                <TouchableOpacity style={styles.deleteButton} onPress={() => {
                    deleteRoutine();
                }}>
                    <Text style={styles.deleteButtonText}>Delete</Text>
                </TouchableOpacity>
            </Box>

            <ScheduleCard
                selectedDays={null}
                setSelectedDays={null}
                checkDays={() => {return}} 
                setSelected={() => {return}}
                times={times}
                setFrom={setFrom}
                setTo={setTo}
                to={to}
                from={from}
            />
            
            <TouchableOpacity>
                <Box style={styles.card}>
                    <Text style={styles.cardTitle}>Label</Text>
                    <Text style={styles.cardText}>{ routine.label }</Text>
                </Box>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('SetIntervalScreen')}>
                <Box style={styles.card}>
                    <Text style={styles.cardTitle}>Interval</Text>
                    <Entypo name="chevron-right" size={24} color="#F94144" />
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
                        defaultIsChecked={routine.silentMode}
                    />
                </Box>
            </TouchableOpacity>

            <TouchableOpacity>
                <Box style={styles.card}>
                    <Text style={styles.cardTitle}>Save for next time</Text>
                    <Switch 
                        size='lg'
                        offTrackColor='#F4F4F4'
                        onTrackColor='#355C97'
                        onThumbColor='#FFFFFF'
                        offThumbColor='#F4F4F4'
                        onChange={() => setsaveForNextTime(!saveForNextTime)}
                        defaultIsChecked={routine.saveForNextTime}
                    />
                </Box>
            </TouchableOpacity>

            <TouchableOpacity style={styles.nextButton} onPress={() => {
                changeRoutine();
            }}>
                <Text style={styles.nextButtonText}>Confirm</Text>
            </TouchableOpacity>
        </Box>
    )
}

export default ChangeRoutineScreen

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
        justifyContent: 'space-between',
        marginBottom: 16
    },
    backLinkText: {
        fontSize: 18,
        fontFamily: 'josefin-regular'
    },
    heading: {
        fontSize: 20,
        fontFamily: 'josefin-semi-bold'
    },
    deleteButton: {

    },
    deleteButtonText: {
        fontFamily: 'josefin-regular',
        fontSize: 18,
        color: '#F94144'
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