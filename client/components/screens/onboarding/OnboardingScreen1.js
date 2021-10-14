import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Box } from 'native-base';
import GoalWorkspaceList from '../../lists/GoalWorkspaceList';

const OnboardingScreen1 = ({ navigation }) => {
    const data = [
        {text: "Relieve body pain", id: 1},
        {text: "Prevent physical stiffness", id: 2},
        {text: "Relieve stress and anxiety", id: 3},
        {text: "Stay active throughout the day", id: 4},
    ]

    return (
        <Box style={styles.container} safeAreaTop>
            <Text style={styles.backLink} onPress={() => {
                navigation.goBack()
            }}>
                Back
            </Text>

            <Text style={styles.h1}>What's your goal?</Text>
            <Text style={styles.text}>We'll help you customize your break schedule.</Text>

            <GoalWorkspaceList data={data} />

            <View style={styles.flexEndView}>
                <TouchableOpacity>
                    <Text style={styles.nextButton} onPress={() => {
                        // navigation.replace("Intro2");
                        navigation.navigate("OB2");
                    }}>
                        Next
                    </Text>
                </TouchableOpacity>
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
        fontSize: 14,
        marginBottom: 32
    },
    h1: {
        fontSize: 30,
        fontWeight: "700",
        marginBottom: 8
    },
    text: {
        fontSize: 16,
        fontWeight: "400",
        marginBottom: 32
    },
    nextButton: {
        backgroundColor: "rgba(0,0,0,0.1)",
        marginBottom: 52,
        paddingVertical: 16,
        paddingHorizontal: 50,
        textAlign: 'center',
        alignSelf: "center",
        fontSize: 18,
        fontWeight: '400',
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
