import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Box } from 'native-base';

import ExerciseUnsavedIcon from '../svgs/ExerciseUnsavedIcon';
import ExerciseSavedIcon from '../svgs/ExerciseSavedIcon';

const ExerciseCard = ({ exercise, index, navigation }) => {
    const [saved, setSaved] = useState(false)

    return (
        <Box style={[styles.exerciseCard, index % 2 !== 0 && { marginLeft: 16 }]}>
            <TouchableOpacity onPress={() => {
                navigation.navigate("LibraryStack", { screen: 'ExerciseDetailsScreen', params: { exercise } });
            }}>
                <Box style={ styles.exerciseImage }></Box>
                <Box style={ styles.exerciseInfo }>
                    <Box>
                        <Text style={ styles.exerciseName }>{ exercise.name }</Text>
                        <Text style={ styles.time }>1 min approx.</Text>
                    </Box>

                    <TouchableOpacity onPress={ () => setSaved(!saved) }>
                        { !saved ? <ExerciseUnsavedIcon /> : <ExerciseSavedIcon />}
                    </TouchableOpacity>
                </Box>
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
        backgroundColor: '#FFFFFF',
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
    exerciseInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    savedExerciseMarker: {
        height: 24,
        width: 24,
        borderRadius: 12,
        borderWidth: 1,
    },
    exerciseName: {
        fontSize: 16,
        fontFamily: 'josefin-regular',
    },
    time: {
        fontSize: 14,
        fontFamily: 'josefin-regular',
        color: 'rgba(20, 35, 57, 0.6)'
    }
})
