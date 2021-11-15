import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  Switch,
} from "react-native";
import { Box, Button } from "native-base";
import { useIsFocused } from "@react-navigation/native";

import { useUser } from "../../contexts/UserContext";
import HomeScreenScheduleCard from "../../cards/HomeScreenScheduleCard";
import NoScheduleCard from "../../cards/NoScheduleCard";
import HomeScreenRoutineCard from "../../cards/HomeScreenRoutineCard";
import AddIconTomatoFrog from "../../svgs/AddIconTomatoFrog";

const HomeScreen = ({ navigation }) => {
  const { user } = useUser();
  const [schedule, setSchedule] = useState(null);
  const [routines, setRoutines] = useState(null);

  const getSchedule = async () => {
    const url = `http://192.168.1.79:8080/app/schedule?id=${user["id"]}`;
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
    const url = `http://192.168.1.79:8080/app/routine/?id=${user["id"]}`;
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
        <Text style={styles.heading}>Today's sitting time</Text>

        <Box style={styles.graphic}></Box>

        <Box style={styles.sittingTimes}>
          <Box style={styles.sittingTime}>
            <Box style={styles.marker}></Box>
            <Text style={styles.sittingTimeLabel}>Sitting time</Text>
            <Text style={styles.sittingTimeText}>6 hr 35 min</Text>
          </Box>
          <Box style={styles.sittingTime}>
            <Box style={styles.marker}></Box>
            <Text style={styles.sittingTimeLabel}>Medium risk</Text>
            <Text style={styles.sittingTimeText}>6 - 8 hrs</Text>
          </Box>
          <Box style={styles.sittingTime}>
            <Box style={styles.marker}></Box>
            <Text style={styles.sittingTimeLabel}>High risk</Text>
            <Text style={styles.sittingTimeText}>Over 8 hrs</Text>
          </Box>
        </Box>

        <Box style={styles.nextBreak}>
          <Text style={styles.nextBreakLabel}>Next break in:</Text>
          <Box style={styles.nextBreakTime}>
            <Box style={styles.nextBreakMarker}></Box>
            <Text style={styles.nextBreakTimeText}>00 : 45 : 38</Text>
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

          <TouchableOpacity
            style={styles.confirmButton}
            onPress={() =>
              navigation.navigate("AppStack", { screen: "ExerciseStack" })
            }
          >
            <Text style={styles.confirmButtonText}>Schedule a Task</Text>
          </TouchableOpacity>
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
  graphic: {
    height: 120,
    width: 120,
    borderRadius: 60,
    backgroundColor: "rgba(0,0,0,0.2)",
    alignSelf: "center",
    marginBottom: 35,
  },
  sittingTimes: {
    alignSelf: "center",
    marginBottom: 24,
  },
  sittingTime: {
    flexDirection: "row",
    alignItems: "center",
  },
  marker: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: "rgba(0,0,0,0.5)",
    marginRight: 8,
  },
  sittingTimeLabel: {
    fontSize: 16,
    fontFamily: "josefin-regular",
    color: "rgba(0,0,0,0.6)",
  },
  sittingTimeText: {
    fontSize: 16,
    fontFamily: "josefin-regular",
    marginLeft: 24,
  },
  nextBreak: {
    marginBottom: 40,
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
  nextBreakMarker: {
    height: 24,
    width: 24,
    borderRadius: 12,
    backgroundColor: "#ABABAB",
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
