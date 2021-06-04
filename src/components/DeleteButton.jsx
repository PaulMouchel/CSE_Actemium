import React from 'react';
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from 'framer-motion'

const DeleteButton = ({onClick}) => {

  return (
        <motion.button className=" transform duration-300 ease-in-out bg-red-500 hover:bg-white text-white hover:text-red-500 rounded-full block w-10 h-10 flex items-center justify-center relative top-2 left-2"
            onClick={onClick}
            layout
            initial={{ scale:0 }}
            animate={{ scale:1 }}
            transition={{ delay: 0 }}>
            <FontAwesomeIcon icon={faTrashAlt} />
        </motion.button>
    );
}

export default DeleteButton;