import React, { useEffect } from 'react';
import { Image, StyleSheet, Text } from 'react-native'
import { Box } from 'native-base';
import AppLogo from '../../../assets/loading.gif';

const SplashScreen2 = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace("HomeTabs");
        }, 3000)
    }, [])

    return (
        <Box safeAreaTop style={styles.container}>
            <Box style={ styles.logoContainer }>
                <Image source={AppLogo} style={ styles.image } />
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
        color: '#142339'
    },
    image: {
        width: 60,
        height: 60
    }
})
