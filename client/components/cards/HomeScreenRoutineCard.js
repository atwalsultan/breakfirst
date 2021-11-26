import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Switch } from 'native-base';
import { Box } from 'native-base';

const HomeScreenRoutineCard = ({ navigation, routine, user }) => {
    return (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate("HomeStack", { screen: 'ChangeRoutineScreen', params: { routine: routine, user: user } });
            }}
        >
            <Box style={styles.routine}>
                <Box>
                    <Text style={styles.routineTime}>{routine.from} - {routine.to}</Text>
                    <Text style={styles.routineLabel}>{routine.label}</Text>
                </Box>
                <Switch 
                    size='lg'
                    offTrackColor='#F4F4F4'
                    onTrackColor='#355C97'
                    onThumbColor='#FFFFFF'
                    offThumbColor='#F4F4F4'
                    defaultIsChecked={true}
                />
            </Box>
        </TouchableOpacity>
    )
}

export default HomeScreenRoutineCard

const styles = StyleSheet.create({
    routine: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 8,
        backgroundColor: '#FFFFFF',
        marginBottom: 16,
        borderRadius: 4
    },
    routineTime: {
        fontSize: 20,
        fontFamily: 'josefin-regular',
    },
    routineLabel: {
        fontSize: 14,
        fontFamily: 'josefin-regular',
        color: 'rgba(20, 35, 57, 0.6)'
    }
})
