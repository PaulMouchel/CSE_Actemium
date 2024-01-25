import { PropsWithChildren, useContext, useEffect, useState, createContext } from 'react';
import { projectAuth } from "../firebase/config";
import { signInWithEmailAndPassword, sendPasswordResetEmail, signOut, UserInfo } from 'firebase/auth'

export const AuthContext = createContext<{
    currentUser: UserInfo | null
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
    const [currentUser, setCurrentUser] = useState<UserInfo | null>(null)
    const [loading, setLoading] = useState(true)

    function login(email: string, password: string) {
        return signInWithEmailAndPassword(projectAuth, email, password)
    }

    function logout() {
        return signOut(projectAuth)
    }

    function resetPassword(email: string) {
        return sendPasswordResetEmail(projectAuth, email)
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