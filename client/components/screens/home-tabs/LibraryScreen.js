import * as React from 'react';
import { StyleSheet, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Box } from 'native-base';

import ExerciseList from '../../lists/ExerciseList';
import ChevronRIghtIconTomatoFrog from '../../svgs/ChevronRightIconTomatoFrog';

const LibraryScreen = ({ navigation }) => {
    return (
        <Box style={styles.container} safeAreaTop>
            <ScrollView style={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
                <Text style={styles.heading}>Exercise library</Text>
                <Text style={styles.text}>Add the exercise you like to your collection</Text>

                <Box style={styles.exerciseContainer}>
                    <ExerciseList navigation={navigation} />
                </Box>

                <TouchableOpacity onPress={() => {
                    navigation.navigate("LibraryStack", { screen: 'FactsScreen' });
                }}>
                    <Box style={styles.sedantaryFacts}>
                        <Text style={styles.sedantaryFactsText}>Know sedantary</Text>
                        <ChevronRIghtIconTomatoFrog />
                    </Box>
                </TouchableOpacity>
            </ScrollView>
        </Box>
    )
}

export default LibraryScreen

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingTop: 34,
        flex: 1,
    },
    heading: {
        fontSize: 25,
        fontFamily: 'josefin-semi-bold',
        marginBottom: 8
    },
    text: {
        fontSize: 14,
        fontFamily: 'josefin-regular',
        marginBottom: 16,
        color: 'rgba(20, 35, 57, 0.6)'
    },
    exerciseContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginBottom: 32
    },
    sedantaryFacts: {
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        borderRadius: 4,
        paddingVertical: 20,
        paddingHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16
    },
    sedantaryFactsText: {
        fontSize: 22,
        fontFamily: 'josefin-regular',
    }
})
