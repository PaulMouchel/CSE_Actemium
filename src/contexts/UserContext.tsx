import React, { PropsWithChildren, useContext, useEffect, useState } from 'react';
import firebase from 'firebase';

import { useAuth } from './AuthContext';
import { useAdmins } from '../hooks/useAdmins';

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
    const docs = useAdmins();

    useEffect(() => {
        if (currentUser?.email && docs && docs[0]) {
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