import React, { useRef, useState } from "react"

import { Link, useHistory } from 'react-router-dom'
import useFirestore from '../hooks/useFirestore';
import { projectFirestore, timestamp } from '../firebase/config';

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ActionButton from '../components/ActionButton.jsx'

const UpdateQuotation = () => {
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    const { docs } = useFirestore('Quotation');

    const textRef = useRef();
    const authorRef = useRef();

    const uploadToDatabase = async (author, text) => {
        const collectionRef = projectFirestore.collection('Quotation');
        const createdAt = timestamp();
        if (docs[0]) {
            await collectionRef.doc(docs[0].id).update({ text, author, createdAt })
        } else {
            await collectionRef.add({ text, author, createdAt });
        }
        setLoading(false)
        history.push('/')
     }
    
    const handleSubmit = (e) => {
        e.preventDefault()

        let text = textRef.current.value
        let author = authorRef.current.value

        if (text !== "") {
            setLoading(true)
            uploadToDatabase(author, text)
        }
    }

    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="bg-white rounded flex justify-center items-center flex-col shadow-md">
                <div className="w-full p-3">
                <Link to="/" className="transform duration-300 ease-in-out bg-secondary hover:bg-white text-white hover:text-secondary rounded-full block w-10 h-10 flex items-center justify-center">
                    <FontAwesomeIcon icon={faArrowLeft} />
                </Link>
                </div>
                <form className="p-10 pt-0 flex justify-center items-center flex-col" onSubmit={handleSubmit}>
                    <p className="mb-5 text-3xl text-gray-600">Phrase du moment</p>
                    <textarea 
                        type="text" 
                        name="quotationText" 
                        className="italic resize-none mb-5 p-3 w-full h-64 focus:border-secondary rounded border-2 outline-none" 
                        autoComplete="off" 
                        placeholder="Phrase du jour" 
                        ref={textRef} 
                        defaultValue={docs[0] ? docs[0].text : ""} 
                        required/>
                    <input 
                        type="text" 
                        name="quotationAuthor"
                        className="italic resize-none  mb-5 p-3 w-full focus:border-secondary rounded border-2 outline-none" 
                        autoComplete="off" 
                        placeholder="Auteur" 
                        ref={authorRef} 
                        defaultValue={docs[0] ? docs[0].author : ""} />
                    <ActionButton loading={loading} className="w-80" id="login" type="submit">Mettre à jour</ActionButton>
                </form>
            </div>
        </div>
    )
}

export default UpdateQuotation;