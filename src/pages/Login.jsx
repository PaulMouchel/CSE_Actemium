import React, { useRef, useState } from "react"

import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from 'react-router-dom'
import {motion} from 'framer-motion'

import { faUserCircle, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Login = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login, currentUser } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()
    
        try {
            setError("")
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push('/')
        } catch(e) {
            setError("Connexion échouée " + e)
        }
        setLoading(false)
    }



    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="bg-white rounded flex justify-center items-center flex-col shadow-md">
                <form className="p-10 flex justify-center items-center flex-col" onSubmit={handleSubmit}>
                    <FontAwesomeIcon icon={faUserCircle} className="w-20 h-20 text-gray-600 mb-2 text-5xl"/>
                    <p className="mb-5 text-3xl  text-gray-600">{currentUser && currentUser.email} Connexion</p>
                    {error && <span className="text-gray-50 bg-red-500 py-1 px-2 mb-2 -mt-2 rounded">{error}</span>}
                    <input type="email" name="email" className="mb-5 p-3 w-80 focus:border-primary rounded border-2 outline-none" autoComplete="on" placeholder="Email" ref={emailRef} required/>
                    <input type="password" name="password" className="mb-5 p-3 w-80 focus:border-primary rounded border-2 outline-none" autoComplete="off" placeholder="Mot de passe" ref={passwordRef} required/>
                    { !loading ?
                        <motion.button disabled={loading} className="bg-primary text-white font-bold p-2 rounded w-80" id="login" type="submit"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}><span>Se connecter</span></motion.button>
                        :
                        <button disabled={loading} className="bg-primary text-white font-bold p-2 rounded w-80" id="login" type="submit"><FontAwesomeIcon className="animate-spin" icon={faSpinner}/></button>
                    }
                </form>
                <div className="text-gray-600 mt-1 mb-2 hover:text-gray-800 hover:underline">
                    <Link to="/forgot-password">Mot de passe oublié ?</Link>
                </div>
            </div>
        </div>
    )
}

export default Login;