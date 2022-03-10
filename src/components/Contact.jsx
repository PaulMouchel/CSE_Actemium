import {useRef, useState} from 'react';
import emailjs from 'emailjs-com';
import Title from './Title'
import { useAuth } from '../contexts/AuthContext'
import ActionButton from './ActionButton.jsx'
import { toast } from 'react-toastify';

const Contact = ({textColor}) => {
    const textRef = useRef()
    const [loading, setLoading] = useState(false)
    const { currentUser } = useAuth()

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true)

        let emailData = {
            from_name:currentUser.email, 
            message:textRef.current.value
        }

        if(emailData.from_name && emailData.message) {
            toast.promise(
                emailjs.send(
                    process.env.REACT_APP_EMAILJS_SERVICE_ID, 
                    process.env.REACT_APP_EMAILJS_TEMPLATE_ID, 
                    emailData, 
                    process.env.REACT_APP_EMAILJS_USER_ID
                )
                .then((result) => {
                    console.log(result.text);
                    e.target.reset()
                }, (error) => {
                    console.log(error.text);
                })
                .finally(() => {
                    setLoading(false)
                }), {
                    pending: "Envoi du message",
                    success: "Message envoyé avec succès !",
                    error: "Echec de l'envoi du message"
                }
            )
        }
    }
  
    return (
        <div className="pb-10">
            <Title textColor={textColor}>Nous contacter</Title>
            <p className="text-center pb-4 text-lg">Toute idée est la bienvenue !</p>
            <div>
                <form onSubmit={sendEmail} className="max-w-2xl mx-auto pb-6 flex flex-col items-center">
                    <textarea type="text" name="message" className="resize-none block h-80 w-full border-2 focus:border-secondary p-2 outline-none" autoComplete="off" placeholder="Ecrivez votre message" ref={textRef} required/>
                    <ActionButton loading={loading} className="mt-2 w-full md:w-80 self-end" type="submit" value="Send">
                        Envoyer
                    </ActionButton>
                </form>
            </div>
        </div>
    );
}

export default Contact;