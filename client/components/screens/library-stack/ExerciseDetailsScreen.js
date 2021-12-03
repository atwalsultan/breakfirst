import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Box } from 'native-base';

import ChevronLeftIcon from '../../svgs/ChevronLeftIcon';
import WingFlap from '../../../assets/wing-flap.gif';

const ExerciseDetailsScreen = ({ route, navigation }) => {
    const exercise = route.params.exercise;

    return (
        <Box style={styles.container} safeAreaTop>
            <TouchableOpacity 
                onPress={() => {
                    navigation.goBack();
                }}
            >
                <ChevronLeftIcon />
            </TouchableOpacity>

            <Box style={styles.exerciseImage}>
                <Image source={WingFlap} resizeMode="contain" style={{ height: undefined, width: undefined, flex: 1 }} />
            </Box>

            <Text style={styles.exerciseTitle}>{exercise.name}</Text>
            <Text style={styles.exerciseDescription}>{exercise.description}</Text>

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
        backgroundColor: '#FFFFFF'
    },
    exerciseImage: {
        height: '40%',
        backgroundColor: '#FFFFFF',
        paddingVertical: 8,
        marginBottom: 24,
    },
    exerciseTitle: {
        alignSelf: 'center',
        fontSize: 22,
        marginBottom: 16,
        fontFamily: 'josefin-semi-bold'
    },
    exerciseDescription: {
        fontSize: 16,
        fontFamily: 'josefin-regular',
        marginBottom: 40
    },
    saveButton: {
        backgroundColor: '#F94144',
        padding: 16,
        minWidth: '50%',
        alignSelf: 'center',
        borderRadius: 24
    },
    saveButtonText: {
        fontSize: 18,
        fontFamily: 'josefin-regular',
        color: '#FFFFFF',
        textAlign: 'center',
    }
})
