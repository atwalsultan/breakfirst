import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Center } from 'native-base';

const ChangeScheduleScreen = ({ navigation }) => {
    return (
        <View>
            <Center>
                <Text>Change Schedule</Text>
                <Button title="Set Interval" onPress={() => {
                    navigation.navigate("SetIntervalScreen");
                }} />
            </Center>
        </View>
    )
}

export default ChangeScheduleScreen

const styles = StyleSheet.create({})
