import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import OnboardingStack from './OnboardingStack';

const Stack = createNativeStackNavigator();

const AuthenticationStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
            <Stack.Screen name="Signup" component={SignupScreen} options={{headerShown: false}} />
            <Stack.Screen name="Onboarding" component={OnboardingStack} options={{headerShown: false}} />
        </Stack.Navigator>
    )
}

export default AuthenticationStack

const styles = StyleSheet.create({})
