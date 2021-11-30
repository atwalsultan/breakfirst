import React, { useState, useRef, useEffect } from 'react'
import { Box } from 'native-base';
import { StyleSheet, Text, TouchableOpacity} from "react-native";
import { DeviceMotion } from 'expo-sensors';
import CircularProgress from 'react-native-circular-progress-indicator';

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

				<Box style={ styles.screenContent }>
					<Box style={ styles.image }></Box>

					<Text style={ styles.h1 }>Wing Flap</Text>

					<CircularProgress 
						value={reps * 20}
						textStyle={{ display: 'none' }} 
						activeStrokeColor="#0CD9B4" 
						inActiveStrokeColor="#C4C4C4" 
						title={ reps < 1 ? "Start!" : "Keep going!"} 
						titleColor="#142339" 
						titleFontSize={18} 
						titleStyle={{ fontFamily: 'josefin-regular' }} 
						radius={85} 
					/>
				</Box>
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
	rightText: {
		fontSize: 16,
		fontFamily: "josefin-regular",
		textAlign: "right",

	},
	screenContent: {
		alignItems: 'center',
		marginTop: 24
	},
	image: {
		height: 275,
		width: '100%',
		backgroundColor: 'rgba(0,0,0,0.1)',
		marginBottom: 48
	},
	h1: {
		fontSize: 22,
		fontFamily: 'josefin-semi-bold',
		marginBottom: 52
	}
});