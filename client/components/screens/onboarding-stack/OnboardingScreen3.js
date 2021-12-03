import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { Box } from "native-base";

import { useUser } from "../../contexts/UserContext";
import ScheduleCard from "../../cards/ScheduleCard";
import ChevronLeftIcon from "../../svgs/ChevronLeftIcon";

const OnboardingScreen3 = ({ navigation }) => {
  const [selected, setSelected] = useState(true);
  const [selectedDays, setSelectedDays] = useState({
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
    sunday: false,
  });

  const { user } = useUser();
  const times = [
    "08:30 AM",
    "09:00 AM",
    "09:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "01:00 PM",
    "01:30 PM",
    "02:00 PM",
    "02:30 PM",
    "03:00 PM",
    "03:30 PM",
    "04:00 PM",
    "04:30 PM",
    "05:00 PM",
    "05:30 PM",
    "06:00 PM",
    "06:30 PM",
    "07:00 PM",
    "07:30 PM",
    "08:00 PM",
    "08:30 PM",
  ];

  const [from, setFrom] = useState(times[1]);
  const [to, setTo] = useState(times[17]);

  const checkDays = () => {
    if (
      !selectedDays.monday &&
      !selectedDays.tuesday &&
      !selectedDays.wednesday &&
      !selectedDays.thursday &&
      !selectedDays.friday &&
      !selectedDays.saturday &&
      !selectedDays.sunday
    ) {
      return true;
    }
    return false;
  };

  const createSchedule = async () => {
    if (!selected) {
      // Create weekly schedule for user
      const url = "http://3.98.75.199/app/onboarding/weekly-schedule";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({
          ...selectedDays,
          userId: user.id,
          from: from,
          to: to,
        }),
      });

      if (response.status == 200) {
        navigation.replace("AppStack");
      } else {
        const responseJsonArray = await response.json(); // Get response text
        console.log(responseJsonArray);
      }
    } else {
      navigation.replace("AppStack");
    }
  };

  return (
    <Box style={styles.container} safeAreaTop>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <ChevronLeftIcon />
      </TouchableOpacity>

      <Text style={styles.h1}>Your Schedule is:</Text>
      <Text style={styles.text}>You can change this anytime</Text>

      <ScheduleCard
        selectedDays={selectedDays}
        setSelectedDays={setSelectedDays}
        checkDays={checkDays}
        setSelected={setSelected}
        times={times}
        setFrom={setFrom}
        setTo={setTo}
        to={to}
        from={from}
      />

      <Text style={styles.or}>Or</Text>

      <TouchableWithoutFeedback
        onPress={() => {
          if (checkDays()) {
            setSelected(true);
          } else {
            setSelected(!selected);
          }
        }}
      >
        <Box
          style={[
            styles.card,
            { borderColor: selected ? "#355C97" : "transparent" },
          ]}
        >
          <Text style={styles.cardText}>
            I don't have a fixed working schedule
          </Text>
        </Box>
      </TouchableWithoutFeedback>

      <TouchableOpacity
        style={styles.startButton}
        onPress={() => {
          createSchedule();
        }}
      >
        <Text style={styles.startButtonText}>Get Started</Text>
      </TouchableOpacity>
    </Box>
  );
};

export default OnboardingScreen3;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingBottom: 24,
    paddingTop: 34,
    flex: 1,
  },
  backLink: {
    marginTop: 16,
    marginBottom: 25,
  },
  h1: {
    fontSize: 28,
    fontFamily: "josefin-bold",
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    fontFamily: "josefin-regular",
    marginBottom: 32,
    color: "rgba(20, 35, 57, 0.6)",
  },
  or: {
    fontSize: 20,
    fontFamily: "josefin-semi-bold",
    marginBottom: 8,
  },
  card: {
    marginBottom: 16,
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: "#FFFFFF",
    borderRadius: 4,
    borderWidth: 1.5,
    borderStyle: "solid",
  },
  cardText: {
    fontSize: 18,
    fontFamily: "josefin-regular",
  },
  flexEndView: {
    flexGrow: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  startButton: {
    backgroundColor: "#F94144",
    paddingVertical: 16,
    width: "45%",
    marginBottom: 60,
    marginTop: 72,
    height: 48,
    justifyContent: "center",
    borderRadius: 24,
    alignSelf: "center",
  },
  startButtonText: {
    fontSize: 18,
    fontFamily: "josefin-regular",
    textAlign: "center",
    color: "#FFFFFF",
  },
  questionNumber: {
    fontSize: 18,
    fontFamily: "josefin-semi-bold",
  },
});
