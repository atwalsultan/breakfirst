import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Box } from 'native-base';
import { alignSelf } from 'styled-system';

const ExerciseDetailsScreen = ({ navigation }) => {
    return (
        <Box style={styles.container} safeAreaTop>
            <TouchableOpacity onPress={() => {
                navigation.goBack();
            }}>
                <Text style={styles.backLink}>Back</Text>
            </TouchableOpacity>

            <Box style={styles.exerciseImage}></Box>

            <Text style={styles.exerciseTitle}>Save the neck</Text>
            <Text style={styles.exerciseDescription}>Please follow the cat to relax your neck and back. Click the button below to add this exercise to your collection.</Text>

            <TouchableOpacity style={styles.saveButton} onPress={() => {
                navigation.goBack();
            }}>
                <Text style={styles.saveButtonText}>Add to collection</Text>
            </TouchableOpacity>
        </Box>
    )
}

export default ExerciseDetailsScreen

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingTop: 34,
        flex: 1,
    },
    backLink: {
        fontSize: 18,
        fontWeight: '400',
        marginBottom: 16
    },
    exerciseImage: {
        height: '50%',
        backgroundColor: 'rgba(0,0,0,0.06)',
        marginBottom: 24,
    },
    exerciseTitle: {
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 16
    },
    exerciseDescription: {
        fontSize: 16,
        fontWeight: '400',
        marginBottom: 58
    },
    saveButton: {
        backgroundColor: 'rgba(0,0,0,0.1)',
        padding: 16,
        minWidth: '50%',
        alignSelf: 'center',
    },
    saveButtonText: {
        fontSize: 18,
        fontWeight: '400',
        textAlign: 'center',
    }
})
