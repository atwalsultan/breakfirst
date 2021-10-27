import React from 'react';
import { StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import PreventionScreen from '../screens/library-stack/PreventionScreen';
import SedentaryFactsScreen from '../screens/library-stack/SedentaryFactsScreen';

const Tab = createMaterialTopTabNavigator();

const FactsTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarIndicatorStyle: { backgroundColor: 'rgba(0,0,0,0.1)', height: '100%' },
            }}
        >
            <Tab.Screen name="Sedentary" component={SedentaryFactsScreen} options={{ tabBarLabel: "Facts" }} />
            <Tab.Screen name="Prevention" component={PreventionScreen} options={{ tabBarLabel: "Prevention" }} />
        </Tab.Navigator>
    )
}

export default FactsTabs

const styles = StyleSheet.create({})
