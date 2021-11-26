import React, { useState, useRef, useEffect } from 'react'
import { Box } from 'native-base';
import { StyleSheet, Text, TouchableOpacity} from "react-native";
import { DeviceMotion } from 'expo-sensors';

import ExerciseCompleteModal from '../../modals/ExerciseCompleteModal';

export default function DetailsScreen({ navigation }) {
	const [finished, setFinished] = useState(false);

	const [value, _setValue] = useState(0);
	const [reps, _setReps] = useState(0);

	const valueRef = useRef(value);
	valueRef.current = value;
	const setValue = (data) => {
		valueRef.current = data;
		_setValue(data);
	}

	const repsRef = useRef(reps);
	repsRef.current = reps;
	const setReps = (data) => {
		repsRef.current = data;
		_setReps(data);
	}

	const subscribe = () => {
		setValue(0)
		DeviceMotion.addListener((devicemotionData) => {
			if (devicemotionData.acceleration.y < -6 && valueRef.current - devicemotionData.acceleration.y >= 2) {
				if(repsRef.current >= 5) {
					unsubscribe();
					setFinished(true);
				}
				else {
					setReps(repsRef.current + 1);
				}
			}
			setValue(devicemotionData.acceleration.y);
		});

		DeviceMotion.setUpdateInterval(500);
	}

	const unsubscribe = () => {
		DeviceMotion.removeAllListeners();
	}

	useEffect(() => {
		subscribe();
	}, [])

	return (
		<>
			<Box style={styles.container} safeAreaTop>
				<TouchableOpacity
					onPress={() => {
						unsubscribe();
						navigation.navigate("Home");
					}}
				>
					<Text style={styles.rightText}>Skip</Text>
				</TouchableOpacity>
				<Box
					style={styles.image}
				></Box>
				<Text style={styles.h1}>{reps}</Text>
				<Box
					style={styles.image}
				></Box>
			</Box>

			{finished && <ExerciseCompleteModal setFinished={setFinished} navigation={navigation} />}
		</>

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
	rightText: {
		fontSize: 16,
		fontFamily: "josefin-regular",
		textAlign: "right",

	},

});