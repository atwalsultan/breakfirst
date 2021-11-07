import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Box } from 'native-base';

const DaysList = ({ selectedDays, setSelectedDays }) => {
    return (
        <Box style={styles.days}>
            <TouchableOpacity
                style={[styles.day, { backgroundColor: selectedDays.monday === false ? '#F4F4F4' : '#355C97' }]}
                onPress={() => {
                    setSelectedDays({ ...selectedDays, monday: !selectedDays.monday })
                }}
            >
                <Text style={{ color: selectedDays.monday === true ? '#FFFFFF' : 'black' }}>M</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.day, { backgroundColor: selectedDays.tuesday === false ? '#F4F4F4' : '#355C97' }]}
                onPress={() => {
                    setSelectedDays({ ...selectedDays, tuesday: !selectedDays.tuesday })
                }}
            >
                <Text style={{ color: selectedDays.tuesday === true ? '#FFFFFF' : 'black' }}>T</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.day, { backgroundColor: selectedDays.wednesday === false ? '#F4F4F4' : '#355C97' }]}
                onPress={() => {
                    setSelectedDays({ ...selectedDays, wednesday: !selectedDays.wednesday })
                }}
            >
                <Text style={{ color: selectedDays.wednesday === true ? '#FFFFFF' : 'black' }}>W</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.day, { backgroundColor: selectedDays.thursday === false ? '#F4F4F4' : '#355C97' }]}
                onPress={() => {
                    setSelectedDays({ ...selectedDays, thursday: !selectedDays.thursday })
                }}
            >
                <Text style={{ color: selectedDays.thursday === true ? '#FFFFFF' : 'black' }}>T</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.day, { backgroundColor: selectedDays.friday === false ? '#F4F4F4' : '#355C97' }]}
                onPress={() => {
                    setSelectedDays({ ...selectedDays, friday: !selectedDays.friday })
                }}
            >
                <Text style={{ color: selectedDays.friday === true ? '#FFFFFF' : 'black' }}>F</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.day, { backgroundColor: selectedDays.saturday === false ? '#F4F4F4' : '#355C97' }]}
                onPress={() => {
                    setSelectedDays({ ...selectedDays, saturday: !selectedDays.saturday })
                }}
            >
                <Text style={{ color: selectedDays.saturday === true ? '#FFFFFF' : 'black' }}>S</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.day, { backgroundColor: selectedDays.sunday === false ? '#F4F4F4' : '#355C97' }]}
                onPress={() => {
                    setSelectedDays({ ...selectedDays, sunday: !selectedDays.sunday })
                }}
            >
                <Text style={{ color: selectedDays.sunday === true ? '#FFFFFF' : 'black' }}>S</Text>
            </TouchableOpacity>
        </Box>
    )
}

export default DaysList

const styles = StyleSheet.create({
    days: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    day: {
        height: 36,
        width: 36,
        borderRadius: 18,
        alignItems: 'center',
        justifyContent: 'center'
    },
})
