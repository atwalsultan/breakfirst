import React from "react";
import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { UserProvider } from "../contexts/UserContext";

import HomeTabs from "../tabs/HomeTabs";
import HomeStack from "./HomeStack";
import LibraryStack from "./LibraryStack";
import StatsStack from "./StatsStack";
import ProfileStack from "./ProfileStack";
import SplashScreen2 from "../screens/splash/SplashScreen2";
import ExerciseStack from "./ExerciseStack";

const Stack = createNativeStackNavigator();

const AppStack = ({
  schedulePushNotification,
  notification,
  expoPushToken,
}) => {
  return (
    <UserProvider>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash2"
          component={SplashScreen2}
          options={{ headerShown: false }}
        />

        <Stack.Screen name="HomeTabs" options={{ headerShown: false }}>
          {(props) => (
            <HomeTabs
              {...props}
              schedulePushNotification={schedulePushNotification}
              notification={notification}
              expoPushToken={expoPushToken}
            />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="HomeStack"
          component={HomeStack}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="LibraryStack"
          component={LibraryStack}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="StatsStack"
          component={StatsStack}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="ProfileStack"
          component={ProfileStack}
          options={{ headerShown: false }}
        />

        <Stack.Screen name="ExerciseStack" options={{ headerShown: false }}>
          {(props) => (
            <ExerciseStack
              {...props}
              schedulePushNotification={schedulePushNotification}
              notification={notification}
              expoPushToken={expoPushToken}
            />
          )}
        </Stack.Screen>
        
      </Stack.Navigator>
    </UserProvider>
  );
};

export default AppStack;

const styles = StyleSheet.create({});
