import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GroupCard from '../cards/GroupCard';

const GroupList = ({ groups,  user, navigation }) => {
    return (
        groups.map((group, index) => {
            if (group.members.includes(user.id)) {
                return (
                    <GroupCard group={group} key={index} navigation={ navigation } />
                )
            }
        })
    )
}

export default GroupList

const styles = StyleSheet.create({})
