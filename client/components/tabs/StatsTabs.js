import * as React from 'react';
import { StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ReportScreen from '../screens/stats-stack/ReportScreen';
import GroupScreen from '../screens/stats-stack/GroupScreen';

const Tab = createMaterialTopTabNavigator();

const StatsTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarIndicatorStyle: { backgroundColor: 'rgba(0,0,0,0.1)', height: '100%' },
            }}
        >
            <Tab.Screen name="Report" component={ReportScreen} options={{ tabBarLabel: "My Report" }} />
            <Tab.Screen name="Group" component={GroupScreen} options={{ tabBarLabel: "My Groups" }} />
        </Tab.Navigator>
    )
}

export default StatsTabs

const styles = StyleSheet.create({})
