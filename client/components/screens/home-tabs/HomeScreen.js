import React, { useState, useEffect } from "react";
import { StyleSheet, Text, ScrollView, TouchableOpacity } from "react-native";
import { Box } from "native-base";
import { useIsFocused } from "@react-navigation/native";

import { useUser } from "../../contexts/UserContext";
import HomeScreenScheduleCard from "../../cards/HomeScreenScheduleCard";
import NoScheduleCard from "../../cards/NoScheduleCard";
import HomeScreenRoutineCard from "../../cards/HomeScreenRoutineCard";
import AddIconTomatoFrog from "../../svgs/AddIconTomatoFrog";
import BreakIcon from "../../svgs/BreakIcon";
import HomeScreenGraphic from "../../svgs/HomeScreenGraphic";

const HomeScreen = ({ navigation, schedulePushNotification }) => {
	const { user } = useUser();
	const [schedule, setSchedule] = useState(null);
	const [routines, setRoutines] = useState(null);
	const [hours, setHours] = useState(1);
	const [minutes, setMinutes] = useState(45);
	const [seconds, setSeconds] = useState(8);

	useEffect(() => {
		const interval = setInterval(() => {
			setSeconds(seconds => seconds - 1);
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		if(seconds === 0) {
			setMinutes(minutes => minutes - 1);
			setSeconds(60);

			if(minutes === 0) {
				setMinutes(59);
				setHours(hours => hours - 1);
			}
		}
	}, [seconds, minutes])

	const getSchedule = async () => {
		const url = `http://192.168.1.92:8080/app/schedule?id=${user["id"]}`;
		const response = await fetch(url, {
			method: "GET",
			headers: {
				authorization: `Bearer ${user.token}`,
			},
		});

		if (response.status == 200) {
			const responseJson = await response.json();
			setSchedule(responseJson);
		} else {
			const responseJson = await response.json();
			console.log(responseJson);
		}
	};

	const getRoutines = async () => {
		const url = `http://192.168.1.92:8080/app/routine/?id=${user["id"]}`;
		const response = await fetch(url, {
			method: "GET",
			headers: {
				authorization: `Bearer ${user.token}`,
			},
		});

		if (response.status == 200) {
			const responseJson = await response.json();
			setRoutines(responseJson);
		} else {
			const responseJson = await response.json();
			console.log(responseJson);
		}
	};

	const isFocused = useIsFocused();
	useEffect(() => {
		getSchedule();
		getRoutines();
	}, [isFocused]);

	return (
		<Box style={styles.container} safeAreaTop>
			<ScrollView style={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
				<TouchableOpacity onPress={async () => await schedulePushNotification()}>
					<Text style={styles.heading}>Today's sitting time</Text>
				</TouchableOpacity>

			<Box style={{ backgroundColor: '#FFFFFF', padding: 32, marginBottom: 32 }}>
				<Box style={ styles.graphic }>
					<HomeScreenGraphic/>
				</Box>
				<Box style={styles.sittingTimes}>
					<Box style={styles.sittingTime}>
						<Box style={[styles.marker, { backgroundColor: '#355C97' }]}></Box>
						<Text style={styles.sittingTimeLabel}>Sitting</Text>
						<Text style={styles.sittingTimeText}>6 H 30 M</Text>
					</Box>
					<Box style={[styles.sittingTime, {marginHorizontal: 32}]}>
						<Box style={[styles.marker, { backgroundColor: '#FC9C9E' }]}></Box>
						<Text style={styles.sittingTimeLabel}>Med risk</Text>
						<Text style={styles.sittingTimeText}>6 - 8 H</Text>
					</Box>
					<Box style={styles.sittingTime}>
						<Box style={[styles.marker, { backgroundColor: '#F94144' }]}></Box>
						<Text style={styles.sittingTimeLabel}>High risk</Text>
						<Text style={styles.sittingTimeText}>&gt; 8 H</Text>
					</Box>
				</Box>

				<Box style={[styles.nextBreak]}>
					<Text style={styles.nextBreakLabel}>Next break in:</Text>
					<Box style={styles.nextBreakTime}>
						<BreakIcon />
						<Text style={styles.nextBreakTimeText}>{hours < 10 ? `0${hours}` : hours} : {minutes < 10 ? `0${minutes}` : minutes} : {seconds < 10 ? `0${seconds}` : seconds}</Text>
					</Box>
				</Box>
			</Box>

				{schedule ? (
					<HomeScreenScheduleCard
						schedule={schedule}
						navigation={navigation}
						user={user}
					/>
				) : (
					<NoScheduleCard />
				)}

				<Box style={styles.mySchedules}>
					<Text style={styles.mySchedulesHeading}>My task schedules</Text>

					<TouchableOpacity
						onPress={() => {
							navigation.navigate("HomeStack", { screen: "SetReminderScreen" });
						}}
					>
						<Box style={styles.newTaskSchedule}>
							<Text style={styles.newTaskScheduleText}>New task schedule</Text>
							<AddIconTomatoFrog />
						</Box>
					</TouchableOpacity>

					<Box style={styles.routines}>
						{routines &&
							routines.map((routine) => (
								<HomeScreenRoutineCard
									navigation={navigation}
									routine={routine}
									user={user}
									key={routine._id}
								/>
							))}
					</Box>
				</Box>
			</ScrollView>
		</Box>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 16,
		paddingTop: 34,
		flex: 1,
	},
	graphic: {
		alignItems: 'center',
		marginBottom: 24
	},
	confirmButtonText: {
		color: "#FFFFFF",
		fontSize: 18,
		fontFamily: "josefin-regular",
	},
	confirmButton: {
		backgroundColor: "#F94144",
		paddingVertical: 16,
		width: "45%",
		alignSelf: "center",
		height: 48,
		borderRadius: 24,
		alignItems: "center",
		justifyContent: "center",
	},
	heading: {
		fontSize: 25,
		fontFamily: "josefin-semi-bold",
		marginBottom: 24,
	},
	sittingTimes: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginBottom: 24,
	},
	sittingTime: {
		alignItems: 'center'
	},
	marker: {
		height: 16,
		width: 16,
		borderRadius: 8,
		marginBottom: 8
	},
	sittingTimeLabel: {
		fontSize: 16,
		fontFamily: "josefin-regular",
		color: "rgba(0,0,0,0.6)",
	},
	sittingTimeText: {
		fontSize: 16,
		fontFamily: "josefin-regular",
		color: '#142339'
	},
	nextBreak: {
		alignSelf: "center",
		alignItems: "center",
	},
	nextBreakLabel: {
		fontSize: 14,
		fontFamily: "josefin-regular",
		color: "rgba(0,0,0,0.6)",
		marginBottom: 8,
	},
	nextBreakTime: {
		flexDirection: "row",
		alignItems: "center",
	},
	nextBreakTimeText: {
		fontSize: 28,
		fontFamily: "josefin-regular",
		marginLeft: 8,
	},
	mySchedules: {},
	mySchedulesHeading: {
		fontSize: 22,
		fontFamily: "josefin-semi-bold",
		marginBottom: 16,
	},
	newTaskSchedule: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		paddingHorizontal: 16,
		paddingVertical: 12,
		backgroundColor: "#FFFFFF",
		marginBottom: 16,
		borderRadius: 4,
	},
	newTaskScheduleText: {
		fontSize: 18,
		fontFamily: "josefin-regular",
	},
	routines: {},
});
