import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Box } from 'native-base';
import FactsTabs from '../../tabs/FactsTabs';

const FactsScreen = ({ navigation }) => {
    return (
        <Box style={styles.container} safeAreaTop>
            <TouchableOpacity onPress={() => {
                navigation.goBack();
            }}>
                <Text style={styles.backLink}>Back</Text>
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
        fontSize: 18,
        fontWeight: '400',
        marginBottom: 16
    }
})
