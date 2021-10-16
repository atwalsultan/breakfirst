import * as React from 'react';
import { StyleSheet } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import IntroScreen1 from '../screens/onboarding-stack/IntroScreen1';
import IntroScreen2 from '../screens/onboarding-stack/IntroScreen2';
import OnboardingScreen1 from '../screens/onboarding-stack/OnboardingScreen1';
import OnboardingScreen2 from '../screens/onboarding-stack/OnboardingScreen2';
import OnboardingScreen3 from '../screens/onboarding-stack/OnboardingScreen3';

const Stack = createNativeStackNavigator();

const OnboardingStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Intro1" component={IntroScreen1} options={{headerShown: false}} />
            <Stack.Screen name="Intro2" component={IntroScreen2} options={{headerShown: false}} />
            <Stack.Screen name="OB1" component={OnboardingScreen1} options={{headerShown: false}} />
            <Stack.Screen name="OB2" component={OnboardingScreen2} options={{headerShown: false}} />
            <Stack.Screen name="OB3" component={OnboardingScreen3} options={{headerShown: false}} />
        </Stack.Navigator>
    )
}

export default OnboardingStack

const styles = StyleSheet.create({})
