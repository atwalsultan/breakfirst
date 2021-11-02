import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Box } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignupScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    const signup = async () => {
        const response = await fetch("http://192.168.1.92:8080/auth/signup", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                "email": email,
                "password": password,
                "username": username
            })
        });

        if (response.status === 200) {
            // Save token
            const responseJson = await response.json();

            try {
                let user = {
                    username: responseJson.username,
                    email: responseJson.email,
                    token: responseJson.token,
                    id: responseJson.id
                };

                await AsyncStorage.setItem('user', JSON.stringify(user));

                // So that user cannot get back to this page once navigated to the app stack
                navigation.replace("Onboarding");
            }
            catch (e) {
                console.log(e);
            }
        }

        else {
            // Show error
            const responseJson = await response.json();
            console.log(responseJson);
        }
    }

    return (
        <Box style={styles.container} safeAreaTop>
            <Box style={styles.image}></Box>

            <Text style={styles.h1}>Sign Up</Text>
            <Text style={styles.text}>It's time to do some exercises!</Text>
            <TextInput placeholder="Email" style={styles.input} value={email} onChangeText={(text) => setEmail(text)} />
            <TextInput placeholder="Username" style={styles.input} value={username} onChangeText={(text) => setUsername(text)} />
            <TextInput placeholder="Password" secureTextEntry={true} style={styles.input} value={password} onChangeText={(text) => setPassword(text)} />
            <TextInput placeholder="Confirm Password" secureTextEntry={true} style={styles.input} />

            <TouchableOpacity style={styles.signupButton} onPress={() => {
                // Sign up user and log in
                signup();
            }}>
                <Text style={styles.signupButtonText}>
                    Signup
                </Text>
            </TouchableOpacity>

            <View style={styles.loginInfo}>
                <Text style={styles.loginText}>Already have an account?</Text>

                <TouchableOpacity onPress={() => {
                    navigation.navigate("Login");
                }}>
                    <Text style={styles.loginLink}>
                        Login here.
                    </Text>
                </TouchableOpacity>
            </View>
        </Box>
    )
}

export default SignupScreen

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingBottom: 8,
        paddingTop: 68,
        flex: 1,
    },
    image: {
        height: '25%',
        backgroundColor: 'rgba(0,0,0,0.05)',
        marginBottom: 32,
    },
    h1: {
        fontSize: 30,
        fontWeight: "700",
        textAlign: "center",
        marginBottom: 8
    },
    text: {
        fontSize: 18,
        fontWeight: "400",
        textAlign: "center",
        marginBottom: 32
    },
    input: {
        padding: 16,
        backgroundColor: 'rgba(0,0,0,0.05)',
        fontSize: 18,
        marginBottom: 16
    },
    signupButton: {
        backgroundColor: "rgba(0,0,0,0.1)",
        paddingVertical: 16,
        width: "45%",
        alignSelf: "center",
    },
    signupButtonText: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '400'
    },
    loginInfo: {
        flexGrow: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    loginText: {
        fontSize: 16,
    },
    loginLink: {
        fontWeight: '700',
        fontSize: 16,
        marginLeft: 2
    }
})

