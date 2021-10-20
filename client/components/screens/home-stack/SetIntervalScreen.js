import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Box } from 'native-base';

const SetIntervalScreen = ({ navigation }) => {
    return (
        <Box style={styles.container} safeAreaTop>
            <Box style={styles.header}>
                <Text style={styles.backLink} onPress={() => {
                    navigation.goBack();
                }}>
                    Back
                </Text>
                <Text style={styles.heading}>Interval</Text>
            </Box>

            <TouchableOpacity>
                <Box style={styles.card}>
                    <Text style={styles.cardTitle}>30 mins</Text>
                </Box>
            </TouchableOpacity>

            <TouchableOpacity>
                <Box style={styles.card}>
                    <Text style={styles.cardTitle}>45 mins</Text>
                </Box>
            </TouchableOpacity>

            <TouchableOpacity>
                <Box style={styles.card}>
                    <Text style={styles.cardTitle}>60 mins</Text>
                </Box>
            </TouchableOpacity>

            <TouchableOpacity>
                <Box style={styles.card}>
                    <Text style={styles.cardTitle}>Decide for me</Text>
                </Box>
            </TouchableOpacity>
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
        marginBottom: 24
    },
    backLink: {
        fontSize: 18,
        fontWeight: '400',
        position: 'absolute',
        left: 0,
    },
    heading: {
        fontSize: 20,
        fontWeight: '600',
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
})
