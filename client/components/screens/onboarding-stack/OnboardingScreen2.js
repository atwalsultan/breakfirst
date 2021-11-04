import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Box } from 'native-base';
import { Entypo } from '@expo/vector-icons';

import GoalWorkspaceList from '../../lists/GoalWorkspaceList';
import OBNextButton from '../../buttons/OBNextButton';

const OnboardingScreen2 = ({ navigation }) => {
    const data = [
        {text: "Work from home", id: 1},
        {text: "Work in a cubicle", id: 2},
        {text: "Work in an open office", id: 3},
    ];

    const [selected, setSelected] = useState(1);

    return (
        <Box style={styles.container} safeAreaTop>
             <TouchableOpacity onPress={() => {
                navigation.goBack()
            }}>
                <Entypo name="chevron-left" size={24} color="black" style={styles.backLink} />
            </TouchableOpacity>

            <Text style={styles.h1}>Your workspace is:</Text>
            <Text style={styles.text}>We'll recommend exercises based on your choice.</Text>

            <GoalWorkspaceList data={data} selected={selected} setSelected={setSelected} />

            <View style={styles.flexEndView}>
                <View style={styles.nextButton}>
                    <OBNextButton navigation={navigation} next="OB3" selected={selected} />
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
        marginTop: 16,
        marginBottom: 25
    },
    h1: {
        fontSize: 28,
        fontFamily: 'josefin-bold',
        marginBottom: 8
    },
    text: {
        fontSize: 16,
        fontFamily: 'josefin-regular',
        marginBottom: 32,
        color: 'rgba(20, 35, 57, 0.6)',
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
        fontFamily: 'josefin-semi-bold',
    }
})
