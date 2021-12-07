import * as React from 'react';
import { Box } from 'native-base';
import { StyleSheet, ScrollView } from 'react-native';

import SedentaryFactCard from '../../cards/SedentaryFactCard';

const PreventionScreen = () => {
    return (
        <Box style={styles.container}>
            <ScrollView style={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
                <SedentaryFactCard type="prevention" title="Physical exercise" description="Just half an hour of daily physical activity can reduce the risk of cardiovascular diseases, diabetes, obesity, high blood pressure, depression and anxiety. It does not have to be an intense gym session. Walking outdoors at a decent pace works too!" />
                <SedentaryFactCard type="prevention" title="Accountability partners" description="Sedentary lifestyles increase all causes of mortality, double the risk of cardiovascular diseases, diabetes, and obesity, and increase the risks of colon cancer, high blood pressure, osteoporosis, lipid disorders, depression and anxiety." />
                <SedentaryFactCard type="prevention" title="Nutrition & hydration" description="Sedentary lifestyles increase all causes of mortality, double the risk of cardiovascular diseases, diabetes, and obesity, and increase the risks of colon cancer, high blood pressure, osteoporosis, lipid disorders, depression and anxiety." />
            </ScrollView>
        </Box>
    )
}

export default PreventionScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 16
    }
})
