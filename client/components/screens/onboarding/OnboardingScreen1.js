import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const OnboardingScreen1 = ({ navigation }) => {
    return (
        <View>
            <Text>OB Screen 1</Text>
            <Button title="Next" onPress={() => navigation.navigate('OB2')}/>
        </View>
    )
}

export default OnboardingScreen1

const styles = StyleSheet.create({})
