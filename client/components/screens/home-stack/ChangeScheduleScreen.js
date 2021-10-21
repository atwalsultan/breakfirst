import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Box } from 'native-base';

const ChangeScheduleScreen = ({ navigation }) => {
    return (
        <Box style={styles.container} safeAreaTop>
            <Box style={styles.header}>
                <TouchableOpacity style={styles.backLink} onPress={() => {
                    navigation.goBack();
                }}>
                    <Text style={styles.backLinkText}>Cancel</Text>
                </TouchableOpacity>
                <Text style={styles.heading}>My Schedule</Text>
            </Box>

            <Box style={styles.times}></Box>

            <TouchableOpacity>
                <Box style={styles.card}>
                    <Text style={styles.cardTitle}>Label</Text>
                    <Text style={styles.cardText}>My task</Text>
                </Box>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('SetIntervalScreen')}>
                <Box style={styles.card}>
                    <Text style={styles.cardTitle}>Interval</Text>
                    <Text style={styles.cardText}>30 mins</Text>
                </Box>
            </TouchableOpacity>

            <TouchableOpacity>
                <Box style={styles.card}>
                    <Text style={styles.cardTitle}>Sound</Text>
                    <Text style={styles.cardText}>Lazy Day</Text>
                </Box>
            </TouchableOpacity>

            <TouchableOpacity>
                <Box style={styles.card}>
                    <Text style={styles.cardTitle}>Silent Mode</Text>
                    <Text style={styles.cardText}>PH</Text>
                </Box>
            </TouchableOpacity>

            <TouchableOpacity style={styles.nextButton} onPress={() => {
                navigation.goBack();
            }}>
                <Text style={styles.nextButtonText}>Save</Text>
            </TouchableOpacity>
        </Box>
    )
}

export default ChangeScheduleScreen

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
        marginBottom: 24
    },
    backLink: {
        position: 'absolute',
        left: 0,
    },
    backLinkText: {
        fontSize: 18,
        fontWeight: '400',
    },
    heading: {
        fontSize: 20,
        fontWeight: '600',
    },
    times: {
        height: '27%',
        backgroundColor: 'rgba(0,0,0,0.04)',
    },
    card: {
        paddingHorizontal: 16,
        paddingBottom: 10,
        paddingTop: 13,
        backgroundColor: 'rgba(0,0,0,0.05)',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 16
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: '400',
    },
    cardText: {
        color: 'rgba(0,0,0,0.45)',
    },
    nextButton: {
        backgroundColor: 'rgba(0,0,0,0.1)',
        paddingVertical: 16,
        width: '45%',
        alignSelf: 'center',
        marginTop: 72
    },
    nextButtonText: {
        fontSize: 18,
        fontWeight: '400',
        textAlign: 'center',
    }
})