import React from 'react';
import { motion } from 'framer-motion'
import { FaSpinner } from 'react-icons/fa'

const ActionButton = (props) => {
  
  return (
    <>
    { !props.loading ?
        <motion.button 
            className={`bg-primary text-white font-bold p-2 rounded ${props.className}`}
            disabled={props.loading}
            type={props.type}
            id={props.id}
            value={props.value}
            onClick={props.onClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}>
                <span>{props.children}</span>
        </motion.button>
        :
        <button disabled={props.loading} className={`bg-primary text-white font-bold p-2 rounded ${props.className}`}
            type={props.type}
            id={props.id}>
                <FaSpinner className="animate-spin" />
        </button>
    }
    </>
  );
}

export default ActionButton;