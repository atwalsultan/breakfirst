import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Box } from 'native-base';
import { Entypo } from '@expo/vector-icons';

import OBNextButton from '../../buttons/OBNextButton';

const IntroScreen2 = ({ navigation }) => {
    return (
        <Box style={styles.container} safeAreaTop>
            <TouchableOpacity onPress={() => {
                navigation.goBack()
            }}>
                <Entypo name="chevron-left" size={24} color="black" style={styles.backLink} />
            </TouchableOpacity>

            <Box style={styles.image}></Box>

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
        height: '40%',
        backgroundColor: 'rgba(0,0,0,0.05)',
        marginBottom: 32,
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
