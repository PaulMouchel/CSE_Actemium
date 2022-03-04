import React from 'react';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { HashLink as Link } from 'react-router-hash-link';
import { Link } from 'react-router-dom'

const PreviousButton = ({to, hash, state, className}) => {
  
  return (
    <Link to={{
      pathname: to,
      state: { data: state, hash: hash }
    }}
      
    className={`transform duration-300 ease-in-out bg-secondary hover:bg-white text-white hover:text-secondary rounded-full w-10 h-10 flex items-center justify-center ${className}`}
    >
        <FontAwesomeIcon icon={faArrowLeft} />
    </Link>
  );
}

export default PreviousButton;