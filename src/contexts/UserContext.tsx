import React, { PropsWithChildren, useContext, useEffect, useState } from 'react';
import useFirestore from '../hooks/useFirestore';
import firebase from 'firebase';

import { useAuth } from './AuthContext';

export const UserContext = React.createContext<{
    currentUser: firebase.User | null
    isAdmin: boolean
}>({
    currentUser: null,
    isAdmin: false
});


export function useUser() {
    return useContext(UserContext)
}

export function UserProvider({ children }: PropsWithChildren) {
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