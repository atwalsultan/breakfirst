import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { Box } from 'native-base';
import CongratulationsCatImage from '../svgs/CongratulationsCatImage';
import CatImage from '../../assets/cat-image.png';

const ExerciseCompleteModal = ({ setFinished, navigation }) => {
    return (
        <Box style={styles.container}>
            <Box style={styles.modal}>
                <Text style={styles.header}>Congrats!</Text>

                <Box style={styles.imageContainer}>
                    <Image source={CatImage} style={styles.image} />
                </Box>

                <Text style={ styles.text }>Like this exercise?</Text>
                <Text style={ styles.text }>Find more in the library!</Text>

                <TouchableOpacity
                    onPress={() => {
                        setFinished(false);
                        navigation.navigate("Library")
                    }}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Go to library</Text>
                </TouchableOpacity>
            </Box>
        </Box>
    )
}

export default ExerciseCompleteModal

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
        top: '26%',
        left: '13%',
        borderRadius: 4
    },
    header: {
        fontSize: 32,
        fontFamily: 'josefin-regular',
        marginBottom: 25,
        textAlign: 'center'
    },
    imageContainer: {
        marginBottom: 16,
        alignSelf: 'center',
    },
    image: {
        height: 98,
        width: 98
    },
    text: {
        fontSize: 16,
        fontFamily: 'josefin-regular',
        textAlign: 'center',
        lineHeight: 25
    },
    button: {
        backgroundColor: '#355C97',
        marginTop: 16,
        height: 48,
        justifyContent: "center",
        width: "80%",
        alignSelf: "center",
        borderRadius: 24,
        marginBottom: 24,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontFamily: 'josefin-regular',
        textAlign: 'center',
        position: 'relative',
        top: -2
    }
})
