import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Box } from 'native-base';

import DaysList from '../lists/DaysList';
import ChangeScheduleIcon from '../svgs/ChangeScheduleIcon';

const HomeScreenScheduleCard = ({ schedule, navigation, user }) => {
    const selectedDays = {
        monday: schedule.monday,
        tuesday: schedule.tuesday,
        wednesday: schedule.wednesday,
        thursday: schedule.thursday,
        friday: schedule.friday,
        saturday: schedule.saturday,
        sunday: schedule.sunday,
    }

    return (
        <>
            <Box style={styles.header}>
                <Text style={ styles.scheduleHeading }>My daily schedule</Text>
                <TouchableOpacity style={ styles.changeScheduleIcon } onPress={() => navigation.navigate('HomeStack', { screen: 'ChangeScheduleScreen', params: { schedule: schedule, user: user } })}>
                    <ChangeScheduleIcon />
                </TouchableOpacity>
            </Box>


            <Box style={styles.schedule}>
                <DaysList selectedDays={selectedDays} setSelectedDays={() => {return}} checkDays={() => {return}} setSelected={() => {return}} />

                <Box style={styles.times}>
                    <Box style={styles.toFrom}>
                        <Text style={styles.timeHeader}>From</Text>
                        <Box style={styles.toFromTextContainer}>
                            <Text style={ styles.toFromText }>{ schedule.from }</Text>
                        </Box>
                    </Box>
                    <Box style={[styles.toFrom, { marginLeft: 10 }]}>
                        <Text style={styles.timeHeader}>To</Text>
                        <Box style={styles.toFromTextContainer}>
                            <Text style={ styles.toFromText }>{ schedule.to }</Text>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default HomeScreenScheduleCard

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center'
    },  
    scheduleHeading: {
        fontSize: 22,
        fontFamily: 'josefin-semi-bold',
        marginBottom: 8
    },
    changeScheduleIcon: {
        marginLeft: 8,
    },  
    schedule: {
        backgroundColor: '#FFFFFF',
        marginBottom: 32,
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
    toFromTextContainer: {
        borderWidth: 1.5,
        borderColor: '#355C97',
        width: '100%',
        borderRadius: 20,
        alignItems: 'center',
        height: 40
    },
    toFromText: {
        fontSize: 20,
        fontFamily: 'josefin-regular',
        lineHeight: 28,
    }
})
