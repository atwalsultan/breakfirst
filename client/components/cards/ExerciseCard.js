import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Box } from 'native-base';

const ExerciseCard = ({ exercise, index, navigation }) => {
    return (
        <Box style={[styles.exerciseCard, index % 2 !== 0 && { marginLeft: 16 }]}>
            <TouchableOpacity onPress={() => {
                navigation.navigate("LibraryStack", { screen: 'ExerciseDetailsScreen', params: { exercise } });
            }}>
                <Box style={styles.savedExerciseMarker}></Box>
                <Box style={styles.exerciseImage}></Box>
                <Text style={styles.exerciseName}>{exercise.name}</Text>
            </TouchableOpacity>
        </Box>
    )
}

export default ExerciseCard

const styles = StyleSheet.create({
    exerciseCard: {
        padding: 12,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.06)',
        width: '46%',
        marginBottom: 16
    },
    exerciseImage: {
        height: 125,
        width: '100%',
        flexGrow: 1,
        backgroundColor: 'rgba(0,0,0,0.1)',
        marginBottom: 12
    },
    savedExerciseMarker: {
        height: 28,
        width: 28,
        borderRadius: 14,
        backgroundColor: '#ABABAB',
        position: 'absolute',
        right: 8,
        top: 8,
    },
    exerciseName: {
        fontSize: 16,
        fontWeight: '400'
    },
})
