import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NativeBaseProvider } from 'native-base';

import AuthenticationStack from './components/stacks/AuthenticationStack';

const Tab = createBottomTabNavigator();

export default function App() {
	return (
		<NativeBaseProvider>
			<NavigationContainer>
				<AuthenticationStack />
			</NavigationContainer>
		</NativeBaseProvider>
	);
}