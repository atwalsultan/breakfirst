import React from 'react';
import { StyleSheet } from 'react-native';

import LeaderboardCard from '../cards/LeaderboardCard';

const LeaderBoardList = ({ members }) => {
    return members.map((member, index) => (
        <LeaderboardCard key={ index } member={ member } index={ index } />
     ))
}

export default LeaderBoardList

const styles = StyleSheet.create({})
