import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Box } from 'native-base';
import { AntDesign } from '@expo/vector-icons';

import { useUser } from '../../contexts/UserContext';
import HomeScreenScheduleCard from '../../cards/HomeScreenScheduleCard';
import NoScheduleCard from '../../cards/NoScheduleCard'

const HomeScreen = ({ navigation }) => {
    const { user } = useUser();
    const [schedule, setSchedule] = useState(null);

    const getSchedule = async () => {
        const url = `http://192.168.1.92:8080/app/schedule?id=${user["id"]}`;
        const response = await fetch(url, {
            method: "GET",
            headers: {
                'authorization': `Bearer ${user.token}`
            }
        });

        if (response.status == 200) {
            const responseJson = await response.json();
            setSchedule(responseJson);
        }
        else {
            const responseJson = await response.json();
            console.log(responseJson);
        }
    }

    useEffect(() => {
        getSchedule();
    }, [])

    return (
        <Box style={styles.container} safeAreaTop>
            <ScrollView style={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
                <Text style={styles.heading}>Today's sitting time</Text>

                <Box style={styles.graphic}></Box>

                <Box style={styles.sittingTimes}>
                    <Box style={styles.sittingTime}>
                        <Box style={styles.marker}></Box>
                        <Text style={styles.sittingTimeLabel}>Sitting time</Text>
                        <Text style={styles.sittingTimeText}>6 hr 35 min</Text>
                    </Box>
                    <Box style={styles.sittingTime}>
                        <Box style={styles.marker}></Box>
                        <Text style={styles.sittingTimeLabel}>Medium risk</Text>
                        <Text style={styles.sittingTimeText}>6 - 8 hrs</Text>
                    </Box>
                    <Box style={styles.sittingTime}>
                        <Box style={styles.marker}></Box>
                        <Text style={styles.sittingTimeLabel}>High risk</Text>
                        <Text style={styles.sittingTimeText}>Over 8 hrs</Text>
                    </Box>
                </Box>

                <Box style={styles.nextBreak}>
                    <Text style={styles.nextBreakLabel}>Next break in:</Text>
                    <Box style={styles.nextBreakTime}>
                        <Box style={styles.nextBreakMarker}></Box>
                        <Text style={styles.nextBreakTimeText}>00 : 45 : 38</Text>
                    </Box>
                </Box>

                {
                    schedule
                    ?
                        <HomeScreenScheduleCard schedule={schedule} />
                    :
                        <NoScheduleCard />
                }

                <Box style={styles.mySchedules}>
                    <Text style={styles.mySchedulesHeading}>My task schedules</Text>

                    <TouchableOpacity onPress={() => {
                        navigation.navigate("HomeStack", { screen: 'SetReminderScreen' });
                    }}>
                        <Box style={styles.newTaskSchedule}>
                            <Text style={styles.newTaskScheduleText}>New task schedule</Text>
                            <AntDesign name="plus" size={24} color="#F94144" />
                        </Box>
                    </TouchableOpacity>

                    <Box style={styles.savedSchedules}>
                        <TouchableOpacity onPress={() => {
                            navigation.navigate("HomeStack", { screen: 'ChangeScheduleScreen' });
                        }}>
                            <Box style={styles.savedSchedule}>
                                <Box>
                                    <Text style={styles.savedScheduleTime}>14:30 - 18:30</Text>
                                    <Text style={styles.savedScheduleLabel}>Write monthly report</Text>
                                </Box>
                                <Box style={styles.nextBreakMarker}></Box>
                            </Box>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => {
                            navigation.navigate("HomeStack", { screen: 'ChangeScheduleScreen' });
                        }}>
                            <Box style={styles.savedSchedule}>
                                <Box>
                                    <Text style={styles.savedScheduleTime}>09:30 - 12:30</Text>
                                    <Text style={styles.savedScheduleLabel}>Morning Study</Text>
                                </Box>
                                <Box style={styles.nextBreakMarker}></Box>
                            </Box>
                        </TouchableOpacity>
                    </Box>
                </Box>
            </ScrollView>
        </Box>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingTop: 34,
        flex: 1,
    },
    heading: {
        fontSize: 25,
        fontFamily: 'josefin-semi-bold',
        marginBottom: 24
    },
    graphic: {
        height: 144,
        width: 144,
        borderRadius: 71,
        backgroundColor: 'rgba(0,0,0,0.2)',
        alignSelf: 'center',
        marginBottom: 35
    },
    sittingTimes: {
        alignSelf: 'center',
        marginBottom: 24
    },
    sittingTime: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    marker: {
        height: 12,
        width: 12,
        borderRadius: 6,
        backgroundColor: 'rgba(0,0,0,0.5)',
        marginRight: 8
    },
    sittingTimeLabel: {
        fontSize: 16,
        fontFamily: 'josefin-regular',
        color: 'rgba(0,0,0,0.6)',
    },
    sittingTimeText: {
        fontSize: 16,
        fontFamily: 'josefin-regular',
        marginLeft: 24
    },
    nextBreak: {
        marginBottom: 40,
        alignSelf: 'center',
        alignItems: 'center'
    },
    nextBreakLabel: {
        fontSize: 14,
        fontFamily: 'josefin-regular',
        color: 'rgba(0,0,0,0.6)',
        marginBottom: 8
    },
    nextBreakTime: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    nextBreakMarker: {
        height: 24,
        width: 24,
        borderRadius: 12,
        backgroundColor: '#ABABAB'
    },
    nextBreakTimeText: {
        fontSize: 28,
        fontFamily: 'josefin-regular',
        marginLeft: 8
    },
    mySchedules: {

    },
    mySchedulesHeading: {
        fontSize: 22,
        fontFamily: 'josefin-semi-bold',
        marginBottom: 16
    },
    newTaskSchedule: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: '#FFFFFF',
        marginBottom: 16,
        borderRadius: 4
    },
    newTaskScheduleText: {
        fontSize: 18,
        fontFamily: 'josefin-regular',
    },
    savedSchedules: {

    },
    savedSchedule: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 8,
        backgroundColor: '#FFFFFF',
        marginBottom: 16,
        borderRadius: 4
    },
    savedScheduleTime: {
        fontSize: 20,
        fontFamily: 'josefin-regular',
    },
    savedScheduleLabel: {
        fontSize: 14,
        fontFamily: 'josefin-regular',
        color: 'rgba(20, 35, 57, 0.6)'
    }
})
