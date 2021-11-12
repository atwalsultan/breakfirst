import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Box } from 'native-base';
import { Entypo } from '@expo/vector-icons';

const SedentaryFactCard = () => {
    const [active, setActive] = useState(false)

    return (
        <TouchableOpacity style={styles.fact} onPress={() => {setActive(!active)}}>
            <Text style={styles.factType}>Fact of the day</Text>

            <Box style={styles.factHeader}>
                <Text style={styles.factTitle}>Effects of a sedentary life</Text>
                { !active && <Entypo name="chevron-down" size={24} color="black" />}
            </Box>

            { active && <Text style={styles.factText}>Sedentary lifestyles increase all causes of mortality, double the risk of cardiovascular diseases, diabetes, and obesity, and increase the risks of colon cancer, high blood pressure, osteoporosis, lipid disorders, depression and anxiety.</Text>}

           { 
                active &&  
                <Box style={styles.factFooter}>
                    <Entypo name="chevron-up" size={24} color="black" />
                </Box>    
            }
        </TouchableOpacity>
    )
}

export default SedentaryFactCard

const styles = StyleSheet.create({
    fact: {
        backgroundColor: '#FFFFFF',
        marginBottom: 16,
        padding: 16,
        paddingBottom: 0
    },
    factType: {
        fontSize: 14,
        fontWeight: '400',
        color: '#F94144',
        marginBottom: 8
    },
    factHeader: {
        marginBottom: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    factTitle: {
        fontSize: 22,
        fontFamily: 'josefin-semi-bold'
    },
    factText: {
        fontSize: 16,
        fontFamily: 'josefin-regular'
    },
    factFooter: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 16
    }
})
