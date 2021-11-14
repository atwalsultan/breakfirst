import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Box } from 'native-base';

const DeleteModal = ({ deleteRoutine, setModal }) => {
    return (
        <Box style={ styles.container }>
            <Box style={ styles.modal }>
                <Text style={ styles.header }>Delete this task schedule?</Text>

                <TouchableOpacity 
                    onPress={ () => {
                        setModal(false);
                        deleteRoutine();
                    } } 
                    style={ styles.deleteButton }
                >
                    <Text style={ styles.deleteButtonText }>Delete</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={ () => setModal(false) } style={ styles.cancelButton }>
                    <Text style={ styles.cancelButtonText }>Cancel</Text>
                </TouchableOpacity>
            </Box>
        </Box>
    )
}

export default DeleteModal

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.7)'
    },
    modal: {
        backgroundColor: '#FFFFFF',
        paddingVertical: 32,
        paddingHorizontal: 24,
        width: '74%',
        top: '32%',
        left: '13%',
        borderRadius: 4
    },
    header: {
        fontSize: 20,
        fontFamily: 'josefin-regular',
        marginBottom: 32,
    },
    deleteButton: {
        backgroundColor: '#F94144',
        paddingVertical: 13,
        alignItems: 'center',
        borderRadius: 24,
        marginBottom: 24
    },
    deleteButtonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontFamily: 'josefin-regular',
    },
    cancelButton: {
        alignItems: 'center'
    },
    cancelButtonText: {
        fontSize: 18,
        color: '#142339',
        fontFamily: 'josefin-regular'
    }
})
