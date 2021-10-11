import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const IntroScreen1 = ({ navigation }) => {
    return (
        <View>
            <Text>Intro Screen 1</Text>
            <Button title="Skip" onPress={() => navigation.navigate('OB1')}/>
            <Button title="Next" onPress={() => navigation.navigate('Intro2')}/>
        </View>
    )
}

export default IntroScreen1

const styles = StyleSheet.create({})
