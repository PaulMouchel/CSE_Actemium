import { useRef, useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Link } from 'react-router-dom'
import { FaUserCircle } from "react-icons/fa"
import ActionButton from '../components/ActionButton.jsx'
import { sendToastError, sendToastSuccess } from "../functions/sendToast";

const ForgotPassword = () => {
    const emailRef = useRef()
    const { resetPassword } = useAuth()
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()
    
        try {
            setLoading(true)
            await resetPassword(emailRef.current.value)
            sendToastSuccess('Un courrier a été envoyé dans votre boite mail')
        } catch {
            sendToastError("Réinitialisation du mot de passe échouée")
        }
    
        setLoading(false)
    }

    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="bg-white rounded flex justify-center items-center flex-col shadow-md">
                <form className="p-10 flex justify-center items-center flex-col" onSubmit={handleSubmit}>
                    <FaUserCircle className="w-20 h-20 text-gray-600 mb-2 text-5xl"/>
                    <p className="mb-5 text-3xl  text-gray-600">Réinitialiser le mot de passe</p>
                    <input type="email" name="email" className="mb-5 p-3 w-80 focus:border-secondary rounded border-2 outline-none" autoComplete="off" placeholder="Email" ref={emailRef} required/>
                    <ActionButton loading={loading} className="w-80" id="forgot-password" type="submit">Réinitialiser le mot de passe</ActionButton>
                </form>
                <div className="text-gray-600 mt-1 mb-2 hover:text-gray-800 hover:underline">
                    <Link to="/login">Se connecter</Link>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword;