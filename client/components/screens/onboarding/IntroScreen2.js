import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const IntroScreen2 = ({ navigation }) => {
    return (
        <View>
            <Text>Intro Screen 2</Text>
            <Button title="Skip" onPress={() => navigation.navigate('OB1')}/>
            <Button title="Next" onPress={() => navigation.navigate('OB1')}/>
        </View>
    )
}

export default IntroScreen2

const styles = StyleSheet.create({})
