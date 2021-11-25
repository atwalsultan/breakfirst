import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Box } from 'native-base';

import GroupIcon from '../svgs/GroupIcon';
import LockOpenIcon from '../svgs/LockOpenIcon';

const GroupCard = ({ group, navigation }) => {
    return (
        <TouchableOpacity style={styles.groupCard} onPress={ () => navigation.navigate("LeaderboardScreen", { group }) }>
            <Box style={styles.groupIcon}>
                <GroupIcon />
            </Box>
            <Box>
                <Box style={styles.groupNameLock}>
                    <Text style={styles.groupName}>{group.name}</Text>
                    {group.open ? <LockOpenIcon /> : <LockOpenIcon />}
                </Box>
                <Text style={styles.groupMembers}>{group.members.length} members</Text>
            </Box>
        </TouchableOpacity>
    )
}

export default GroupCard

const styles = StyleSheet.create({
    groupCard: {
        marginBottom: 18,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 16,
        backgroundColor: '#FFFFFF',
        borderRadius: 4
    },
    groupIcon: {
        height: 40,
        width: 40,
        borderRadius: 20,
        backgroundColor: '#FDC4C5',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 12
    },
    groupNameLock: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    groupName: {
        fontSize: 18,
        fontFamily: 'josefin-regular',
        marginRight: 8
    },
    groupMembers: {
        fontFamily: 'josefin-regular',
        color: 'rgba(20, 35, 57, 0.6)',
        fontSize: 16
    },
})
