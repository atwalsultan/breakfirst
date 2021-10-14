import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { FlatList } from 'native-base';
import GoalCard from '../cards/GoalWorkspaceCard';

const GoalWorkspaceList = ({ data }) => {
    return (
        <FlatList
            style={styles.goalList}
            data={data}
            renderItem={({ item }) => (
                <GoalCard item={item} />
            )}

            keyExtractor={item => item.id.toString()}
            showsVerticalScrollIndicator={false}
        />
    )
}

export default GoalWorkspaceList

const styles = StyleSheet.create({
    goalList: {
        flexGrow: 0,
    },
})
