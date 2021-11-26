import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Box } from 'native-base';

import OBNextButton from '../../buttons/OBNextButton';
import ChevronLeftIcon from '../../svgs/ChevronLeftIcon';
import IntroScreen2Image from '../../svgs/IntroScreen2Image';

const IntroScreen2 = ({ navigation }) => {
    return (
        <Box style={styles.container} safeAreaTop>
            <TouchableOpacity onPress={() => {
                navigation.goBack()
            }}>
                <ChevronLeftIcon />
            </TouchableOpacity>

            <Box style={styles.image}>
                <IntroScreen2Image />
            </Box>

            <Text style={styles.h1}>Sit less and move more.</Text>
            <Text style={styles.text}>BreakFirst will help you relieve stress, minimize the risk of injury and improve your health. Set the reminder now!</Text>

            <OBNextButton navigation={navigation} next="OB1" />

            <View style={styles.skipInfo}>
                <TouchableOpacity onPress={() => {
                    navigation.navigate("OB1")
                }}>
                    <Text style={styles.skipLink}>
                        Skip
                    </Text>
                </TouchableOpacity>
            </View>
        </Box>
    )
}

export default IntroScreen2

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingBottom: 24,
        flex: 1,
    },
    backLink: {
        marginTop: 16,
        marginBottom: 25
    },
    image: {
        marginBottom: 32,
        alignItems: 'center'
    },
    h1: {
        fontSize: 28,
        fontFamily: 'josefin-bold',
        marginBottom: 16
    },
    text: {
        fontSize: 18,
        fontFamily: 'josefin-regular',
        marginBottom: 64
    },
    skipInfo: {
        flexGrow: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    skipLink: {
        textAlign: 'center',
        fontSize: 18,
        fontFamily: 'josefin-semi-bold',
    }
})
