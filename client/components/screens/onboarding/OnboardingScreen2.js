import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const OnboardingScreen2 = ({ navigation }) => {
    return (
        <View>
            <Text>OB Screen 2</Text>
            <Button title="Next" onPress={() => navigation.navigate('OB3')}/>
        </View>
    )
}

export default OnboardingScreen2

const styles = StyleSheet.create({})
