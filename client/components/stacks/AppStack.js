import React from 'react';
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeTabs from '../tabs/HomeTabs';
import HomeStack from './HomeStack';
import LibraryStack from './LibraryStack';
import StatsStack from './StatsStack';
import ProfileStack from './ProfileStack';

const Stack = createNativeStackNavigator();

const AppStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeTabs" component={HomeTabs} options={{headerShown: false}} />
            <Stack.Screen name="HomeStack" component={HomeStack} options={{headerShown: false}} />
            <Stack.Screen name="LibraryStack" component={LibraryStack} options={{headerShown: false}} />
            <Stack.Screen name="StatsStack" component={StatsStack} options={{headerShown: false}} />
            <Stack.Screen name="ProfileStack" component={ProfileStack} options={{headerShown: false}} />
        </Stack.Navigator>
    )
}

export default AppStack

const styles = StyleSheet.create({})
