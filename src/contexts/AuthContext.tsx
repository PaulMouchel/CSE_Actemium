import { PropsWithChildren, useContext, useEffect, useState, createContext } from 'react';
import { projectAuth } from "../firebase/config";
import firebase from 'firebase'

export const AuthContext = createContext<{
    currentUser: firebase.User | null
    login: (email: string, password: string) => void,
    logout: () => void,
    resetPassword: (email: string) => void,
}>({
    currentUser: null,
    login: () => {},
    logout: () => {},
    resetPassword: () => {},
})

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }: PropsWithChildren) {
    const [currentUser, setCurrentUser] = useState<firebase.User | null>(null)
    const [loading, setLoading] = useState(true)

    function login(email: string, password: string) {
        return projectAuth.signInWithEmailAndPassword(email, password)
    }

    function logout() {
        return projectAuth.signOut()
    }

    function resetPassword(email: string) {
        return projectAuth.sendPasswordResetEmail(email)
    }

    useEffect(() => {
        const unsuscribe = projectAuth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false)
        })
        return () => unsuscribe();
    }, [])

    const value = {
        currentUser,
        login,
        logout,
        resetPassword
      }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}