import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { useUser } from '../contexts/UserContext';

const OBNextButton = ({ navigation, next, selected }) => {
    const { user } = useUser();

    const updateGoal = async () => {
        const url = 'http://192.168.1.92:8080/app/onboarding/goal';
        const response = await fetch(url, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${user.token}`
            },
            body: JSON.stringify({
                "id": user.id,
                "goal": selected
            })
        });

        if(response.status == 200) {
            navigation.navigate(next);
        }
        else {
            const responseJsonArray = await response.json();  // Get response text
            console.log(responseJsonArray);
        }
    }

    const updateWorkspace = async () => {
        const url = 'http://192.168.1.92:8080/app/onboarding/workspace';
        const response = await fetch(url, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${user.token}`
            },
            body: JSON.stringify({
                "id": user.id,
                "workspace": selected
            })
        });

        if(response.status == 200) {
            navigation.navigate(next);
        }
        else {
            const responseJsonArray = await response.json();  // Get response text
            console.log(responseJsonArray);
        }
    }

    return (
        <TouchableOpacity style={styles.roundButton} onPress={() => {
            if(next === "OB2") {
                updateGoal();
            }
            else if(next === "OB3") {
                updateWorkspace();
            }
            else {
                navigation.navigate(next);
            }
        }}>
            <AntDesign name="arrowright" size={24} color="#FFFFFF" />
        </TouchableOpacity>
    )
}

export default OBNextButton

const styles = StyleSheet.create({
    roundButton: {
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 80,
        backgroundColor: "#F94144",
        alignSelf: 'center'
    },
})
