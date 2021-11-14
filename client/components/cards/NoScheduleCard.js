import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Box } from 'native-base';

import CloseIcon from '../svgs/CloseIcon';

const NoScheduleCard = () => {
    return (
        <Box style={ styles.container }>
            <Box style={ styles.header }>
                <Text style={ styles.heading }>No fixed schedule</Text>
                <CloseIcon />
            </Box>
            <Text style={ styles.text }>Add your daily schedule from profile</Text>
        </Box>
    )
}

export default NoScheduleCard

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#FFFFFF',
        borderRadius: 4,
        marginBottom: 32
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16
    },
    heading: {
        fontSize: 20,
        fontFamily: 'josefin-regular'
    },
    text: {
        fontSize: 18,
        fontFamily: 'josefin-regular',
        color: 'rgba(20, 35, 57, 0.6)'
    }
})
