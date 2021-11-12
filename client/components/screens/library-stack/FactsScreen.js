import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Box } from 'native-base';
import { Entypo } from '@expo/vector-icons';

import FactsTabs from '../../tabs/FactsTabs';


const FactsScreen = ({ navigation }) => {
    return (
        <Box style={styles.container} safeAreaTop>
            <TouchableOpacity 
                onPress={() => {
                    navigation.goBack();
                }}
                style={ styles.backLink }
            >
                <Entypo name="chevron-left" size={24} color="black" />
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
    backLink: {
        marginBottom: 24
    }
})
