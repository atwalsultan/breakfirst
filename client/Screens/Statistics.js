import React from "react";
import { View, Text, Button } from "react-native";
export const StatisticsScreen = () => {
  const createBottle = async () => {
    const url = `http://10.0.2.2:8080/bottles/add`;
    const response = await fetch(url); // fetch page
    const responseJsonArray = await response.json(); // get response text

    console.log(responseJsonArray);
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View>
        <Text>Statistics</Text>
        <Button title="Create" onPress={createBottle} />
      </View>
    </View>
  );
};
