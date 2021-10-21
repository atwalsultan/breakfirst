import * as React from 'react';
import { StyleSheet, Button } from 'react-native';
import { Box } from 'native-base';

const HomeScreen = ({ navigation }) => {
    return (
        <Box safeAreaTop>
            <Button title="Change Schedule" onPress={() => {
                navigation.navigate("HomeStack", { screen: 'ChangeScheduleScreen' });
            }}/>
            <Button title="Set Up Reminder" onPress={() => {
                navigation.navigate("HomeStack", { screen: 'SetReminderScreen' });
            }}/>
        </Box>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
