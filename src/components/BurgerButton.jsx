import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavHashLink } from 'react-router-hash-link';
import { motion } from 'framer-motion';

const itemVariant = {
    hidden: {
        y:50,
        opacity:0
    },
    visible: {
        y:0,
        opacity:1,
        transition: {duration: 0.7, delay: 0.3}
    }
}

const BurgerButton = (item) => {

    return (
        <motion.li
            variants={itemVariant}
            initial="hidden"
            animate="visible">    
            <NavHashLink
                className="p-3 pl-6 block justify-center items-center"
                smooth to={`/#${item.href}`}
                >
                <div className="inline-flex items-center justify-center w-10 h-10 border-2 border-gray-800 rounded-full">
                    <FontAwesomeIcon icon={item.icon} className="block w-4 h-4 text-gray-600"/>
                </div>
                <span className="pl-4">{item.text}</span>
            </NavHashLink> 
        </motion.li>
    );
}

export default BurgerButton;