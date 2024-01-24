import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { goToHash } from '../functions/goToHash';

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

    const Icon = item.icon

    return (
        <li className="mr-6 lg:mr-8 xl:mr-16 flex flex-col">    
            <div
                className="flex flex-col justify-center items-center xl:flex-row cursor-pointer"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={() => goToHash(item.href)}
                >
                <Icon className="text-gray-600 xl:mr-1"/>
                <span>{item.text}</span>
            </div> 
            { isHovering &&
            <motion.div className="h-1 w-full border-b-2 border-secondary "
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