import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Box } from 'native-base';
import { Entypo } from '@expo/vector-icons';

const SetIntervalScreen = ({ navigation }) => {
    return (
        <Box style={styles.container} safeAreaTop>
            <Box style={styles.header}>
                <TouchableOpacity style={styles.backLink} onPress={() => {
                    navigation.goBack();
                }}>
                    <Entypo name="chevron-left" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.heading}>Interval</Text>
            </Box>

            <TouchableOpacity onPress={() => {
                navigation.goBack();
            }}>
                <Box style={styles.card}>
                    <Text style={styles.cardTitle}>30 mins</Text>
                </Box>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
                navigation.goBack();
            }}>
                <Box style={styles.card}>
                    <Text style={styles.cardTitle}>45 mins</Text>
                </Box>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
                navigation.goBack();
            }}>
                <Box style={styles.card}>
                    <Text style={styles.cardTitle}>60 mins</Text>
                </Box>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
                navigation.goBack();
            }}>
                <Box style={styles.card}>
                    <Text style={styles.cardTitle}>Decide for me</Text>
                </Box>
            </TouchableOpacity>

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
        justifyContent: 'center',
        marginBottom: 16
    },
    backLink: {
        position: 'absolute',
        left: 0,
    },
    heading: {
        fontSize: 20,
        fontFamily: 'josefin-semi-bold'
    },
    card: {
        paddingHorizontal: 16,
        paddingBottom: 10,
        paddingTop: 13,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
        borderRadius: 4
    },
    cardTitle: {
        fontSize: 18,
        fontFamily: 'josefin-regular'
    },
    text: {
        fontSize: 15,
        color: 'rgba(20, 35, 57, 0.6)',
        fontFamily: 'josefin-regular'
    }
})
