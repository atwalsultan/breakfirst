import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Box } from 'native-base';

const IntervalCard = ({ text, index, active, setActive }) => {
    return (
        <TouchableOpacity onPress={() => {
            setActive(index)
        }}>
            <Box style={ [styles.card, { borderColor: active === index ? '#355C97' : '#FFFFFF' }] }>
                <Text style={styles.cardTitle}>{ text }</Text>
            </Box>
        </TouchableOpacity>
    )
}

export default IntervalCard

const styles = StyleSheet.create({
    card: {
        paddingHorizontal: 16,
        paddingBottom: 10,
        paddingTop: 13,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
        borderRadius: 4,
        borderWidth: 1.5 
    },
    cardTitle: {
        fontSize: 18,
        fontFamily: 'josefin-regular'
    }
});
