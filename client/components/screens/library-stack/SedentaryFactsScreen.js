import React from 'react';
import { Box } from 'native-base';
import { StyleSheet, ScrollView } from 'react-native';

import SedentaryFactCard from '../../cards/SedentaryFactCard';

const SedentaryFactsScreen = () => {

    return (
        <Box style={styles.container}>
            <ScrollView style={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
                <SedentaryFactCard />
                <SedentaryFactCard />
                <SedentaryFactCard />
            </ScrollView>
        </Box>
    )
}

export default SedentaryFactsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 16
    }
})
