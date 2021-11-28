import React from 'react';
import { Box } from 'native-base';
import { StyleSheet, ScrollView } from 'react-native';

import SedentaryFactCard from '../../cards/SedentaryFactCard';

const SedentaryFactsScreen = () => {

    return (
        <Box style={styles.container}>
            <ScrollView style={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
                <SedentaryFactCard title="Effects of a sedentary life" description="Sedentary lifestyles increase all causes of mortality, double the risk of cardiovascular diseases, diabetes, and obesity, and increase the risks of colon cancer, high blood pressure, osteoporosis, lipid disorders, depression and anxiety." />
                <SedentaryFactCard title="Causes of a sedentary life" description="Sedentary lifestyles increase all causes of mortality, double the risk of cardiovascular diseases, diabetes, and obesity, and increase the risks of colon cancer, high blood pressure, osteoporosis, lipid disorders, depression and anxiety." />
                <SedentaryFactCard title="Reasearch and guidelines" description="Sedentary lifestyles increase all causes of mortality, double the risk of cardiovascular diseases, diabetes, and obesity, and increase the risks of colon cancer, high blood pressure, osteoporosis, lipid disorders, depression and anxiety." />
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
