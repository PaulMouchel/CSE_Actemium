import React, {useRef, useState} from 'react';
import emailjs from 'emailjs-com';
import Title from './Title'
import { useAuth } from '../contexts/AuthContext'
import ActionButton from './ActionButton.jsx'

const Contact = ({textColor}) => {
  const textRef = useRef()
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)
  const { currentUser } = useAuth()

  function sendEmail(e) {
    let emailData = {
      from_name:currentUser.email, 
      message:textRef.current.value
    }

    e.preventDefault();

    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID, 
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID, 
      emailData, 
      process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then((result) => {
          console.log(result.text);
          setSuccess("Message envoyé avec succès !")
      }, (error) => {
          console.log(error.text);
          setError("Echec de l'envoi du message : " + error.text)
      });
      e.target.reset()
  }
  
  return (
      <div className="">
        <Title id="contact" textColor={textColor}>Nous contacter</Title>
        <div>
          <form onSubmit={sendEmail} className="xl:mx-80 pb-6 flex flex-col items-center">
          { error && 
            <div className="w-full text-center text-gray-50 bg-red-500 py-1 px-2 mb-2 rounded">{error}</div>
          }
          { success && 
            <div className="w-full text-center text-gray-50 bg-green-500 py-1 px-2 mb-2 rounded">{success}</div>
          }
            <textarea type="text" name="message" className="resize-none block h-80 w-full border-2 focus:border-secondary p-2 outline-none" autoComplete="off" placeholder="Ecrivez votre message" ref={textRef} required/>
            <ActionButton className="mt-2 w-full md:w-80 self-end" type="submit" value="Send">
              Envoyer
            </ActionButton>
          </form>
        </div>
      </div>
  );
}

export default Contact;