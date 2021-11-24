import React, { useEffect } from 'react';
import { StyleSheet, Text } from 'react-native'
import { Box } from 'native-base';
import AppLogo from '../../svgs/AppLogo';

const SplashScreen2 = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace("HomeTabs");
        }, 2000)
    }, [])

    return (
        <Box safeAreaTop style={styles.container}>
            <Box style={ styles.logoContainer }>
                <AppLogo />
            </Box>
            <Text style={styles.text}>Please wait while we set up the app</Text>
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
    logoContainer: {
        marginBottom: 16,
        alignSelf: 'center'
    },
    text: {
        fontSize: 16,
        lineHeight: 22,
        fontFamily: 'josefin-regular',
    }
})
