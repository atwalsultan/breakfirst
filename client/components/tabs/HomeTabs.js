import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Box } from 'native-base';

import HomeScreen from '../screens/home-tabs/HomeScreen';
import LibraryScreen from '../screens/home-tabs/LibraryScreen';
import StatsScreen from '../screens/home-tabs/StatsScreen';
import ProfileScreen from '../screens/home-tabs/ProfileScreen';

// const Tab = createBottomTabNavigator();
const Tab = createMaterialTopTabNavigator();

const HomeTabs = () => {
    return (
        <Tab.Navigator tabBarPosition='bottom' screenOptions={{
            tabBarShowLabel: false,
            tabBarShowIcon: true,
            tabBarIndicatorStyle: {backgroundColor: 'transparent'},
        }}>
            <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarIcon: () => <Box style={{height: 24, width: 24, backgroundColor: 'gray', borderRadius: 12}}></Box> }}/>
            <Tab.Screen name="Library" component={LibraryScreen} options={{ tabBarIcon: () => <Box style={{height: 24, width: 24, backgroundColor: 'gray', borderRadius: 12}}></Box> }} />
            <Tab.Screen name="Stats" component={StatsScreen} options={{ tabBarIcon: () => <Box style={{height: 24, width: 24, backgroundColor: 'gray', borderRadius: 12}}></Box> }} />
            <Tab.Screen name="Profile" component={ProfileScreen} options={{ tabBarIcon: () => <Box style={{height: 24, width: 24, backgroundColor: 'gray', borderRadius: 12}}></Box> }} />
        </Tab.Navigator>
    )
}

export default HomeTabs

const styles = StyleSheet.create({})
