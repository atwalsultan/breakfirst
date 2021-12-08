import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import HomeScreen from '../screens/home-tabs/HomeScreen';
import LibraryScreen from '../screens/home-tabs/LibraryScreen';
import StatsScreen from '../screens/home-tabs/StatsScreen';
import ProfileScreen from '../screens/home-tabs/ProfileScreen';

import HomeTabIcon from '../svgs/HomeTabIcon';
import HomeTabIconActive from '../svgs/HomeTabIconActive';
import ExerciseTabIcon from '../svgs/ExerciseTabIcon';
import ExerciseTabIconActive from '../svgs/ExerciseTabIconActive';
import StatsTabIcon from '../svgs/StatsTabIcon';
import StatsTabIconActive from '../svgs/StatsTabIconActive';
import ProfileTabIcon from '../svgs/ProfileTabIcon';
import ProfileTabIconActive from '../svgs/ProfileTabIconActive';

// const Tab = createBottomTabNavigator();
const Tab = createMaterialTopTabNavigator();

const HomeTabs = ({
    schedulePushNotification,
    notification,
    expoPushToken
}) => {
    return (
        <Tab.Navigator
            tabBarPosition='bottom'
            screenOptions={{
                tabBarShowLabel: false,
                tabBarShowIcon: true,
                tabBarIndicatorStyle: { backgroundColor: 'transparent' },
                tabBarPressColor: 'transparent',
                tabBarIconStyle: { position: 'relative', top: -5 }
            }}
        >
            <Tab.Screen name="Home" options={{ tabBarIcon: ({ focused }) => !focused ? <HomeTabIcon /> : <HomeTabIconActive /> }}>
                {(props) => (
                    <HomeScreen
                        {...props}
                        schedulePushNotification={schedulePushNotification}
                        notification={notification}
                        expoPushToken={expoPushToken}
                    />
                )}
            </Tab.Screen>

            <Tab.Screen name="Library" component={LibraryScreen} options={{ tabBarIcon: ({ focused }) => !focused ? <ExerciseTabIcon /> : <ExerciseTabIconActive /> }} />
            <Tab.Screen name="Stats" component={StatsScreen} options={{ tabBarIcon: ({ focused }) => !focused ? <StatsTabIcon /> : <StatsTabIconActive /> }} />
            <Tab.Screen name="Profile" component={ProfileScreen} options={{ tabBarIcon: ({ focused }) => !focused ? <ProfileTabIcon /> : <ProfileTabIconActive /> }} />
        </Tab.Navigator>
    )
}

export default HomeTabs

const styles = StyleSheet.create({})
