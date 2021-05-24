import React, { useRef, useState } from "react"

import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from 'react-router-dom'

import { faUserCircle, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const UpdatePassword = () => {
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { currentUser, updatePassword } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    function handleSubmit(e) {
        e.preventDefault()
    
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Les mots de passe ne correspondent pas")
        }

        const promises = []
        setLoading(true)
        setError("")
        if (passwordRef.current.value) {
            promises.push(updatePassword(passwordRef.current.value))
        }

        Promise.all(promises).then(() => {
            history.push('/')
        }).catch((e) => {
            setError("Echec de la mise à jour : " + e)
        }).finally(() => {
            setLoading(false)
        })
    }



    return (
        <>
            <div className="w-screen h-screen flex justify-center items-center bg-gradient-to-t from-yellow-200 to-yellow-500 bg-beach">
                <div className="bg-white rounded flex justify-center items-center flex-col shadow-md">
                    <form className="p-10 flex justify-center items-center flex-col" onSubmit={handleSubmit}>
                        <FontAwesomeIcon icon={faUserCircle} className="w-20 h-20 text-gray-600 text-5xl"/>
                        <p className="text-gray-600 -mt-2 mb-2">{currentUser.email}</p>
                        <p className="mb-5 text-3xl  text-gray-600">Changer de mot de passe</p>
                        {error && <span className="text-gray-50 bg-red-500 py-1 px-2 mb-2 -mt-2 rounded">{error}</span>}
                        
                        
                        <input type="password" name="password" className="mb-5 p-3 w-80 focus:border-green-400 rounded border-2 outline-none" autocomplete="off" placeholder="Mot de passe" ref={passwordRef} required/>
                        <input type="password" name="password-confirm" className="mb-5 p-3 w-80 focus:border-green-400 rounded border-2 outline-none" autocomplete="off" placeholder="Confirmez le mot de passe" ref={passwordConfirmRef} required/>
                        { !loading ?
                            <button disabled={loading} className="transition duration-500 ease-in-out bg-green-400 hover:bg-green-500 text-white font-bold p-2 rounded w-80" id="login" type="submit"><span>Mettre à jour</span></button>
                            :
                            <button disabled={loading} className="transition duration-500 ease-in-out bg-green-400 hover:bg-green-500 text-white font-bold p-2 rounded w-80" id="login" type="submit"><FontAwesomeIcon className="animate-spin" icon={faSpinner}/></button>
                        }
                    </form>
                    <div className="text-gray-600 mt-1 mb-2 hover:text-gray-800 hover:underline">
                    <Link to="/">Annuler</Link>
                    </div>
                </div>
            </div>


        </>
    )
    
}

export default UpdatePassword;