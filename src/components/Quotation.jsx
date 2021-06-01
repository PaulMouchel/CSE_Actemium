import React, {useRef} from 'react';
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Quotation = ({admin}) => {

    const quotationTextRef = useRef();
    const authorRef = useRef();

    const quatationData = {
        text: "La beauté est dans les yeux de celui qui regarde.",
        author: "Oscar Wilde"
    }

  return (
    <div className="max-h-96 bg-gray-900 bg-opacity-70 text-gray-50 p-4 md:p-6 lg:p-10 mx-10 md:mx-48 lg:mx-64 font-poppins italic flex justify-between rounded-lg text-2xl text-justify">
    

        <div className="flex items-start">
            <FontAwesomeIcon icon={faQuoteLeft}/>
        </div>
        { !admin &&
            <div className="overflow-hidden">
                <blockquote className="px-4 md-px-6 lg:px-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</blockquote> 
                <blockquote className="text-xl text-right px-10">- Thomas Le-Gal</blockquote> 
            </div>
        }       
        { admin && 
            <div className="flex flex-col justify-between">
                <form className="text-gray-600 p-4 w-96">
                    <textarea 
                        type="text" 
                        name="quotationText" 
                        className="italic block resize-none block w-full border-2 focus:border-green-400 p-2 outline-none" 
                        autoComplete="off" 
                        placeholder="Ecrivez votre message" 
                        ref={quotationTextRef} 
                        value={quatationData.text} 
                        required/>
                    <input 
                        type="text" 
                        name="quotationAuthor"
                        className="italic block resize-none block w-full border-2 focus:border-green-400 p-2 mt-2 outline-none" 
                        autoComplete="off" 
                        placeholder="Auteur" 
                        ref={authorRef} 
                        value={quatationData.author}/>
                    <button className="block w-full mt-2 transition duration-500 ease-in-out bg-green-400 hover:bg-green-500 text-white p-2 rounded w-80" type="submit"><span>Mettre à jour</span></button>
                </form>
            </div>
        }
        <div className="flex items-end">
            <FontAwesomeIcon icon={faQuoteRight}/>
        </div>
   
 
  </div>

  );
}

export default Quotation;