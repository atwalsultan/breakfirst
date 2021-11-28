import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Box } from 'native-base';

import ProportionIcon from '../svgs/ProportionIcon';
import InclineTrendIcon from '../svgs/InclineTrendIcon';
import HappyFaceIcon from '../svgs/HappyFaceIcon';

const LeaderboardCard = ({ member, index }) => {
    const [active, setActive] = useState(false)

    return (
        <TouchableOpacity style={styles.leaderBoardCard} onPress={() => setActive(!active)}>
            <Box style={styles.inactiveCard}>
                <Text style={styles.cardIndex}>{index + 1}</Text>
                <Box style={styles.profilePic}></Box>

                <Box style={styles.memberInfo}>
                    <Text style={styles.memberName}>{member.name}</Text>
                    <Box style={styles.memberScoreInfo}>
                        <Text style={styles.memberScoreInfoText}>{ 5 * (10 - index) - 15} pts</Text>
                        {
                            !active && 
                            <>
                                <ProportionIcon />
                                <InclineTrendIcon />
                                <HappyFaceIcon />
                            </>
                        }
                    </Box>
                </Box>
            </Box>

            { 
                active && 
                <Box style={ styles.activeInfo }>
                    <Box style={ styles.activeInfoColoumn }>
                        <ProportionIcon />
                        <Text style={ styles.activeInfoTextPrimary }>Average sitting time</Text>
                        <Text style={ styles.activeInfoTextSecondary }>25%</Text>
                    </Box>
                    <Box style={ styles.activeInfoColoumn }>
                        <InclineTrendIcon />
                        <Text style={ styles.activeInfoTextPrimary }>Compared to last week</Text>
                        <Text style={ styles.activeInfoTextSecondary }>34%</Text>
                    </Box>
                    <Box style={ styles.activeInfoColoumn }>
                        <HappyFaceIcon />
                        <Text style={ styles.activeInfoTextPrimary }>Lifestyle assessment</Text>
                        <Text style={ styles.activeInfoTextSecondary }>Healthy</Text>
                    </Box>
                </Box>
            }
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
    },
    inactiveCard: {
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
    },
    activeInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 16
    },
    activeInfoColoumn: {
        alignItems: 'center',
        flexBasis: 1,
        flexGrow: 1
    },
    activeInfoTextPrimary: {
        fontSize: 16,
        fontFamily: 'josefin-regular',
        marginTop: 16,
        marginBottom: 6,
        textAlign: 'center'
    },
    activeInfoTextSecondary: {
        fontSize: 16,
        fontFamily: 'josefin-regular',
        color: '#355C97'
    }
})
