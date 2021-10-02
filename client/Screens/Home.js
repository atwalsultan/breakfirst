import React from "react";
import { View, Text, Button } from "react-native";
export const HomeScreen = () => {
  // Fetch documents
  const fetchBottles = async () => {
    const url = `http://10.0.2.2:8080/bottles`;
    const response = await fetch(url); // fetch page
    const responseJsonArray = await response.json(); // get response text

    // Create output
    responseJsonArray.map((bottle) => {
      console.log(bottle);
    });
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View>
        <Text>Home</Text>
        <Button title="Read" onPress={fetchBottles} />
      </View>
    </View>
  );
};
