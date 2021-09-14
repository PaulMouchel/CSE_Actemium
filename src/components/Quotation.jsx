import React from 'react';
import { faQuoteLeft, faQuoteRight, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from 'framer-motion'

const Quotation = ({quotation}) => {

    return (
        <motion.div className="bg-gray-900 bg-opacity-70 max-h-96 mx-8 md:mx-48 lg:mx-64"
            initial={{opacity:0}}
            animate={{opacity:1}}>

            <div className="text-gray-50 p-4 md:p-6 lg:p-10 italic flex justify-between rounded-lg text-2xl text-justify">
                <div className="flex items-start">
                    <FontAwesomeIcon icon={faQuoteLeft}/>
                </div>
                
                <div className="overflow-hidden">
                { quotation.docs[0] ?
                    <>
                        <blockquote className="pb-2 px-4 md-px-6 lg:px-10">{quotation.docs[0].text}</blockquote> 
                        {quotation.docs[0].author && <blockquote className="text-xl text-right px-10">- {quotation.docs[0].author}</blockquote>}
                    </>
                    :
                    <> 
                        <blockquote className="pb-2 px-4 md-px-6 lg:px-10 text-center">
                            <FontAwesomeIcon className="animate-spin" icon={faSpinner}/>
                        </blockquote> 
                    </>
                }
                </div>
                
                <div className="flex items-end">
                    <FontAwesomeIcon icon={faQuoteRight}/>
                </div>
            </div>
        </motion.div>

    );
}

export default Quotation;