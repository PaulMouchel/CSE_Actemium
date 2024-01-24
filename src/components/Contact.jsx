import Title from './Title'
import ActionButton from './ActionButton.jsx'
import { FaEnvelope } from "react-icons/fa"

const Contact = ({textColor}) => {
  
    return (
        <div className="pb-10">
            <Title textColor={textColor}>Nous contacter</Title>
            <p className="text-center pb-4 text-lg">Toute idée est la bienvenue !</p>
            <a href={`mailto:${import.meta.env.VITE_CONTACT_EMAIL}`} className='w-full mx-auto flex justify-center my-24'>
                <ActionButton className="mt-2 w-full md:w-80 self-end p-6 text-xl" type="button">
                    <FaEnvelope className="text-white mr-2 inline-block"/>
                    Envoyer un email au CSE
                </ActionButton>
            </a>
        </div>
    );
}

export default Contact;