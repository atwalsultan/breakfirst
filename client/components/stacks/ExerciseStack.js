import React from "react";
import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/exercise-stack/Home";
import FeaturesScreen from "../screens/exercise-stack/Features";
import DetailsScreen from "../screens/exercise-stack/Details";

const Stack = createNativeStackNavigator();

const ExerciseStack = ({
  schedulePushNotification,
  notification,
  expoPushToken,
}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" options={{ headerShown: false }}>
        {(props) => (
          <HomeScreen
            {...props}
            schedulePushNotification={schedulePushNotification}
            notification={notification}
            expoPushToken={expoPushToken}
          />
        )}
      </Stack.Screen>
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
