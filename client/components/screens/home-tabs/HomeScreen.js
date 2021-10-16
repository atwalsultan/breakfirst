import * as React from 'react';
import { StyleSheet, View, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View>
            <Button title="Change Schedule" onPress={() => {
                navigation.navigate("HomeStack", { screen: 'ChangeScheduleScreen' });
            }}/>
            <Button title="Set Up Reminder" onPress={() => {
                navigation.navigate("HomeStack", { screen: 'SetReminderScreen' });
            }}/>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
