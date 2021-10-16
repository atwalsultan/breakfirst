import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/home-tabs/HomeScreen';
import LibraryScreen from '../screens/home-tabs/LibraryScreen';
import StatsScreen from '../screens/home-tabs/StatsScreen';
import ProfileScreen from '../screens/home-tabs/ProfileScreen';

const Tab = createBottomTabNavigator();

const HomeTabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Library" component={LibraryScreen} />
            <Tab.Screen name="Stats" component={StatsScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    )
}

export default HomeTabs

const styles = StyleSheet.create({})
