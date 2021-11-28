import React from 'react'
import { Box } from 'native-base';
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function FeaturesScreen({ navigation }) {
	return (
		<Box style={styles.container} safeAreaTop>
			<Box
				style={styles.image}
			></Box>
			<Text style={styles.h1}>Wing Flap</Text>
			<Text style={styles.text}>Hold your phone in one hand. Don’t bend your elbows. Raise your arm to the side of your body.
			</Text>
			<Text style={styles.blue}>Click the button below and the app will start tracking your movements.</Text>
			<TouchableOpacity
				style={styles.exerciseButton}
				onPress={() => {
					navigation.navigate("Details")
				}}
			>
				<Text style={styles.exerciseButtonText}>Start exercise</Text>
			</TouchableOpacity>
		</Box>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 16,
		paddingBottom: 8,
		paddingTop: 68,
		flex: 1,
	},
	image: {
		height: 175,
		width: 175,
		borderRadius: 87.5,
		alignSelf: "center",
		backgroundColor: "rgba(0,0,0,0.05)",
		marginBottom: 32,
	},
	h1: {
		fontSize: 28,
		fontFamily: "josefin-bold",
		textAlign: "center",
		marginBottom: 8,
	},
	text: {
		fontSize: 18,
		fontFamily: "josefin-regular",
		textAlign: "center",
		marginBottom: 32,
	},
	blue: {
		color: '#355C97',
		fontSize: 18,
		fontFamily: "josefin-regular",
		textAlign: "center",
		marginBottom: 32,
	},
	exerciseButton: {
		backgroundColor: "#F94144",
		width: "45%",
		alignSelf: "center",
		height: 48,
		borderRadius: 24,
		alignItems: "center",
		justifyContent: "center",
	},
	exerciseButtonText: {
		color: "#FFFFFF",
		fontSize: 18,
		fontFamily: "josefin-regular",
	},

});