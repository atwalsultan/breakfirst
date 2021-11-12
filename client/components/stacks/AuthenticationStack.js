import React from 'react';
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/authentication-stack/LoginScreen';
import SignupScreen from '../screens/authentication-stack/SignupScreen';
import OnboardingStack from './OnboardingStack';
import AppStack from './AppStack';
import SplashScreen from '../screens/splash/SplashScreen';

const Stack = createNativeStackNavigator();

const AuthenticationStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Splash" component={SplashScreen} options={{headerShown: false}} />
            <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
            <Stack.Screen name="Signup" component={SignupScreen} options={{headerShown: false}} />
            <Stack.Screen name="Onboarding" component={OnboardingStack} options={{headerShown: false}} />
            <Stack.Screen name="AppStack" component={AppStack} options={{headerShown: false}} />
        </Stack.Navigator>
    )
}

export default AuthenticationStack

const styles = StyleSheet.create({})
