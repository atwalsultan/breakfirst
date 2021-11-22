import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native';
import { Box, View } from 'native-base';

import ChevronLeftIcon from '../../svgs/ChevronLeftIcon';
import CloseIcon from '../../svgs/CloseIcon';

const SetLabelScreen = ({ navigation, route }) => {
    const [text, setText] = useState("");
    const label = route.params.label;

    return (
        <Box style={styles.container} safeAreaTop>
            <Box style={styles.header}>
                <TouchableOpacity onPress={() => {
                    navigation.goBack();
                }}>
                    <ChevronLeftIcon header={true} />
                </TouchableOpacity>
                <Text style={styles.heading}>Label</Text>
                <View style={{ width: '5%' }}></View>
            </Box>

            <View style={styles.inputContainer}>
                <TextInput placeholder={label} style={styles.input} onChangeText={(value) => setText(value)} />
                { text !== "" && <CloseIcon /> }
            </View>
        </Box>
    )
}

export default SetLabelScreen

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingBottom: 24,
        paddingTop: 34,
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 16
    },
    heading: {
        fontSize: 20,
        fontFamily: 'josefin-semi-bold'
    },
    inputContainer: {
        backgroundColor: '#FFFFFF',
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    input: {
        fontSize: 18,
        fontFamily: 'josefin-regular',
    }
})