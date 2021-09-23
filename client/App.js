import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
	// Fetch products
	const fetchTests = async () => {
		const url = `http://10.0.2.2:8080/api/tests`;
		const response = await fetch(url);   // fetch page
		const responseJsonArray = await response.json();  // get response text

		// Create output
		responseJsonArray.map(test => {
			console.log(`Name: ${test.name}`);
			console.log(`Description: ${test.description}`);
		});
	}

	return (
		<View style={styles.container}>
			<Button title="Press" onPress={fetchTests} />
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
