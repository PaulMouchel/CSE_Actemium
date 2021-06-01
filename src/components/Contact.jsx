import React, {useRef} from 'react';
import Title from './Title'

const Contact = () => {
  const textRef = useRef()

  const handleSubmit = () => {
    console.log("Envoyé")
  }
  
  return (
      <>
        <Title id="contact">Contact</Title>
          <div>
            <form onSubmit={handleSubmit} className="mx-80 pb-6">
              <textarea type="text" name="contactText" className="resize-none block h-80 w-full border-2 focus:border-green-400 p-2 outline-none" autoComplete="off" placeholder="Ecrivez votre message" ref={textRef} required/>
              <button className="transition duration-500 ease-in-out bg-green-400 hover:bg-green-500 text-white font-bold p-2 rounded w-80" type="submit"><span>Envoyer</span></button>
            </form>
          </div>
        </>
  );
}

export default Contact;