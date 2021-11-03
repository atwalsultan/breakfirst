import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { FlatList } from 'native-base';
import GoalCard from '../cards/GoalWorkspaceCard';

const GoalWorkspaceList = ({ data }) => {
    const [selected, setSelected] = useState(1);

    return (
        <FlatList
            style={styles.goalList}
            data={data}
            renderItem={({ item }) => (
                <GoalCard item={item} selected={selected} setSelected={setSelected} />
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
