import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, AnimatePresence } from 'framer-motion';

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
        opacity:0,
        x:-50
    },
    visible: {
        opacity:1,
        x:0,
        transition: {duration: 0.3}
    },
    exit: {
        opacity:0,
        x:-50,
        transition: {duration: 0.3}
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

    const goToSection = (id) => {
        const el = document.getElementById(id)
        const position = el.offsetTop
        window.scrollTo({ top: position, behavior: 'smooth' })
    }

    return (
        <motion.li className="group flex flex-row items-center"
            variants={buttonsVariant}
            initial="hidden"
            animate="visible"
            exit="exit">          
            <div className={`z-10 transform group-hover:-translate-x-1 group-hover:scale-125 hover:text-gray-50 ${!item.focus && "text-gray-600"} flex justify-center w-8 h-8 rounded-full my-2 place-content-center hover:bg-gray-600 ${!item.focus && "bg-gray-50"} transition duration-300 ease-in-out ${item.focus && "text-gray-50 bg-gray-600"}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                <div
                    className="tiny-nav-link flex justify-center items-center cursor-pointer"
                    onClick={() => goToSection(item.href)}>
                    <FontAwesomeIcon icon={item.icon} className="box-content p-1.5 m-0"/>
                </div>
            </div>
            <AnimatePresence>
                { isHovering &&
                    <motion.div className="ml-2 h-8 inline-flex justify-center items-center hide py-1 px-2 text-gray-900 bg-gray-50 bg-opacity-50 font-bold rounded-md"
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

export default SideButton;