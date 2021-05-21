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
 
    <div id="quote">
        <div style={quoteStart}>
            <FontAwesomeIcon icon={faQuoteLeft} className="quotemark"/>
        </div>
        <blockquote>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</blockquote>  
        <div style={quoteEnd}>
            <FontAwesomeIcon icon={faQuoteRight} className="quotemark" />
        </div>
    </div>

  );
}

export default Quotation;