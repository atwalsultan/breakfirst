import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Box } from 'native-base';

import FactsTabs from '../../tabs/FactsTabs';
import ChevronLeftIcon from '../../svgs/ChevronLeftIcon';


const FactsScreen = ({ navigation }) => {
    return (
        <Box style={styles.container} safeAreaTop>
            <TouchableOpacity 
                onPress={() => {
                    navigation.goBack();
                }}
            >
                <ChevronLeftIcon />
            </TouchableOpacity>

            <FactsTabs />
        </Box>
    )
}

export default FactsScreen

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingTop: 34,
        flex: 1,
    },
})
