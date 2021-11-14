import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Box } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useUser } from '../../contexts/UserContext';
import LogoutModal from '../../modals/LogoutModal';
import ProfileImage from '../../svgs/ProfileImage';

const ProfileScreen = ({ navigation }) => {
    const { user } = useUser();
    const [modal, setModal] = useState(false);

    const logout = async () => {
        try {
            await AsyncStorage.removeItem('user');
            //  So that user can not navigate back to this page after logging out
            navigation.replace("Login");
        }
        catch(e) {
            console.log(e);
        }
    }

    return (
        <>
            <Box style={styles.container} safeAreaTop>
                <Text style={styles.heading}>Profile</Text>

                <Box style={styles.overview}>
                    <ProfileImage />

                    <Box>
                        <Text style={styles.name}>{ user.username }</Text>
                    </Box>

                    <Box>
                        <Text style={styles.email}>{ user.email }</Text>
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

                <Text style={styles.settingsHeading}>Account</Text>
                <TouchableOpacity onPress={() => {
                    setModal(true);
                }}>
                    <Box style={styles.card}>
                        <Text style={styles.cardTitle}>Log out { user.username }</Text>
                    </Box>
                </TouchableOpacity>
            </Box>
            {modal && <LogoutModal logout={ logout } setModal={ setModal } /> }
        </>
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
        fontFamily: 'josefin-semi-bold',
        marginBottom: 24
    },
    overview: {
        alignItems: 'center',
        marginBottom: 32
    },
    name: {
        fontSize: 18,
        fontFamily: 'josefin-regular',
        marginBottom: 6
    },
    email: {
        fontSize: 16,
        fontFamily: 'josefin-regular',
        color: 'rgba(0,0,0,0.4)'
    },
    settings: {
        marginBottom: 24,
    },
    settingsHeading: {
        fontSize: 20,
        fontFamily: 'josefin-regular',
        marginBottom: 4
    },
    card: {
        paddingHorizontal: 16,
        paddingBottom: 10,
        paddingTop: 13,
        backgroundColor: '#FFFFFF',
        borderRadius: 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16
    },
    cardTitle: {
        fontSize: 18,
        fontFamily: 'josefin-regular',
    },
})
