import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { Box } from 'native-base';

const SplashScreen2 = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace("HomeTabs");
        }, 2000)
    }, [])

    return (
        <Box safeAreaTop style={styles.container}>
            <Text style={styles.text}>BreakFirst</Text>
        </Box>
    )
}

export default SplashScreen2

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 25,
        fontFamily: 'josefin-semi-bold',
    }
})
