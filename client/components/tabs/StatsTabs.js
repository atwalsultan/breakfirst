import * as React from 'react';
import { StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ReportScreen from '../screens/stats-stack/ReportScreen';
import GroupStack from '../stacks/GroupStack';

const Tab = createMaterialTopTabNavigator();

const StatsTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: { borderRadius: 28 },
                tabBarIndicatorStyle: { backgroundColor: '#355C97', height: '100%', borderRadius: 28 },
                tabBarLabelStyle: { fontFamily: 'josefin-regular', textTransform: 'none', fontSize: 18 },
                tabBarActiveTintColor: '#FFFFFF',
                tabBarInactiveTintColor: 'black',
                tabBarPressColor: 'transparent'
            }}
        >
            <Tab.Screen name="Report" component={ReportScreen} options={{ tabBarLabel: "My Record" }} />
            <Tab.Screen name="Groups" component={GroupStack} options={{ tabBarLabel: "My Groups" }} />
        </Tab.Navigator>
    )
}

export default StatsTabs

const styles = StyleSheet.create({})
