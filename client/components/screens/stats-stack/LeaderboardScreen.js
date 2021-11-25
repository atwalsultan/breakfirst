import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Box, ChevronLeftIcon, ScrollView } from 'native-base';

import { useUser } from "../../contexts/UserContext";
import LeaderboardCard from '../../cards/LeaderboardCard';
import LeaderBoardList from '../../lists/LeaderBoardList';

const LeaderboardScreen = ({ route, navigation }) => {
    const { user } = useUser();
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const [members, setMembers] = useState([]);

    const getMemberData = async () => {
        const response = await fetch("http://192.168.1.92:8080/app/groups/members", {
            method: "POST",
            headers: {
                "authorization": `Bearer ${user.token}`,
                "content-type": "application/json",
            },
            body: JSON.stringify({
                members: route.params.group.members,
            }),
        });

        const responseJson = await response.json();
        setMembers(responseJson);
    }

    useEffect(() => {
        getMemberData();
    }, [])

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <Box style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <ChevronLeftIcon />
                </TouchableOpacity>
                <Text style={styles.headerText}>{route.params.group.name}</Text>
            </Box>

            <Text style={styles.heading}>Leaderboard</Text>

            <Box style={styles.dateMembers}>
                <Text style={styles.dateMembersText}>{months[new Date().getMonth()]} {new Date().getDate()}</Text>
                <Text style={styles.dateMembersText}>{members.length} members</Text>
            </Box>

            <LeaderBoardList members={members} />
        </ScrollView>
    )
}

export default LeaderboardScreen

const styles = StyleSheet.create({
    container: {
        marginTop: 24
    },
    header: {
        marginBottom: 16,
        flexDirection: 'row'
    },
    headerText: {
        fontFamily: "josefin-semi-bold",
        fontSize: 20,
        marginLeft: 8
    },
    heading: {
        fontSize: 20,
        fontFamily: 'josefin-regular',
        marginBottom: 8
    },
    dateMembers: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 24
    },
    dateMembersText: {
        fontSize: 14,
        fontFamily: 'josefin-regular',
        color: 'rgba(20, 35, 57, 0.6)'
    },
})
