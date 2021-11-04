import React, { useState } from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NativeBaseProvider, Text } from 'native-base';

import AuthenticationStack from './components/stacks/AuthenticationStack';

const Tab = createBottomTabNavigator();

const getFonts = () => {
	return Font.loadAsync({
		'josefin-regular': require('./assets/fonts/JosefinSans-Regular.ttf'),
		'josefin-bold': require('./assets/fonts/JosefinSans-Bold.ttf'),
		'josefin-medium': require('./assets/fonts/JosefinSans-Medium.ttf'),
		'josefin-semi-bold': require('./assets/fonts/JosefinSans-SemiBold.ttf')
	})
}

export default function App() {
	const [fontsLoaded, setFontsLoaded] = useState(false);

	if(fontsLoaded) {
		return (
			<NativeBaseProvider>
				<NavigationContainer>
					<AuthenticationStack />
				</NavigationContainer>
			</NativeBaseProvider>
		);
	}
	else {
		return (
			<AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} onError={console.warn} />
		)
	}
	
}