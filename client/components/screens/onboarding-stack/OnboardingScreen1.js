import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Box } from 'native-base';
import { Entypo } from '@expo/vector-icons';

import GoalWorkspaceList from '../../lists/GoalWorkspaceList';
import OBNextButton from '../../buttons/OBNextButton';


const OnboardingScreen1 = ({ navigation }) => {
    const data = [
        {text: "Relieve body pain", id: 1},
        {text: "Prevent physical stiffness", id: 2},
        {text: "Relieve stress and anxiety", id: 3},
        {text: "Stay active throughout the day", id: 4},
    ]

    return (
        <Box style={styles.container} safeAreaTop>
            <TouchableOpacity onPress={() => {
                navigation.goBack()
            }}>
                <Entypo name="chevron-left" size={24} color="black" style={styles.backLink} />
            </TouchableOpacity>

            <Text style={styles.h1}>What's your goal?</Text>
            <Text style={styles.text}>We'll help you customize your break schedule.</Text>

            <GoalWorkspaceList data={data} />

            <View style={styles.flexEndView}>
                <View style={styles.nextButton}>
                    <OBNextButton navigation={navigation} next="OB2" />
                </View>
                <Text style={styles.questionNumber}>Question 1/3</Text>
            </View>
        </Box>
    )
}

export default OnboardingScreen1

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingBottom: 24,
        paddingTop: 34,
        flex: 1,
    },
    backLink: {
        marginTop: 16,
        marginBottom: 25
    },
    h1: {
        fontSize: 28    ,
        fontWeight: "700",
        marginBottom: 8
    },
    text: {
        fontSize: 16,
        fontWeight: "400",
        marginBottom: 32
    },
    nextButton: {
        marginBottom: 52,
    },
    flexEndView: {
        flexGrow: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    questionNumber: {
        fontSize: 18,
        fontWeight: '600'
    }
})
