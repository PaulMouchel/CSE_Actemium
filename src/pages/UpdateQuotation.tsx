import { FormEvent, useRef, useState } from "react"
import { useHistory } from 'react-router-dom'
import { firestore, timestamp } from '../firebase/config';
import PreviousButton from '../components/PreviousButton'
import ActionButton from '../components/ActionButton'
import { motion } from "framer-motion";
import { sendToastSuccess } from "../functions/sendToast";
import { useQuotation } from "../hooks/useQuotation";
import { addDoc, doc, collection as firestoreCollection, updateDoc } from 'firebase/firestore';

const UpdateQuotation = () => {
    const quotation = useQuotation()

    const [loading, setLoading] = useState(false)
    const history = useHistory()

    const textRef = useRef<HTMLTextAreaElement>(null)
    const authorRef = useRef<HTMLInputElement>(null)

    const uploadToDatabase = async (author: string, text: string) => {
        const collectionRef = firestoreCollection(firestore, 'Quotation')
        const createdAt = timestamp();
        if (quotation) {
            const docRef = doc(firestore, 'Quotation', quotation.id)
            await updateDoc(docRef, { text, author, createdAt })
        } else {
            await addDoc(collectionRef, { text, author, createdAt })
        }
        sendToastSuccess("Phrase du moment modifiée")
        history.push('/')
     }
    
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()

        const text = textRef.current?.value
        const author = authorRef.current?.value ?? ''

        if (text) {
            setLoading(true)
            uploadToDatabase(author, text)
        }
    }

    return (
        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        className="w-screen h-screen flex justify-center items-center">
            <div className="bg-white rounded flex justify-center items-center flex-col shadow-md">
                <div className="w-full p-3">
                    <PreviousButton to="/"/>
                </div>
                <form className="p-10 pt-0 flex justify-center items-center flex-col" onSubmit={handleSubmit}>
                    <p className="mb-5 text-3xl text-gray-600">Phrase du moment</p>
                    <textarea 
                        name="quotationText" 
                        className="italic resize-none mb-5 p-3 w-full h-64 focus:border-secondary rounded border-2 outline-none" 
                        autoComplete="off" 
                        placeholder="Phrase du jour" 
                        ref={textRef} 
                        defaultValue={quotation?.text ?? ""} 
                        required/>
                    <input 
                        type="text" 
                        name="quotationAuthor"
                        className="italic resize-none  mb-5 p-3 w-full focus:border-secondary rounded border-2 outline-none" 
                        autoComplete="off" 
                        placeholder="Auteur" 
                        ref={authorRef} 
                        defaultValue={quotation?.author ?? ""} />
                    <ActionButton loading={loading} className="w-80" id="login" type="submit">Mettre à jour</ActionButton>
                </form>
            </div>
        </motion.div>
    )
}

export default UpdateQuotation;