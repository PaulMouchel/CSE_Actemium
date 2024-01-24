import { useRef, useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from 'react-router-dom'
import { FaUserCircle } from "react-icons/fa"
import ActionButton from '../components/ActionButton.jsx'
import { sendToastError, sendToastSuccess } from "../functions/sendToast";

const Login = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login, currentUser } = useAuth()
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()
        
        try {
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            sendToastSuccess("Connexion réussie")
            history.push('/')
        } catch(error) {
            if ( error?.code === "auth/user-not-found") {
                sendToastError("Connexion échouée : Utilisateur inconnu")
            } else if ( error?.code === "auth/wrong-password" ) {
                sendToastError("Connexion échouée : Mot de passe incorrect")
            } else if ( error?.code === "auth/too-many-requests" ) {
               sendToastError("Connexion échouée : Compte temporairement bloqué (trop de tentatives échouées)")
           } else {
                sendToastError("Connexion échouée :" + error)
            }
            setLoading(false)
        }
    }

    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="bg-white rounded flex justify-center items-center flex-col shadow-md">
                <form className="p-10 flex justify-center items-center flex-col" onSubmit={handleSubmit}>
                    <FaUserCircle className="w-20 h-20 text-gray-600 mb-2 text-5xl"/>
                    <p className="mb-5 text-3xl  text-gray-600">{currentUser && currentUser.email} Connexion</p>
                    <input type="email" name="email" className="mb-5 p-3 w-80 focus:border-secondary rounded border-2 outline-none" autoComplete="on" placeholder="Email" ref={emailRef} required/>
                    <input type="password" name="password" className="mb-5 p-3 w-80 focus:border-secondary rounded border-2 outline-none" autoComplete="off" placeholder="Mot de passe" ref={passwordRef} required/>
                    <ActionButton loading={loading} className="w-80" id="login" type="submit">Se connecter</ActionButton>
                </form>
                <div className="text-gray-600 mt-1 mb-2 hover:text-gray-800 hover:underline">
                    <Link to="/forgot-password">Mot de passe oublié ?</Link>
                </div>
            </div>
        </div>
    )
}

export default Login;