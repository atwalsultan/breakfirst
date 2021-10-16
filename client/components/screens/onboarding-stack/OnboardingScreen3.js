import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const OnboardingScreen3 = ({ navigation }) => {
    return (
        <View>
            <Text>OB Screen 3</Text>
            <Button title="Get Started" onPress={() => {
                navigation.replace("AppStack")
                navigation.navigate("AppStack")
            }} />
        </View>
    )
}

export default OnboardingScreen3

const styles = StyleSheet.create({})
