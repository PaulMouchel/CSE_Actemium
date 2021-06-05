import React from 'react';
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useFirestore from '../hooks/useFirestore';

const Quotation = () => {

    const { docs } = useFirestore('Quotation');

    return (
        <>
            {docs[0] && docs[0].text !== "" &&
                <div className="bg-gray-900 bg-opacity-70 max-h-96 mx-10 md:mx-48 lg:mx-64">
                    <div className="text-gray-50 p-4 md:p-6 lg:p-10 italic flex justify-between rounded-lg text-2xl text-justify">
                        <div className="flex items-start">
                            <FontAwesomeIcon icon={faQuoteLeft}/>
                        </div>
                    
                        <div className="overflow-hidden">
                            <blockquote className="pb-2 px-4 md-px-6 lg:px-10">{docs[0].text}</blockquote> 
                            {docs[0].author && <blockquote className="text-xl text-right px-10">- {docs[0].author}</blockquote>}
                        </div>
                            
                        <div className="flex items-end">
                            <FontAwesomeIcon icon={faQuoteRight}/>
                        </div>
                    </div>
                </div>
            }

        </>
    );
}

export default Quotation;