import React from 'react';
import { FaArrowLeft } from "react-icons/fa"
import { Link } from 'react-router-dom'

const PreviousButton = ({to, hash, state, className}) => {
  
  return (
    <Link to={{
      pathname: to,
      state: { data: state, hash: hash }
    }}
      
    className={`transform duration-300 ease-in-out bg-secondary hover:bg-white text-white hover:text-secondary rounded-full w-10 h-10 flex items-center justify-center ${className}`}
    >
        <FaArrowLeft />
    </Link>
  );
}

export default PreviousButton;