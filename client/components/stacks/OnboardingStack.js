import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import IntroScreen1 from '../screens/onboarding/IntroScreen1';
import IntroScreen2 from '../screens/onboarding/IntroScreen2';
import OnboardingScreen1 from '../screens/onboarding/OnboardingScreen1';
import OnboardingScreen2 from '../screens/onboarding/OnboardingScreen2';
import OnboardingScreen3 from '../screens/onboarding/OnboardingScreen3';

const Stack = createNativeStackNavigator();

const OnboardingStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Intro1" component={IntroScreen1} />
            <Stack.Screen name="Intro2" component={IntroScreen2} />
            <Stack.Screen name="OB1" component={OnboardingScreen1} />
            <Stack.Screen name="OB2" component={OnboardingScreen2} />
            <Stack.Screen name="OB3" component={OnboardingScreen3} />
        </Stack.Navigator>
    )
}

export default OnboardingStack

const styles = StyleSheet.create({})
