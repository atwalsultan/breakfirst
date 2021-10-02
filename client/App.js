import React from 'react';
import { View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function HomeScreen() {
	// Fetch documents
	const fetchBottles = async () => {
		const url = `http://10.0.2.2:8080/bottles`;
		const response = await fetch(url);   // fetch page
		const responseJsonArray = await response.json();  // get response text

		// Create output
		responseJsonArray.map(bottle => {
			console.log(bottle);
		});
	}

	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<View>
				<Button title="Read" onPress={fetchBottles} />
			</View>
		</View>
	);
}

function SettingsScreen() {
	const createBottle = async () => {
		const url = `http://10.0.2.2:8080/bottles/add`;
		const response = await fetch(url);   // fetch page
		const responseJsonArray = await response.json();  // get response text

		console.log(responseJsonArray);
	}

	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<View>
				<Button title="Create" onPress={createBottle} />
			</View>
		</View>
	);
}

function ThirdScreen() {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<View>
				<Button title="Third Screen" />
			</View>
		</View>
	);
}

function FourthScreen() {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<View>
				<Button title="Fourth Screen" />
			</View>
		</View>
	);
}

const Tab = createBottomTabNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Tab.Navigator>
				<Tab.Screen name="Home" component={HomeScreen} />
				<Tab.Screen name="Settings" component={SettingsScreen} />
				<Tab.Screen name="Third" component={ThirdScreen} />
				<Tab.Screen name="Fourth" component={FourthScreen} />
			</Tab.Navigator>
		</NavigationContainer>
	);
}
