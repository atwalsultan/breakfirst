import React from "react";

import { View, Text, Button } from "react-native";
export default function HomeScreen({
  expoPushToken,
  notification,
  schedulePushNotification,
  navigation,
}) {
  React.useEffect(() => {
    console.log("hel", notification);
  }, []);
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <Text style={{ color: "red", textAlign: "center" }}>
        Your expo push token: {expoPushToken}
      </Text>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text>
          Title: {notification && notification.request.content.title}{" "}
        </Text>
        <Text>Body: {notification && notification.request.content.body}</Text>
        <Text>
          Data:{" "}
          {notification && JSON.stringify(notification.request.content.data)}
        </Text>
      </View>

      <Button
        title="Press to schedule a notification"
        onPress={async () => {
          await schedulePushNotification();
        }}
      />
    </View>
  );
}
