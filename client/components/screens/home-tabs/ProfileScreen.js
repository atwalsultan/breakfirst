import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Box } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useUser } from '../../contexts/UserContext';
import LogoutModal from '../../modals/LogoutModal';
import ProfileImage from '../../svgs/ProfileImage';
import ChangeScheduleIcon from '../../svgs/ChangeScheduleIcon';
import NotificationIcon from '../../svgs/NotificationIcon';
import ScheduleIcon from '../../svgs/ScheduleIcon';
import LogoutIcon from '../../svgs/LogoutIcon';

const ProfileScreen = ({ navigation }) => {
    const { user } = useUser();
    const [modal, setModal] = useState(false);
    const [schedule, setSchedule] = useState(null);

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

    const getSchedule = async () => {
		const url = `http://3.98.75.199/app/schedule?id=${user["id"]}`;
		const response = await fetch(url, {
			method: "GET",
			headers: {
				authorization: `Bearer ${user.token}`,
			},
		});

		if (response.status == 200) {
			const responseJson = await response.json();
			setSchedule(responseJson);
		} else {
			const responseJson = await response.json();
			console.log(responseJson);
		}
	};

    useEffect(() => {
		getSchedule();
	}, []);

    return (
        <>
            <Box style={styles.container} safeAreaTop>
                <Text style={styles.heading}>Profile</Text>

                <Box style={styles.overview}>
                    <ProfileImage />

                    <Box style={ styles.nameContainer }>
                        <Text style={styles.name}>{ user.username }</Text>
                        <TouchableOpacity><ChangeScheduleIcon /></TouchableOpacity>
                    </Box>

                    <Box>
                        <Text style={styles.email}>{ user.email }</Text>
                    </Box>
                </Box>

                <Box style={styles.settings}>
                    <Text style={styles.settingsHeading}>Settings</Text>

                    <TouchableOpacity>
                        <Box style={styles.card}>
                            <NotificationIcon />
                            <Text style={styles.cardTitle}>Notifications</Text>
                        </Box>
                    </TouchableOpacity>

                    { !schedule && 
                        <TouchableOpacity>
                            <Box style={styles.card}>
                                <ScheduleIcon />
                                <Text style={styles.cardTitle}>Add daily schedule</Text>
                            </Box>
                        </TouchableOpacity>
                    }

                    {/* <TouchableOpacity>
                        <Box style={styles.card}>
                            <Text style={styles.cardTitle}>Group management</Text>
                        </Box>
                    </TouchableOpacity> */}
                </Box>

                <Text style={styles.settingsHeading}>Account</Text>
                <TouchableOpacity onPress={() => {
                    setModal(true);
                }}>
                    <Box style={styles.card}>
                        <LogoutIcon />
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
    nameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    name: {
        fontSize: 18,
        fontFamily: 'josefin-regular',
        marginBottom: 6,
        marginRight: 6
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
        alignItems: 'center',
        marginBottom: 16
    },
    cardTitle: {
        fontSize: 18,
        fontFamily: 'josefin-regular',
        marginLeft: 6
    },
})
