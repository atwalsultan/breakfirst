import React, { useState, useEffect } from "react";
import { StyleSheet, Text, ScrollView, TouchableOpacity } from "react-native";
import { Box } from "native-base";
import { useIsFocused } from "@react-navigation/native";
import { CircularProgressWithChild } from 'react-native-circular-progress-indicator';

import { useUser } from "../../contexts/UserContext";
import HomeScreenScheduleCard from "../../cards/HomeScreenScheduleCard";
import NoScheduleCard from "../../cards/NoScheduleCard";
import HomeScreenRoutineCard from "../../cards/HomeScreenRoutineCard";
import AddIconTomatoFrog from "../../svgs/AddIconTomatoFrog";
import BreakIcon from "../../svgs/BreakIcon";

const HomeScreen = ({ navigation, schedulePushNotification }) => {
	const { user } = useUser();
	const [schedule, setSchedule] = useState(null);
	const [routines, setRoutines] = useState(null);
	const [hours, setHours] = useState(0);
	const [minutes, setMinutes] = useState(59);
	const [seconds, setSeconds] = useState(59);

	useEffect(() => {
		const interval = setInterval(() => {
			setSeconds(seconds => seconds - 1);
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		if(seconds === 0) {
			setMinutes(minutes => minutes - 1);
			setSeconds(59);

			if(minutes === 0) {
				setMinutes(59);
				setHours(hours => hours - 1);
			}
		}
	}, [seconds, minutes])

	const getSchedule = async () => {
		const url = `http://3.98.75.199/app/schedule?id=${user["id"]}`;
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
		const url = `http://3.98.75.199/app/routine/?id=${user["id"]}`;
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

			<Box style={{ backgroundColor: '#FFFFFF', padding: 32, marginBottom: 32, borderRadius: 4, maxHeight: 365 }}>
				<Box style={ [styles.graphic, {alignSelf: 'center', width: 190, overflow: 'hidden', transform: [{ rotate: "-90deg" }]}] }>
					<CircularProgressWithChild delay={500} duration={750} value={45} valueSuffix={"Keep Going"} radius={95} inActiveStrokeColor="#FFFFFF" activeStrokeColor="#355C97" textStyle={{ display: 'none' }}>
						<CircularProgressWithChild delay={750} value={40} duration={750} valueSuffix={"Keep Going"} radius={78} inActiveStrokeColor="#FFFFFF" activeStrokeColor="#FC9C9E" textStyle={{ display: 'none' }}>
						<CircularProgressWithChild delay={1000} value={50} duration={750} valueSuffix={"Keep Going"} radius={61} inActiveStrokeColor="#FFFFFF" activeStrokeColor="#F94144" textStyle={{ display: 'none' }} />
						</CircularProgressWithChild>
					</CircularProgressWithChild>
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
						<Box style={{ position: 'relative', top: 3 }}>
							<BreakIcon />
						</Box>
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
		paddingTop: 42,
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
		color: '#142339'
	},
	sittingTimes: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginBottom: 24,
		position: 'relative',
		backgroundColor: '#FFFFFF',
		paddingTop: 24,
		top: -105,
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
		position: 'relative',
		backgroundColor: '#FFFFFF',
		top: -105,
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
		width: 160,
		color: '#142339'
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
