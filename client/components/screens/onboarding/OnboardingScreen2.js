import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Box } from 'native-base';
import GoalWorkspaceList from '../../lists/GoalWorkspaceList';
import OBNextButton from '../../buttons/OBNextButton';

const OnboardingScreen2 = ({ navigation }) => {
    const data = [
        {text: "Work from home", id: 1},
        {text: "Work in a cubicle", id: 2},
        {text: "Work in an open office", id: 3},
    ]

    return (
        <Box style={styles.container} safeAreaTop>
            <Text style={styles.backLink} onPress={() => {
                navigation.goBack()
            }}>
                Back
            </Text>

            <Text style={styles.h1}>Your workspace is:</Text>
            <Text style={styles.text}>We'll recommend exercises based on your choice.</Text>

            <GoalWorkspaceList data={data} />

            <View style={styles.flexEndView}>
                <View style={styles.nextButton}>
                    <OBNextButton navigation={navigation} next="OB3" />
                </View>
                <Text style={styles.questionNumber}>Question 2/3</Text>
            </View>
        </Box>
    )
}

export default OnboardingScreen2

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
