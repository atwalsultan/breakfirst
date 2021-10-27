import * as React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Box } from 'native-base';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import StatsTabs from '../../tabs/StatsTabs';

const Tab = createMaterialTopTabNavigator();

const StatsScreen = () => {
    return (
        <Box style={styles.container} safeAreaTop>
            <Text style={styles.heading}>Statistics</Text>

            <Box style={{ flexGrow: 1 }}>
                <StatsTabs />
            </Box>
        </Box>
    )
}

export default StatsScreen

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingTop: 34,
        flex: 1,
    },
    heading: {
        fontSize: 25,
        fontWeight: '600',
        marginBottom: 16
    },
})
