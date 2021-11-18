import React from "react";
import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import FeaturesScreen from "../screens/exercise-stack/ExerciseDescriptionScreens";
import DetailsScreen from "../screens/exercise-stack/ExerciseOngoingScreen";

const Stack = createNativeStackNavigator();

const ExerciseStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Features"
        component={FeaturesScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
export default ExerciseStack;

const styles = StyleSheet.create({});
