import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import HomeScreen from './components/screens/HomeScreen';
import LibraryScreen from './components/screens/LibraryScreen';
import StatsScreen from './components/screens/StatsScreen';
import ProfileScreen from './components/screens/ProfileScreen';
import AuthenticationStack from './components/stacks/AuthenticationStack';

const Tab = createBottomTabNavigator();
// const Tab = createMaterialBottomTabNavigator();

export default function App() {
	return (
		<NavigationContainer>
			{/* <Tab.Navigator>
				<Tab.Screen name="Home" component={HomeScreen} />
				<Tab.Screen name="Library" component={LibraryScreen} />
				<Tab.Screen name="Stats" component={StatsScreen} />
				<Tab.Screen name="Profile" component={ProfileScreen} />
			</Tab.Navigator> */}

			<AuthenticationStack />
		</NavigationContainer>
	);
}