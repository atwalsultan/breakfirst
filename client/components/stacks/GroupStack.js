import React from 'react';
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import GroupScreen from '../screens/stats-stack/GroupScreen';
import LeaderboardScreen from '../screens/stats-stack/LeaderboardScreen';

const Stack = createNativeStackNavigator();

const GroupStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="GroupScreen" component={GroupScreen} options={{ headerShown: false }} />
            <Stack.Screen name="LeaderboardScreen" component={LeaderboardScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default GroupStack

const styles = StyleSheet.create({})
