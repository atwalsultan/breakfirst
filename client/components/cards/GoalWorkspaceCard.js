import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Box } from 'native-base';

const GoalWorkspaceCard = ({ item }) => {
    return (
        <TouchableOpacity>
            <Box style={styles.card}>
                <Text style={styles.cardText}>{item.text}</Text>
            </Box>
        </TouchableOpacity>
    )
}

export default GoalWorkspaceCard

const styles = StyleSheet.create({
    card: {
        marginBottom: 16,
        paddingVertical: 12,
        paddingHorizontal: 16,
        backgroundColor: 'rgba(0,0,0,0.05)',
        borderRadius:4
    },
    cardText: {
        fontSize: 18,
        fontWeight: '400'
    }
})
