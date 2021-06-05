import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom' 
import { motion } from 'framer-motion';

const buttonsVariant = {
    hidden: {
        x:100
    },
    visible: {
        x:0,
    }
}

const AdminButton = (item) => {

    return (
        <motion.li className="group flex flex-row-reverse items-center"
            variants={buttonsVariant}
            initial="hidden"
            animate="visible"
            exit={{x: 100}}>          
            <div className="z-10 transform group-hover:translate-x-1 group-hover:scale-125 text-gray-50 flex justify-center w-10 h-10 tiny-menu-item rounded my-2 place-content-center bg-blue-900 transition duration-300 ease-in-out">
                <Link className="flex justify-center items-center" to={"/" + item.href}>
                    <FontAwesomeIcon icon={item.icon} className="box-content  p-1.5 m-0"/>
                </Link>
            </div>
            <div className="mr-2 h-10 inline-flex justify-center items-center hide font-poppins py-1 px-2 text-blue-900 bg-gray-50 font-bold bg-opacity-50 rounded">     
                {item.text}
            </div>
        </motion.li>   
    );
}

export default AdminButton;