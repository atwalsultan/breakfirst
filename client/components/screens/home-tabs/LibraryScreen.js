import * as React from 'react';
import { StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Box } from 'native-base';
import { AntDesign } from '@expo/vector-icons';

import ExerciseList from '../../lists/ExerciseList';

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
                        <AntDesign name="arrowright" size={24} color="black" />
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
        fontWeight: '600',
        marginBottom: 8
    },
    text: {
        fontSize: 14,
        fontWeight: '400',
        marginBottom: 16
    },
    exerciseContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginBottom: 32
    },
    sedantaryFacts: {
        backgroundColor: 'rgba(0,0,0,0.04)',
        paddingVertical: 20,
        paddingHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16
    },
    sedantaryFactsText: {
        fontSize: 22,
        fontWeight: '400'
    }
})
