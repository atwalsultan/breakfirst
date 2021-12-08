import React from 'react'
import { Box } from 'native-base';
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

import WingFlap from '../../../assets/wing-flap.gif';

export default function FeaturesScreen({ navigation }) {
	return (
		<Box style={styles.container} safeAreaTop>
			<Box style={styles.image}>
				<Image source={WingFlap} resizeMode="contain" style={{ height: undefined, width: undefined, flex: 1 }} />
			</Box>
			<Text style={styles.h1}>Wing Flap</Text>
			<Text style={styles.text}>Hold your phone in one hand. Don’t bend your elbows. Raise your arms to the side of your body.</Text>
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
		backgroundColor: '#FFFFFF'
	},
	image: {
		height: "40%",
		backgroundColor: "#FFFFFF",
		marginBottom: 32,
		paddingVertical: 8
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
		marginBottom: 32,
	},
	blue: {
		color: '#355C97',
		fontSize: 18,
		fontFamily: "josefin-regular",
		marginBottom: 32,
	},
	exerciseButton: {
		backgroundColor: "#F94144",
		height: 48,
        justifyContent: "center",
        width: "48%",
        alignSelf: "center",
        borderRadius: 24,
        marginBottom: 24,
	},
	exerciseButtonText: {
		color: "#FFFFFF",
		fontSize: 18,
		fontFamily: "josefin-regular",
		textAlign: 'center',
		position: 'relative',
		top: -2
	},

});