import * as React from 'react';
import { Box } from 'native-base';
import { StyleSheet, Text } from 'react-native'

const SedentaryFactsScreen = () => {
    return (
        <Box style={styles.container}>
            <Box>
                <Box style={styles.fact}>
                    <Text style={styles.factType}>Fact of the day</Text>
                    <Text style={styles.factTitle}>Effects of a sedentary life</Text>
                    <Text style={styles.factText}>Sedentary lifestyles increase all causes of mortality, double the risk of cardiovascular diseases, diabetes, and obesity, and increase the risks of colon cancer, high blood pressure, osteoporosis, lipid disorders, depression and anxiety.</Text>
                </Box>
                <Box style={styles.fact}>
                    <Text style={styles.factType}>Fact of the day</Text>
                    <Text style={styles.factTitle}>Effects of a sedentary life</Text>
                </Box>
                <Box style={styles.fact}>
                    <Text style={styles.factType}>Fact of the day</Text>
                    <Text style={styles.factTitle}>Research and guidelines</Text>
                </Box>
            </Box>
    </Box>
    )
}

export default SedentaryFactsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 16
    },
    fact: {
        backgroundColor: 'rgba(0,0,0,0.06)',
        marginBottom: 16,
        padding: 16,
        paddingBottom: 0
    },
    factType: {
        fontSize: 14,
        fontWeight: '400',
        color: 'rgba(0,0,0,0.68)',
        marginBottom: 8
    },
    factTitle: {
        fontSize: 22,
        fontWeight: '400',
        marginBottom: 16
    },
    factText: {
        fontSize: 16,
        fontWeight: '400',
        marginBottom: 16
    }
})
