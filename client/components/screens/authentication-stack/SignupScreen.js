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

import SignupImage from "../../svgs/SignupImage";

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState("sultan.singh.atwal@gmail.com");
  const [password, setPassword] = useState("sultan");
  const [username, setUsername] = useState("atwalsultan");
  const [hideImage, setHideImage] = useState(false);

  const signup = async () => {
    const response = await fetch("http://3.98.75.199/auth/signup", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        username: username,
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

        // So that user cannot get back to this page once navigated to the app stack
        navigation.replace("Onboarding");
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
      <SignupImage hideImage={hideImage} />

      <Text style={styles.h1}>Sign Up</Text>
      <Text style={styles.text}>It's time to do some exercises!</Text>
      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        placeholder="Username"
        style={styles.input}
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        style={styles.input}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TextInput
        placeholder="Confirm Password"
        secureTextEntry={true}
        value={"sultan"}
        style={styles.input}
      />

      <TouchableOpacity
        style={styles.signupButton}
        onPress={() => {
          // Sign up user and log in
          signup();
        }}
      >
        <Text style={styles.signupButtonText}>Signup</Text>
      </TouchableOpacity>

      <View style={styles.loginInfo}>
        <Text style={styles.loginText}>Already have an account?</Text>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Text style={styles.loginLink}>Login here.</Text>
        </TouchableOpacity>
      </View>
    </Box>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingBottom: 8,
    paddingTop: 48,
    flex: 1,
  },
  h1: {
    fontSize: 30,
    fontFamily: "josefin-bold",
    textAlign: "center",
    marginBottom: 8,
    color: '#142339'
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
    marginBottom: 16,
    fontFamily: "josefin-regular",
    color: '#142339'
  },
  signupButton: {
    backgroundColor: "#F94144",
    paddingVertical: 16,
    width: "45%",
    height: 48,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 28
  },
  signupButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontFamily: "josefin-regular",
    position: 'relative',
    top: -2
  },
  loginInfo: {
    flexGrow: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  loginText: {
    fontSize: 16,
    fontFamily: "josefin-regular",
  },
  loginLink: {
    fontFamily: "josefin-bold",
    fontSize: 16,
    marginLeft: 2,
    color: '#142339',
  },
});
