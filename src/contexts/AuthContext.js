import React, { useContext, useEffect, useState } from 'react';
import { projectAuth } from "../firebase/config";
import useFirestore from '../hooks/useFirestore';

export const AuthContext = React.createContext();


export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const [isAdmin, setIsAdmin] = useState(false)
    const [loading, setLoading] = useState(true)
    const { docs } = useFirestore('Admins', currentUser);

    // function signup(email, password) {
    //     return projectAuth.createUserWithEmailAndPassword(email, password)
    // }

    function login(email, password) {
        return projectAuth.signInWithEmailAndPassword(email, password)
    }

    function logout() {
        return projectAuth.signOut()
    }

    function resetPassword(email) {
        return projectAuth.sendPasswordResetEmail(email)
    }

    // function updateEmail(email) {
    //     return currentUser.updateEmail(email)
    // }

    // function updatePassword(password) {
    //     return currentUser.updatePassword(password)
    // }

    useEffect(() => {
        const unsuscribe = projectAuth.onAuthStateChanged(user => {
            setCurrentUser(user);
            if (user && docs && docs[0]) {
                setIsAdmin(docs[0].list.includes(user.email))
            } else setIsAdmin(false)
            setLoading(false)
        })
        return () => unsuscribe();
    }, [docs])

    const value = {
        currentUser,
        isAdmin,
        login,
        // signup,
        logout,
        resetPassword,
        // updateEmail,
        // updatePassword
      }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}