import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { Box } from 'native-base';

import ChevronUpIcon from '../svgs/ChevronUpIcon';
import ChevronDownIcon from '../svgs/ChevronDownIcon';

const SedentaryFactCard = ({ title, description }) => {
    const [active, setActive] = useState(false)

    return (
        <TouchableOpacity style={styles.fact} onPress={() => {setActive(!active)}}>
            <Text style={styles.factType}>Fact of the day</Text>

            <Box style={styles.factHeader}>
                <Text style={styles.factTitle}>{ title }</Text>
                { !active && <ChevronDownIcon />}
            </Box>

            { active && <Text style={styles.factText}>{ description }</Text>}

           { 
                active &&  
                <Box style={styles.factFooter}>
                   <ChevronUpIcon />
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
        fontFamily: 'josefin-regular',
        lineHeight: 22
    },
    factFooter: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 16
    }
})
