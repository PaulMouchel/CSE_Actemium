import React from 'react';
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Quotation = () => {

  return (
    <div className="max-h-96 bg-gray-900 bg-opacity-70 text-gray-50 p-4 md:p-6 lg:p-10 mx-10 md:mx-48 lg:mx-64 font-poppins flex justify-between rounded-lg text-2xl text-justify">
    

        <div className="flex items-start">
            <FontAwesomeIcon icon={faQuoteLeft}/>
        </div>
        <div className="overflow-hidden">
            <blockquote className="px-4 md-px-6 lg:px-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</blockquote> 
            <blockquote className="text-xl text-right px-10">- Thomas Le-Gal</blockquote> 
        </div>
        <div className="flex items-end">
            <FontAwesomeIcon icon={faQuoteRight}/>
        </div>
   
 
  </div>

  );
}

export default Quotation;