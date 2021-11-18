import React, { useState, useRef, useEffect } from "react";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NativeBaseProvider } from "native-base";

import AuthenticationStack from "./components/stacks/AuthenticationStack";

// ===========================Notifications=========================
import * as Notifications from "expo-notifications";
import Constants from "expo-constants";
import * as navigation from "./rootNavigation";
import { navigationRef } from "./rootNavigation";

async function schedulePushNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Here is the notification header",
      body: "Here is the notification body",
      data: { screen: "Features" },
    },
    trigger: { seconds: 2 },
  });
}

async function registerForPushNotificationsAsync() {
  let token;
  if (Constants.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    // console.log(token);
  } else {
    alert("Must use physical device for Push Notifications");
  }
  if (Platform.OS === "android") {
    Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  return token;
}

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

// =================================================================

const Tab = createBottomTabNavigator();

const getFonts = () => {
  return Font.loadAsync({
    "josefin-regular": require("./assets/fonts/JosefinSans-Regular.ttf"),
    "josefin-bold": require("./assets/fonts/JosefinSans-Bold.ttf"),
    "josefin-medium": require("./assets/fonts/JosefinSans-Medium.ttf"),
    "josefin-semi-bold": require("./assets/fonts/JosefinSans-SemiBold.ttf"),
  });
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  //   ==================Notification specific============
  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();
  let targetScreen;

  useEffect(() => {
    targetScreen = notification && notification.request.content.data.screen;
    registerForPushNotificationsAsync().then((token) =>
      setExpoPushToken(token)
    );
    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification);
        // alert(JSON.stringify(notification.request.content.data))
      });

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        // console.log("clicked");
        navigation.navigate("ExerciseStack", {screen: 'Features'});
        // navigation.navigate("Features");
      });

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, [notification]);

  //   =========================end of notification code==========================

  if (fontsLoaded) {
    return (
      <NativeBaseProvider>
        <NavigationContainer ref={navigationRef}>
          <AuthenticationStack
            schedulePushNotification={schedulePushNotification}
            notification={notification}
            expoPushToken={expoPushToken}
          />
        </NavigationContainer>
      </NativeBaseProvider>
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={console.warn}
      />
    );
  }
}
