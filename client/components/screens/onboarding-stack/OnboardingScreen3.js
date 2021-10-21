import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Box } from 'native-base';
import GoalCard from '../../cards/GoalWorkspaceCard'

const OnboardingScreen3 = ({ navigation }) => {
    return (
        <Box style={styles.container} safeAreaTop>

            <TouchableOpacity onPress={() => {
                navigation.goBack()
            }}>
                <Text style={styles.backLink}>Back</Text>
            </TouchableOpacity>

            <Text style={styles.h1}>Your Schedule is:</Text>
            <Text style={styles.text}>You can change this anytime</Text>

            <View style={styles.schedule}></View>

            <Text style={styles.or}>Or</Text>
            <GoalCard item={{ text: "I don't have a fixed working schedule" }} />

            <View style={styles.flexEndView}>
                <TouchableOpacity style={styles.startButton} onPress={() => {
                    navigation.replace("AppStack")
                    navigation.navigate("AppStack")
                }}>
                    <Text style={styles.startButtonText}>Get Started</Text>
                </TouchableOpacity>
                <Text style={styles.questionNumber}>Question 3/3</Text>
            </View>


        </Box>


    )
}

export default OnboardingScreen3

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
    schedule: {
        height: "35%",
        backgroundColor: 'rgba(0,0,0,0.05)',
        marginBottom: 24,
    },
    or: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 8
    },
    flexEndView: {
        flexGrow: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    startButton: {
        backgroundColor: 'rgba(0,0,0,0.1)',
        paddingVertical: 16,
        width: '45%',
        marginBottom: 60
    },
    startButtonText: {
        fontSize: 18,
        fontWeight: '400',
        textAlign: 'center'
    },
    questionNumber: {
        fontSize: 18,
        fontWeight: '600'
    },
})

