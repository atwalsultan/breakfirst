import React from 'react';
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ChangeRoutineScreen from '../screens/home-stack/ChangeRoutineScreen';
import SetReminderScreen from '../screens/home-stack/SetReminderScreen';
import SetIntervalScreen from '../screens/home-stack/SetIntervalScreen';
import ChangeScheduleScreen from '../screens/home-stack/ChangeScheduleScreen';
import SetLabelScreen from '../screens/home-stack/SetLabelScreen';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="ChangeRoutineScreen" component={ChangeRoutineScreen} options={{headerShown: false}} />
            <Stack.Screen name="SetLabelScreen" component={SetLabelScreen} options={{headerShown: false}} />
            <Stack.Screen name="ChangeScheduleScreen" component={ChangeScheduleScreen} options={{headerShown: false}} />
            <Stack.Screen name="SetReminderScreen" component={SetReminderScreen} options={{headerShown: false}} />
            <Stack.Screen name="SetIntervalScreen" component={SetIntervalScreen} options={{headerShown: false}} />
        </Stack.Navigator>
    )
}

export default HomeStack

const styles = StyleSheet.create({})
