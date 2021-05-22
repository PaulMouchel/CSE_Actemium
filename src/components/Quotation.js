import React from 'react';
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Style
const quoteStart = {
    display: "flex",
    alignItems: "flex-start"
}
const quoteEnd = {
    display: "flex",
    alignItems: "flex-end"
}

const Quotation = () => {

  return (
    <div className="bg-gray-900 bg-opacity-70 text-gray-50 p-10 mx-64 font-poppins flex justify-between rounded-lg text-2xl text-justify">
    

        <div style={quoteStart}>
            <FontAwesomeIcon icon={faQuoteLeft} className="quotemark"/>
        </div>
        <blockquote className="px-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</blockquote>  
        <div style={quoteEnd}>
            <FontAwesomeIcon icon={faQuoteRight} className="quotemark" />
        </div>
   
 
  </div>

  );
}

export default Quotation;