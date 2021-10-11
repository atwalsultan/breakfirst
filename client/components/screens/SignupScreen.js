import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const SignupScreen = ({ navigation }) => {
    return (
        <View>
            <Text>Signup Screen</Text>
            <Button title="Signup" onPress={() => {
                navigation.replace("Onboarding");
                navigation.navigate("Onboarding");
            }} />
            <Button title="Login" onPress={() => {
                navigation.replace("Login");
                navigation.navigate("Login");
            }} />
        </View>
    )
}

export default SignupScreen

const styles = StyleSheet.create({})
