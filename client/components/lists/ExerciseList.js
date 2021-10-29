import * as React from 'react';
import { StyleSheet } from 'react-native';

import ExerciseCard from '../cards/ExerciseCard';

const ExerciseList = ({ navigation }) => {
    const exerciseList = [
        {
            "name": "Neck saver",
            "description": "Lorem ipsum dolor sit amet lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
            "image": ""
        },
        {
            "name": "Say hello",
            "description": "Lorem ipsum dolor sit amet lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
            "image": ""
        },
        {
            "name": "Wing flap",
            "description": "Lorem ipsum dolor sit amet lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
            "image": ""
        },
        {
            "name": "Bike throttle",
            "description": "Lorem ipsum dolor sit amet lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
            "image": ""
        },
        {
            "name": "Arm rotation",
            "description": "Lorem ipsum dolor sit amet lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
            "image": ""
        },
        {
            "name": "Wrist rotation",
            "description": "Lorem ipsum dolor sit amet lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
            "image": ""
        },
    ]

    return (
        exerciseList.map((exercise, index) => (
            <ExerciseCard exercise={exercise} index={index} navigation={navigation} key={index} />
        ))
    )
}

export default ExerciseList

const styles = StyleSheet.create({
})
