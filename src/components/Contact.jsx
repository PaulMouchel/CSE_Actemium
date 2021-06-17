import React, {useRef, useState} from 'react';
import emailjs from 'emailjs-com';
import Title from './Title'
import { useAuth } from '../contexts/AuthContext'
import {motion} from 'framer-motion'

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
          { error && error}
          { success && success}
          <form onSubmit={sendEmail} className="xl:mx-80 pb-6 flex flex-col items-center">
            <textarea type="text" name="message" className="resize-none block h-80 w-full border-2 focus:border-green-400 p-2 outline-none" autoComplete="off" placeholder="Ecrivez votre message" ref={textRef} required/>
            <motion.button className="mt-2 bg-primary text-white font-bold p-2 rounded w-full md:w-80 self-end" type="submit" value="Send"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}><span>Envoyer</span></motion.button>
          </form>
        </div>
      </div>
  );
}

export default Contact;