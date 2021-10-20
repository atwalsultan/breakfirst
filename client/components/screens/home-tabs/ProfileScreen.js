import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Box } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';

const ProfileScreen = ({ navigation }) => {
    return (
        <Box style={styles.container} safeAreaTop>
            <Text style={styles.heading}>Profile</Text>

            <Box style={styles.overview}>
                <Box style={styles.profilePic}></Box>

                <Box>
                    <Text style={styles.name}>Sultan Singh Atwal</Text>
                </Box>

                <Box>
                    <Text style={styles.email}>sultan.singh.atwal@gmail.com</Text>
                </Box>
            </Box>

            <Box style={styles.settings}>
                <Text style={styles.settingsHeading}>Settings</Text>

                <TouchableOpacity>
                    <Box style={styles.card}>
                        <Text style={styles.cardTitle}>Notifications</Text>
                    </Box>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Box style={styles.card}>
                        <Text style={styles.cardTitle}>Add daily schedule</Text>
                    </Box>
                </TouchableOpacity>
                <TouchableOpacity>

                    <Box style={styles.card}>
                        <Text style={styles.cardTitle}>Group management</Text>
                    </Box>
                </TouchableOpacity>

            </Box>

            <TouchableOpacity onPress={() => {
                // So that user can not navigate back to this screen after logging out
                navigation.replace("Login");

                navigation.navigate("Login");
            }}>
                <Text style={styles.logoutLink}>
                    Log out Sultan Singh Atwal
                </Text>
            </TouchableOpacity>
        </Box>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingBottom: 24,
        paddingTop: 34,
        flex: 1,
    },
    heading: {
        fontSize: 25,
        fontWeight: '600',
        marginBottom: 24
    },
    overview: {
        alignItems: 'center',
        marginBottom: 32
    },
    profilePic: {
        height: 74,
        width: 74,
        borderRadius: 37,
        backgroundColor: 'rgba(0,0,0,0.2)',
        marginBottom: 16
    },
    name: {
        fontSize: 18,
        fontWeight: '400',
        marginBottom: 6
    },
    email: {
        fontSize: 16,
        fontWeight: '400',
        color: 'rgba(0,0,0,0.4)'
    },
    settings: {
        marginBottom: 128,
    },
    settingsHeading: {
        fontSize: 18,
        fontWeight: '500',
        marginBottom: 4
    },
    card: {
        paddingHorizontal: 16,
        paddingBottom: 10,
        paddingTop: 13,
        backgroundColor: 'rgba(0,0,0,0.05)',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: '400',
    },
    logoutLink: {
        fontSize: 18,
        fontWeight: '400'
    }
})
