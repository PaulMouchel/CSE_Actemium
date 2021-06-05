import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavHashLink } from 'react-router-hash-link';
import { motion } from 'framer-motion';

const underlineVariant = {
    hidden: {
        width:0
    },
    visible: {
        width:"100%",
        transition: {duration: 0.7}
    },
    exit: {
        width:0,
    }
}

const NavButton = (item) => {
    const [isHovering, setIsHovering] = useState(false)

    const handleMouseEnter = () => {
        setIsHovering(true);
    }

    const handleMouseLeave = () => {
        setIsHovering(false);
    }

    return (
        <li className="mr-6 lg:mr-8 xl:mr-16 flex flex-col">    
            <NavHashLink
                className="flex flex-col justify-center items-center xl:flex-row"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                smooth to={`/#${item.href}`}
                >
                <FontAwesomeIcon icon={item.icon} className="text-gray-600 xl:mr-1"/>
                <span>{item.text}</span>
            </NavHashLink> 
            { isHovering &&
            <motion.div className="h-1 w-full border-b-2 border-green-500 "
                variants={underlineVariant}
                initial="hidden"
                animate="visible"
                exit="exit">
            </motion.div>}
            {!isHovering &&
              <div  className="h-1 w-full"></div>
            }
        </li>
    );
}

export default NavButton;