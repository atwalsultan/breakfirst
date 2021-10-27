import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Box } from 'native-base';

const ReportScreen = () => {
    return (
        <Box style={styles.container}>
            <Box style={styles.dailyAverage}></Box>

            <Box style={styles.twoColumns}>
                <Box style={[styles.column, { marginRight: 16 }]}></Box>
                <Box style={[styles.column]}></Box>
            </Box>

            <Box style={styles.trends}></Box>
        </Box>
    )
}

export default ReportScreen

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        marginTop: 16,
    },
    dailyAverage: {
        height: 250,
        backgroundColor: 'rgba(0,0,0,0.1)'
    },
    twoColumns: {
        flexDirection: 'row',
        marginTop: 16,
        marginBottom: 16,
    },
    column: {
        flexGrow: 1,
        backgroundColor: 'rgba(0,0,0,0.1)',
        height: 135
    },
    trends: {
        flexGrow: 1,
        backgroundColor: 'rgba(0,0,0,0.1)',
        marginBottom: 16
    }
})
