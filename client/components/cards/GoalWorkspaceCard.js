import React from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import { Box } from 'native-base';

const GoalWorkspaceCard = ({ item, selected, setSelected }) => {
    return (
        <TouchableWithoutFeedback onPress={() => setSelected(item.id)}>
            <Box style={[styles.card, {borderColor: selected === item.id ? '#355C97' : 'transparent'}]}>
                <Text style={styles.cardText}>{item.text}</Text>
            </Box>
        </TouchableWithoutFeedback>
    )
}

export default GoalWorkspaceCard

const styles = StyleSheet.create({
    card: {
        marginBottom: 16,
        paddingVertical: 12,
        paddingHorizontal: 16,
        backgroundColor: '#FFFFFF',
        borderRadius:4,
        borderWidth: 1.5,
        borderStyle: 'solid',
    },
    cardText: {
        fontSize: 18,
        fontFamily: 'josefin-regular',
    }
})
