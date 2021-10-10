import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/HomeScreen';
import LibraryScreen from '../../screens/LibraryScreen';
import StatsScreen from '../../screens/StatsScreen';
import ProfileScreen from '../../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export const AppTabs = () =>{
    return(
            <Tab.Navigator>
				<Tab.Screen name="Home" component={HomeScreen} />
				<Tab.Screen name="Library" component={LibraryScreen} />
				<Tab.Screen name="Stats" component={StatsScreen} />
				<Tab.Screen name="Profile" component={ProfileScreen} />
			</Tab.Navigator>
    )
}