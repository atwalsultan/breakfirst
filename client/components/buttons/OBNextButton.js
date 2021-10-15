import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';


const OBNextButton = ({ navigation, next }) => {
    return (
        <TouchableOpacity style={styles.roundButton} onPress={() => {
            navigation.navigate(next);
        }}>
            <AntDesign name="arrowright" size={24} color="black" />
        </TouchableOpacity>
    )
}

export default OBNextButton

const styles = StyleSheet.create({
    roundButton: {
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 80,
        backgroundColor: "rgba(0,0,0,0.1)",
        alignSelf: 'center'
    },
})
