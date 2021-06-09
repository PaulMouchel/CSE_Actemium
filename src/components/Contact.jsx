import React, {useRef, useState} from 'react';
import emailjs from 'emailjs-com';
import Title from './Title'
import { useAuth } from '../contexts/AuthContext'

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
      <>
        <Title id="contact" textColor={textColor}>Nous contacter</Title>
          <div>
            { error && error}
            { success && success}
            <form onSubmit={sendEmail} className="xl:mx-80 pb-6 flex flex-col items-center">
              <textarea type="text" name="message" className="resize-none block h-80 w-full border-2 focus:border-green-400 p-2 outline-none" autoComplete="off" placeholder="Ecrivez votre message" ref={textRef} required/>
              <button className="mt-2 transition duration-500 ease-in-out bg-green-400 hover:bg-green-500 text-white font-bold p-2 rounded w-80 self-end" type="submit" value="Send"><span>Envoyer</span></button>
            </form>
          </div>
        </>
  );
}

export default Contact;