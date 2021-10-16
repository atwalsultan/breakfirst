import * as React from 'react';
import { StyleSheet, View, Button } from 'react-native';

const LibraryScreen = ({ navigation }) => {
    return (
        <View>
            <Button title="Exercise Details" onPress={() => {
                navigation.navigate("LibraryStack", { screen: 'ExerciseDetailsScreen' });
            }}/>
            <Button title="Sedantary Facts" onPress={() => {
                navigation.navigate("LibraryStack", { screen: 'FactsScreen' });
            }}/>
        </View>
    )
}

export default LibraryScreen

const styles = StyleSheet.create({})
