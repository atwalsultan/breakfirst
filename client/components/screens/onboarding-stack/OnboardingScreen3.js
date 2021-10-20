import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { Box } from 'native-base';
import GoalCard from '../../cards/GoalWorkspaceCard'

const OnboardingScreen3 = ({ navigation }) => {
    return (
    <Box style={styles.container} safeAreaTop>

            <Text style={styles.backLink} onPress={() => {
                navigation.goBack()
            }}>
                Back
            </Text>

            <View>
                <Text style={styles.h1}>Your Schedule is:</Text>
                <Text style={styles.text}>You can change this anytime</Text>
            </View>

            <View>
               <View style={styles.schedule}>
                   {/* schedule logic */}
                </View> 
               <Text style={styles.or}>Or</Text>
               <GoalCard item={{text: "I don't have a fixed working schedule"}}/>
            </View> 

            <View style={styles.flexEndView}>
                <View style={styles.startButton}>
                <Button title="Get Started" color="#000" onPress={() => {
                            navigation.replace("AppStack")
                            navigation.navigate("AppStack")
                }} />
                </View>
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
    questionNumber: {
        fontSize: 18,
        fontWeight: '600'
    },
    startButton:{
        marginBottom:52,
    },
    flexVertical: {
        flexDirection:"column"
    },
    flexEndView: {
        flexGrow: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
     },
     schedule:{
        height:"53%",
        backgroundColor: 'rgba(0,0,0,0.05)'
     },
     or:{
        fontSize: 20,
        fontWeight: '600',
        marginTop:5,
        marginBottom:5
     }
})

