import React, { useRef, useState } from "react"

import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from 'react-router-dom'

import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Signup = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()
    
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Les mots de passe sont différents")
        }
    
        try {
            setError("")
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            history.push('/')
        } catch {
            setError("Création de compte échouée")
        }
        setLoading(false)
    }

    return (
        <div className="w-screen h-screen flex justify-center items-center bg-gradient-to-t from-yellow-200 to-yellow-500 bg-beach">
            <div className="bg-white rounded flex justify-center items-center flex-col shadow-md">
                <form className="p-10 flex justify-center items-center flex-col" onSubmit={handleSubmit}>
                    <FontAwesomeIcon icon={faUserCircle} className="w-20 h-20 text-gray-600 mb-2 text-5xl"/>
                    <p className="mb-5 text-3xl  text-gray-600">Créer un compte</p>
                    {error && <span variant="danger">{error}</span>}
                    <input type="email" name="email" className="mb-5 p-3 w-80 focus:border-green-400 rounded border-2 outline-none" autocomplete="off" placeholder="Email" ref={emailRef} required/>
                    <input type="password" name="password" className="mb-5 p-3 w-80 focus:border-green-400 rounded border-2 outline-none" autocomplete="off" placeholder="Mot de passe" ref={passwordRef} required/>
                    <input type="password" name="password-confirm" className="mb-5 p-3 w-80 focus:border-green-400 rounded border-2 outline-none" autocomplete="off" placeholder="Confirmer le mot de passe" ref={passwordConfirmRef} required/>
                    <button disabled={loading} className="transition duration-500 ease-in-out bg-green-400 hover:bg-green-500 text-white font-bold p-2 rounded w-80" id="login" type="submit"><span>Se connecter</span></button>
                </form>
                <div className="text-gray-600 mt-1 mb-2">
                    Vous avez déjà un compte ? <Link className="hover:text-gray-800 hover:underline" to="/login">Connexion</Link>
                </div>
            </div>
        </div>
    )
}

export default Signup;