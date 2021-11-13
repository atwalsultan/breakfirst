import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Box } from 'native-base';
import { Entypo } from '@expo/vector-icons';

import IntervalCard from '../../cards/IntervalCard';

const SetIntervalScreen = ({ navigation }) => {
    const intervalLabels = ['30 mins', '45 mins', '60 mins', 'Decide for me'];
    const [active, setActive] = useState(0);

    return (
        <Box style={styles.container} safeAreaTop>
            <Box style={styles.header}>
                <TouchableOpacity style={styles.backLink} onPress={() => {
                    navigation.goBack();
                }}>
                    <Entypo name="chevron-left" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.heading}>Interval</Text>
            </Box>

            {
                intervalLabels.map((label, index) => (
                    <IntervalCard text={label} key={index} index={index} active={active} setActive={setActive} />
                ))
                
            }

            <Text style={styles.text}>During your working time, we will fire reminders besed on the interval you choose.</Text>
        </Box>
    )
}

export default SetIntervalScreen

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
    heading: {
        fontSize: 20,
        fontFamily: 'josefin-semi-bold'
    },
    text: {
        fontSize: 15,
        color: 'rgba(20, 35, 57, 0.6)',
        fontFamily: 'josefin-regular'
    }
})
