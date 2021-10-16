import React from 'react';
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FactsScreen from '../screens/library-stack/FactsScreen';
import ExerciseDetailsScreen from '../screens/library-stack/ExerciseDetailsScreen';

const Stack = createNativeStackNavigator();

const LibraryStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="ExerciseDetailsScreen" component={ExerciseDetailsScreen} options={{headerShown: false}} />
            <Stack.Screen name="FactsScreen" component={FactsScreen} options={{headerShown: false}} />
        </Stack.Navigator>
    )
}

export default LibraryStack

const styles = StyleSheet.create({})
