import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Box, Button } from 'native-base';

const SignupScreen = ({ navigation }) => {
    return (
        <Box style={styles.container} safeAreaTop>
            <Box style={styles.image}></Box>

            <Text style={styles.h1}>Sign Up</Text>
            <Text style={styles.text}>It's time to do some exercises!</Text>
            <TextInput placeholder="Email" style={styles.input} />
            <TextInput placeholder="Username" style={styles.input} />
            <TextInput placeholder="Password" secureTextEntry={true} style={styles.input} />
            <TextInput placeholder="Confirm Password" secureTextEntry={true} style={styles.input} />

            <TouchableOpacity style={styles.signupButton} onPress={() => {
                // Logic to sign up user and log in

                // So that user cannot get back to this page once navigated to the onboarding stack
                navigation.replace("Onboarding");
                navigation.navigate("Onboarding");
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

