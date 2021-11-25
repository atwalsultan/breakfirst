import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Box } from 'native-base';

import ProportionIcon from '../svgs/ProportionIcon';
import InclineTrendIcon from '../svgs/InclineTrendIcon';
import HappyFaceIcon from '../svgs/HappyFaceIcon';

const LeaderboardCard = ({ member, index }) => {
    return (
        <TouchableOpacity style={styles.leaderBoardCard}>
            <Text style={styles.cardIndex}>{index + 1}</Text>
            <Box style={styles.profilePic}></Box>

            <Box style={styles.memberInfo}>
                <Text style={styles.memberName}>{member.name}</Text>
                <Box style={styles.memberScoreInfo}>
                    <Text style={styles.memberScoreInfoText}>{member.points} pts</Text>
                    <ProportionIcon />
                    <InclineTrendIcon />
                    <HappyFaceIcon />
                </Box>
            </Box>
        </TouchableOpacity>
    )
}

export default LeaderboardCard

const styles = StyleSheet.create({
    leaderBoardCard: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        backgroundColor: '#FFFFFF',
        marginBottom: 16,
        flexDirection: 'row',
        alignItems: 'center',
    },
    cardIndex: {
        fontSize: 20,
        fontFamily: 'josefin-regular',
        marginRight: 16
    },
    profilePic: {
        height: 56,
        width: 56,
        borderRadius: 28,
        backgroundColor: 'rgba(0,0,0,0.2)',
        marginRight: 16
    },
    memberInfo: {
        flexGrow: 1,
    },
    memberName: {
        fontSize: 18,
        fontFamily: 'josefin-regular',
        marginBottom: 8
    },
    memberScoreInfo: {
        flexDirection: 'row'
    },
    memberScoreInfoText: {
        fontSize: 16,
        fontFamily: 'josefin-regular',
        color: 'rgba(20, 35, 57, 0.6)',
        marginRight: 16
    }
})
