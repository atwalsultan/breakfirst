import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Box } from 'native-base';

import ExerciseUnsavedIcon from '../svgs/ExerciseUnsavedIcon';
import ExerciseSavedIcon from '../svgs/ExerciseSavedIcon';
import WingFlap from '../../assets/wing-flap.gif';
import SayHello from '../../assets/say-hello.gif';
import StaticCat from '../../assets/static-cat.png';
import LockClosedIcon from '../svgs/LockClosedIcon';

const ExerciseCard = ({ exercise, index, navigation }) => {
    const [saved, setSaved] = useState(false)

    return (
        <Box style={[styles.exerciseCard, index % 2 !== 0 && { marginLeft: 16 }]}>
            <TouchableOpacity onPress={() => {
                if(index < 2) {
                    navigation.navigate("LibraryStack", { screen: 'ExerciseDetailsScreen', params: { exercise, index } });
                }
            }}>
                <Box style={ styles.exerciseImage }>

                    { index == 0 && <Image source={SayHello} resizeMode="contain" style={{ height: undefined, width: undefined, flex: 1 }} />}
                    { index == 1 && <Image source={WingFlap} resizeMode="contain" style={{ height: undefined, width: undefined, flex: 1 }} />}
                    { index > 1 && <Image source={StaticCat} resizeMode="contain" style={{ height: undefined, width: undefined, flex: 1 }} />}

                    {
                        index > 1 && 
                        <Box style={ styles.lockedExerciseTextContainer }>
                            <Text style={ styles.lockedExerciseText }>Earn { index * 10 } points to unlock this exercise.</Text>
                        </Box>
                    }
                </Box>
                <Box style={ styles.exerciseInfo }>
                    <Box>
                        <Text style={ styles.exerciseName }>{ exercise.name }</Text>
                        <Text style={ styles.time }>1 min approx.</Text>
                    </Box>

                    { index < 2 ?
                        <TouchableOpacity onPress={ () => setSaved(!saved) }>
                            { !saved ? <ExerciseUnsavedIcon /> : <ExerciseSavedIcon />}
                        </TouchableOpacity>
                        :
                        <LockClosedIcon />
                    }
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
        marginBottom: 12,
        justifyContent: 'center'
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
    },
    lockedExerciseTextContainer: {
        position: 'absolute',
        height: '100%',
        justifyContent: 'center',
        backgroundColor: 'rgba(256, 256, 256, 0.95)'
    },
    lockedExerciseText: {
        fontSize: 14,
        fontFamily: 'josefin-regular',
        color: '#1B2F4D',
        textAlign: 'center'
    }
})
