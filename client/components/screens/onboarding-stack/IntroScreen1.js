import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Box } from 'native-base';

import OBNextButton from '../../buttons/OBNextButton';
import IntroScreen1Image from '../../svgs/IntroScreen1Image';

const IntroScreen1 = ({ navigation }) => {
    return (
        <Box style={styles.container} safeAreaTop>
            <Box style={ styles.image }>
                <IntroScreen1Image />
            </Box>

            <Text style={styles.h1}>Did you know this?</Text>
            <Text style={styles.text}>A sedentary lifestyle increases all causes of mortality, while moving just 2 minutes every hour can decrease the risk by up to 33%</Text>

            <OBNextButton navigation={navigation} next="Intro2" />

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

export default IntroScreen1

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingBottom: 24,
        paddingTop: 68,
        flex: 1,
    },
    image: {
        marginVertical: 32,
        alignItems: 'center'
    },
    h1: {
        fontSize: 28,
        fontFamily: 'josefin-bold',
        marginBottom: 16,
        color: '#142339'
    },
    text: {
        fontSize: 18,
        fontFamily: 'josefin-regular',
        marginBottom: 64,
        color: '#142339'
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
        color: '#142339'
    }
})
