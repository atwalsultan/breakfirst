import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Box } from 'native-base';

import ProportionIcon from '../svgs/ProportionIcon';
import InclineTrendIcon from '../svgs/InclineTrendIcon';
import HappyFaceIcon from '../svgs/HappyFaceIcon';
import AmanImage from '../../assets/aman-1.png';
import AbhishekImage from '../../assets/abhishek-1.png';
import QiImage from '../../assets/qi-1.png';
import JasmeetImage from '../../assets/jasmeet-1.png';
import SultanImage from '../../assets/sultan-1.png';
import YuvImage from '../../assets/yuv-1.png';
import ProfileImage from '../../assets/profile-image.png';

const LeaderboardCard = ({ member, index }) => {
    const [active, setActive] = useState(false)

    return (
        <TouchableOpacity style={styles.leaderBoardCard} onPress={() => setActive(!active)}>
            <Box style={styles.inactiveCard}>
                <Text style={styles.cardIndex}>{index + 1}</Text>
                <Box style={styles.profilePicContainer}>
                    { member.name.toString().toLowerCase().includes("sultan") && !member.name.toString().toLowerCase().includes("atwal") && <Image source={SultanImage} style={ styles.profilePic } /> }
                    { member.name.toString().toLowerCase().includes("qi") && <Image source={QiImage} style={ styles.profilePic } /> }
                    { member.name.toString().toLowerCase().includes("abhishek") && <Image source={AbhishekImage} style={ styles.profilePic } /> }
                    { member.name.toString().toLowerCase().includes("aman") && <Image source={AmanImage} style={ styles.profilePic } /> }
                    { member.name.toString().toLowerCase().includes("jasmeet") && <Image source={JasmeetImage} style={ styles.profilePic } /> }
                    { member.name.toString().toLowerCase().includes("yuvraj") && <Image source={YuvImage} style={ styles.profilePic } /> }
                    { member.name.toString().toLowerCase().includes("atwal") && <Image source={ProfileImage} style={ styles.profilePic } /> }
                </Box>

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
    profilePicContainer: {
        marginRight: 16
    },
    profilePic: {
        height: 56,
        width: 56,
        borderRadius: 28,
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
