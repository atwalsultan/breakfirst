import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Box, View } from 'native-base';

import IntervalCard from '../../cards/IntervalCard';
import ChevronLeftIcon from '../../svgs/ChevronLeftIcon'

const SetIntervalScreen = ({ navigation }) => {
    const intervalLabels = ['30 mins', '45 mins', '60 mins', 'Decide for me'];
    const [active, setActive] = useState(0);

    return (
        <Box style={styles.container} safeAreaTop>
            <Box style={styles.header}>
                <TouchableOpacity onPress={() => {
                    navigation.goBack();
                }}>
                    <ChevronLeftIcon header={true} />
                </TouchableOpacity>
                <Text style={styles.heading}>Interval</Text>
                <View style={{ width: '5%' }}></View>
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
        justifyContent: 'space-between',
        marginBottom: 16
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
