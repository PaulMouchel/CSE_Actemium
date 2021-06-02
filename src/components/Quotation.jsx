import React from 'react';
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import useFirestore from '../hooks/useFirestore';

const Quotation = ({admin}) => {

    const { docs } = useFirestore('Quotation');

    return (
        <>
            {docs[0] && docs[0].text !== "" &&
                <div className="max-h-96 bg-gray-900 bg-opacity-70 text-gray-50 p-4 md:p-6 lg:p-10 mx-10 md:mx-48 lg:mx-64 font-poppins italic flex justify-between rounded-lg text-2xl text-justify">
                    <div className="flex items-start">
                        <FontAwesomeIcon icon={faQuoteLeft}/>
                    </div>
                
                    <div className="overflow-hidden">
                        <blockquote className="pb-2 px-4 md-px-6 lg:px-10">{docs[0].text}</blockquote> 
                        <blockquote className="text-xl text-right px-10">- {docs[0].author}</blockquote> 
                    </div>
                        
                    <div className="flex items-end">
                        <FontAwesomeIcon icon={faQuoteRight}/>
                    </div>
                </div>
            }

            { admin &&
                <Link to="/update-quotation"
                    className="mt-2 sm:mt-0">
                    <motion.button 
                        className="m-auto focus:outline-none w-64 rounded-full p-2 px-5 bg-green-500 text-white flex justify-center"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                    <span className="pl-4">{docs[0] ? "Modifier" : "Ajouter"} la phrase du jour</span>
                    </motion.button>
                </Link> 
            }
        </>
    );
}

export default Quotation;