import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Box } from 'native-base';

const FactsScreen = ({ navigation }) => {
    return (
        <Box style={styles.container} safeAreaTop>
            <TouchableOpacity onPress={() => {
                navigation.goBack();
            }}>
                <Text style={styles.backLink}>Back</Text>
            </TouchableOpacity>

            <Box style={styles.tabs}>
                <Box style={[styles.tab, { backgroundColor: 'rgba(0,0,0,0.1)' }]}>
                    <Text style={styles.tabText}>Facts</Text>
                </Box>
                <Box style={[styles.tab, { backgroundColor: 'rgba(0,0,0,0.0)' }]}>
                    <Text style={styles.tabText}>Prevention</Text>
                </Box>
            </Box>

            <Box style={styles.factsList}>
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
    },
    tabs: {
        flexDirection: 'row',
        marginBottom: 16,
        padding: 8,
        backgroundColor: 'rgba(0,0,0,0.06)'
    },
    tab: {
        width: '50%',
        paddingVertical: 12,
        alignItems: 'center',
        justifyContent: 'center'
    },
    tabText: {
        fontSize: 18,
        fontWeight: '400'
    },
    factsList: {

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
