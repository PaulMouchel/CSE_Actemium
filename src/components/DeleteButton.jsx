import React from 'react';
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, AnimatePresence } from 'framer-motion'

const deleteVariant = {
    hidden: {
        scale:0
    },
    visible: {
        scale:1,
        transition: {duration: 0.7}
    },
    exit: {
        scale:0,
    }
}

const DeleteButton = ({onClick, admin}) => {

    return (
        <AnimatePresence>
            {admin && <motion.button className="transform duration-300 ease-in-out bg-red-500 hover:bg-white text-white hover:text-red-500 rounded-full block w-10 h-10 flex items-center justify-center relative top-2 left-2"
                onClick={onClick}
                variants={deleteVariant}
                initial="hidden"
                animate="visible"
                exit="exit">
                <FontAwesomeIcon icon={faTrashAlt} />
            </motion.button>}
        </AnimatePresence>
    );
}

export default DeleteButton;