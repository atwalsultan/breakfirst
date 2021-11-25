import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Box } from 'native-base';

import AddIconWhite from '../../svgs/AddIconWhite';
import { useUser } from "../../contexts/UserContext";
import GroupList from '../../lists/GroupList';

const GroupScreen = ({ navigation }) => {
    const { user } = useUser();
    const [groups, setGroups] = useState([])

    const getGroups = async () => {
        const url = "http://192.168.1.92:8080/app/groups";
        const response = await fetch(url, {
            method: "GET",
            headers: {
                authorization: `Bearer ${user.token}`,
            },
        });

        if (response.status == 200) {
            const responseJsonArray = await response.json(); // Get response text
            setGroups(responseJsonArray);
        }
    };

    useEffect(() => {
        getGroups();
    }, []);
    return (
        <Box style={styles.container}>
            <Text style={styles.heading}>Groups</Text>

            <GroupList groups={ groups } user={ user } navigation={ navigation } />

            <TouchableOpacity style={styles.newGroupMarker}>
                <AddIconWhite />
            </TouchableOpacity>
        </Box>
    )
}

export default GroupScreen

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    heading: {
        fontSize: 20,
        fontFamily: 'josefin-semi-bold',
        marginTop: 8,
        marginBottom: 16
    },
    newGroupMarker: {
        height: 56,
        width: 56,
        borderRadius: 28,
        position: 'absolute',
        right: 10,
        bottom: 55,
        backgroundColor: '#F94144',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5
    }
})
