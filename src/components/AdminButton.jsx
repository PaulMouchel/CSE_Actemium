import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom' 
import { motion, AnimatePresence } from 'framer-motion';

const buttonsVariant = {
    hidden: {
        x:100
    },
    visible: {
        x:0,
    },
    exit : {
        x:100
    }
}

const textVariant = {
    hidden: {
        opacity:0,
        x:50
    },
    visible: {
        opacity:1,
        x:0,
        transition: {duration: 0.3}
    },
    exit: {
        opacity:0,
        x:50,
        transition: {duration: 0.3}
    }
}

const AdminButton = (item) => {
    const [isHovering, setIsHovering] = useState(false)

    const handleMouseEnter = () => {
        setIsHovering(true);
    }

    const handleMouseLeave = () => {
        setIsHovering(false);
    }

    return (
        <motion.li className="group flex flex-row-reverse items-center"
            variants={buttonsVariant}
            initial="hidden"
            animate="visible"
            exit="exit">          
            <div className="z-10 transform group-hover:translate-x-1 group-hover:scale-125 text-gray-50 flex justify-center w-10 h-10 rounded my-2 place-content-center bg-blue-900 transition duration-300 ease-in-out"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                    { !item.external ?
                <Link className="flex justify-center items-center" to={item.href}>
                    <FontAwesomeIcon icon={item.icon} className="box-content  p-1.5 m-0"/>
                </Link>
                :
                <a className="flex justify-center items-center" href={item.href} target='_blank'>
                    <FontAwesomeIcon icon={item.icon} className="box-content  p-1.5 m-0"/>
                </a> 
                }
            </div>
            <AnimatePresence>
                { isHovering &&
                    <motion.div className="mr-2 h-10 inline-flex justify-center items-center py-1 px-2 text-blue-900 bg-gray-50 font-bold bg-opacity-50 rounded"
                        variants={textVariant}
                        initial="hidden"
                        animate="visible"
                        exit="exit">
                        {item.text}
                    </motion.div>
                }
            </AnimatePresence>
        </motion.li>   
    );
}

export default AdminButton;