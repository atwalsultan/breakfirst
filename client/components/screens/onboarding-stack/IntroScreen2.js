import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Box } from 'native-base';
import OBNextButton from '../../buttons/OBNextButton';

const IntroScreen2 = ({ navigation }) => {
    return (
        <Box style={styles.container} safeAreaTop>
            <Box style={styles.image}></Box>

            <Text style={styles.h1}>Sit less and move more.</Text>
            <Text style={styles.text}>BreakFirst will help you relieve stress, minimize the risk of injury and improve your health. Set the reminder now!</Text>

            <OBNextButton navigation={navigation} next="OB1" />

            <View style={styles.skipInfo}>
                <Text style={styles.skipLink} onPress={() => {
                    navigation.navigate("OB1")
                }}>
                    Skip
                </Text>
            </View>
        </Box>
    )
}

export default IntroScreen2

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingBottom: 24,
        paddingTop: 68,
        flex: 1,
    },
    image: {
        height: '40%',
        backgroundColor: 'rgba(0,0,0,0.05)',
        marginBottom: 32,
    },
    h1: {
        fontSize: 28,
        fontWeight: "700",
        marginBottom: 16
    },
    text: {
        fontSize: 18,
        fontWeight: "400",
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
        fontWeight: '600',
    }
})
