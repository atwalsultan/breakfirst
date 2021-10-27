import * as React from 'react';
import { Box } from 'native-base';
import { StyleSheet, Text } from 'react-native'

const PreventionScreen = () => {
    return (
        <Box style={styles.container}>
            <Text>Prevention</Text>
        </Box>
    )
}

export default PreventionScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 16
    },
})
