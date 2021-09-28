import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
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

	const createBottle = async () => {
		const url = `http://10.0.2.2:8080/bottles/add`;
		const response = await fetch(url);   // fetch page
		const responseJsonArray = await response.json();  // get response text

		console.log(responseJsonArray);
	}

	return (
		<View style={styles.container}>
			<Button title="Create" onPress={createBottle} />
			<Button title="Read" onPress={fetchBottles} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
