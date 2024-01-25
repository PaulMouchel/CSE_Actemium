import { PropsWithChildren, useContext, useEffect, useState, createContext } from 'react';
import { auth } from "../firebase/config";
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
        return signInWithEmailAndPassword(auth, email, password)
    }

    function logout() {
        return signOut(auth)
    }

    function resetPassword(email: string) {
        return sendPasswordResetEmail(auth, email)
    }

    useEffect(() => {
        const unsuscribe = auth.onAuthStateChanged(user => {
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