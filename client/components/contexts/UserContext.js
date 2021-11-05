import React, { useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UserContext = React.createContext();

export const useUser = () => {
    return useContext(UserContext);
}

export const UserProvider = (children) => {
    const [user, setUser] = useState(null);

    const getUser = async () => {
        try {
            const user = await AsyncStorage.getItem('user');
            if (user !== null) {
                setUser(JSON.parse(user));
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getUser();
    }, []);
    
    const value = {
        user
    }

    return (
        <UserContext.Provider value={value}>
            { children.children }
        </UserContext.Provider>
    )
}