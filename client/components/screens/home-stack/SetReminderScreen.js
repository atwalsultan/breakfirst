import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Center } from 'native-base';

const SetReminderScreen = ({ navigation }) => {
    return (
        <View>
            <Center>
                <Text>SetReminderScreen</Text>
                <Button title="Set Interval" onPress={() => {
                    navigation.navigate("SetIntervalScreen");
                }} />
            </Center>
        </View>
    )
}

export default SetReminderScreen

const styles = StyleSheet.create({})
