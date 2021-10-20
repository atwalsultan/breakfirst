import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Box } from 'native-base';

const GoalWorkspaceCard = ({ item }) => {
    return (
        <Box style={styles.card}>
            <Text style={styles.cardText}>{item.text}</Text>
        </Box>
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
