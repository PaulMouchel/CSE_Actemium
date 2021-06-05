import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavHashLink } from 'react-router-hash-link';
import { motion } from 'framer-motion';

const buttonsVariant = {
    hidden: {
        x:-100
    },
    visible: {
        x:0,
    },
    exit : {
        x:-100
    }
}

const textVariant = {
    hidden: {
        opacity:0
    },
    visible: {
        opacity:100,
        transition: {duration: 3}
    },
    exit: {
        opacity:0,
    }
}

const SideButton = (item) => {
    const [isHovering, setIsHovering] = useState(false)

    const handleMouseEnter = () => {
        setIsHovering(true);
    }

    const handleMouseLeave = () => {
        setIsHovering(false);
    }

    return (
        <motion.li className="group flex flex-row items-center"
            variants={buttonsVariant}
            initial="hidden"
            animate="visible"
            exit="exit">          
            <div className="z-10 transform group-hover:-translate-x-1 group-hover:scale-125 hover:text-gray-50 text-gray-600 flex justify-center w-8 h-8 rounded-full my-2 place-content-center hover:bg-gray-600 bg-gray-50 transition duration-300 ease-in-out">
                <NavHashLink
                    className="flex justify-center items-center"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    smooth to={`/#${item.href}`}
                    >
                    <FontAwesomeIcon icon={item.icon} className="box-content p-1.5 m-0"/>
                </NavHashLink>
            </div>
            { isHovering &&
            <motion.div className="ml-2 h-8 inline-flex justify-center items-center hide py-1 px-2 text-gray-900 bg-gray-50 bg-opacity-50 font-bold rounded-md"
                variants={textVariant}>     
                {item.text}
            </motion.div>}
        </motion.li>   
    );
}

export default SideButton;