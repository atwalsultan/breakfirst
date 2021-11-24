import React, { useState, useEffect } from "react";
import { StyleSheet, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Box } from "native-base";
import AppLogo from "../../svgs/AppLogo";

const SplashScreen = ({ navigation }) => {
  const [user, setUser] = useState(null);

  // Fetch user data, if available
  const getUser = async () => {
    try {
      const presentUser = await AsyncStorage.getItem("user");
      if (presentUser !== null) {
        setUser(JSON.parse(presentUser));
      } else {
        setTimeout(() => {
          navigation.replace("Login");
        }, 2000);
      }
    } catch (e) {
      console.log(e);
    }
  };

  // Log user out and delete currently stored user data
  const logout = async () => {
    try {
      await AsyncStorage.removeItem("user");

      //  So that user can not navigate back to this page after logging out
      navigation.replace("Login");
    } catch (e) {
      console.log(e);
    }
  };

  // Check if user is already logged in and token is valid
  const verifyUser = async () => {
    const url = "http://192.168.1.92:8080/app/exercises";
    const response = await fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${user.token}`,
      },
    });

    // Token valid; navigate to home screen
    if (response.status == 200) {
      setTimeout(() => {
        navigation.replace("AppStack");
      }, 2000);
    }
    // Token invalid; navigate to login screen after deleting stored user data
    else {
      setTimeout(() => {
        logout();
      }, 2000);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    if (user) {
      verifyUser();
    }
  }, [user]);

  return (
    <Box safeAreaTop style={styles.container}>
      <Box style={ styles.logoContainer }>
        <AppLogo />
      </Box>
      <Text style={styles.text}>BreakFirst</Text>
    </Box>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logoContainer: {
    marginBottom: 16,
    alignSelf: 'center'
  },
  text: {
    fontSize: 25,
    fontFamily: "josefin-semi-bold",
  },
});
