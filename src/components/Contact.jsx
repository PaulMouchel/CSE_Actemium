import Title from './Title'
import ActionButton from './ActionButton.jsx'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = ({textColor}) => {
  
    return (
        <div className="pb-10">
            <Title textColor={textColor}>Nous contacter</Title>
            <p className="text-center pb-4 text-lg">Toute idée est la bienvenue !</p>
            <a href = "mailto:ce.actemium.rennes@gmail.com" className='w-full mx-auto flex justify-center my-24'>
                <ActionButton className="mt-2 w-full md:w-80 self-end p-6 text-xl" type="button">
                    <FontAwesomeIcon icon={faEnvelope} className="text-white xl:mr-1"/>
                    Envoyer un email au CSE
                </ActionButton>
            </a>
        </div>
    );
}

export default Contact;