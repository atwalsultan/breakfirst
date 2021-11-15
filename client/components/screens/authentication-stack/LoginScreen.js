import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import { Box } from "native-base";
import AsyncStorage from "@react-native-async-storage/async-storage";

import LoginImage from "../../svgs/LoginImage";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hideImage, setHideImage] = useState(false);

  const login = async () => {
    const response = await fetch("http://192.168.1.79:8080/auth/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    if (response.status === 200) {
      // Save token
      const responseJson = await response.json();

      try {
        let user = {
          username: responseJson.username,
          email: responseJson.email,
          token: responseJson.token,
          id: responseJson.id,
        };

        await AsyncStorage.setItem("user", JSON.stringify(user));

        // So that user cannot get back to this screen once navigated to the app stack
        navigation.replace("AppStack");
      } catch (e) {
        console.log(e);
      }
    } else {
      // Show error
      const responseJson = await response.json();
      console.log(responseJson);
    }
  };

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setHideImage(true); // or some other action
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setHideImage(false); // or some other action
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return (
    <Box style={styles.container} safeAreaTop>
      <LoginImage hideImage={hideImage} />

      <Text style={styles.h1}>Log In</Text>
      <Text style={styles.text}>It's time to do some exercise!</Text>
      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        secureTextEntry={true}
        placeholder="Password"
        style={styles.input}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Text style={styles.forgotPassword}>Forgot password?</Text>

      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => {
          // Log user in
          login();
        }}
      >
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      <View style={styles.signupInfo}>
        <Text style={styles.signupText}>Do not have an account?</Text>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Signup");
          }}
        >
          <Text style={styles.signupLink}>Signup here.</Text>
        </TouchableOpacity>
      </View>
    </Box>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingBottom: 8,
    paddingTop: 68,
    flex: 1,
  },
  h1: {
    fontSize: 28,
    fontFamily: "josefin-bold",
    textAlign: "center",
    marginBottom: 8,
  },
  text: {
    fontSize: 18,
    fontFamily: "josefin-regular",
    textAlign: "center",
    marginBottom: 32,
  },
  input: {
    padding: 16,
    backgroundColor: "rgba(0,0,0,0.05)",
    fontSize: 18,
    fontFamily: "josefin-regular",
    marginBottom: 16,
  },
  forgotPassword: {
    fontSize: 16,
    fontFamily: "josefin-regular",
    textAlign: "right",
    marginBottom: 32,
  },
  loginButton: {
    backgroundColor: "#F94144",
    paddingVertical: 16,
    width: "45%",
    alignSelf: "center",
    height: 48,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  loginButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontFamily: "josefin-regular",
  },
  signupInfo: {
    flexGrow: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  signupText: {
    fontSize: 16,
    fontFamily: "josefin-regular",
  },
  signupLink: {
    fontFamily: "josefin-bold",
    fontSize: 16,
    marginLeft: 2,
  },
});
