import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const LoginScreen = ({ navigation }) => {
    return (
        <View>
            <Text>Login Screen</Text>
            <Button title="Login" onPress={() => {
                navigation.replace("Onboarding");
                navigation.navigate("Onboarding");
            }} />
            <Button title="Signup" onPress={() => {
                navigation.replace("Signup");
                navigation.navigate("Signup");
            }} />
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({})
