import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';

import ExerciseCard from '../cards/ExerciseCard';

const ExerciseList = ({ navigation }) => {
    const [exercises, setExercises] = useState([]);

    const getExercises = async () => {
        const url = 'http://192.168.1.92:8080/exercises';
        const response = await fetch(url);   // Fetch page
		const responseJsonArray = await response.json();  // Get response text

        setExercises(responseJsonArray);
    }

    useEffect(() => {
        getExercises();
    }, [])

    return (
        exercises.map((exercise, index) => (
            <ExerciseCard exercise={exercise} index={index} navigation={navigation} key={index} />
        ))
    )
}

export default ExerciseList

const styles = StyleSheet.create({
})
