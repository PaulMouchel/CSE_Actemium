import React, { useContext, useEffect, useState } from 'react';
import useFirestore from '../hooks/useFirestore';

import { useAuth } from './AuthContext';

export const UserContext = React.createContext();


export function useUser() {
    return useContext(UserContext)
}

export function UserProvider({ children }) {
    const { currentUser } = useAuth()
    const [isAdmin, setIsAdmin] = useState(false)
    const [loading, setLoading] = useState(true)
    const { docs } = useFirestore('Admins');

    useEffect(() => {
        if (currentUser && docs && docs[0]) {
            setIsAdmin(docs[0].list.includes(currentUser.email))
        } else setIsAdmin(false)
        setLoading(false)
    }, [docs, currentUser])

    const value = {
        currentUser,
        isAdmin,
    }

    return (
        <UserContext.Provider value={value}>
            {!loading && children}
        </UserContext.Provider>
    )
}