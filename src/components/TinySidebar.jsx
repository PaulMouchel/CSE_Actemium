import React from 'react';
import { faHome, faNewspaper, faThumbsUp, faUserShield, faUsers, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from 'framer-motion'

const TinySidebar = () => {
    const sidebarData = [
        {
            href: "home",
            icon: faHome,
            text: "Accueil"
        },
        {
            href: "news",
            icon: faNewspaper,
            text: "Actualités"
        },
        {
            href: "benefits",
            icon: faThumbsUp,
            text: "Avantages"
        },
        {
            href: "cssct",
            icon: faUserShield,
            text: "CSSCT"
        },
        {
            href: "team",
            icon: faUsers,
            text: "L' équipe"
        },
        {
            href: "contact",
            icon: faEnvelope,
            text: "Contact"
        }
    ]

    return (
        <nav className="fixed h-screen left-5 top-0 z-50 invisible md:visible">
            <ul className="m-5 mb-5 h-screen flex flex-col justify-center">
                {sidebarData.map((item, index) =>
                    <li key={index} className="flex items-center">
                        <motion.div className="z-10 hover:text-gray-50 text-gray-600 flex justify-center w-8 h-8 tiny-menu-item rounded-full my-2 place-content-center hover:bg-gray-600 bg-gray-50 transition duration-300 ease-in-out"
                        whileHover={{ scale: 1.1, x: -3 }}>
                            <a href={"#" + item.href}>
                                <FontAwesomeIcon icon={item.icon} className="box-content  p-1.5 m-0"/>
                            </a>
                        </motion.div>
                        <div className="ml-2 h-8 inline-flex justify-center align-center hide font-poppins py-1 px-2 text-gray-900 bg-gray-50 rounded-md">
                            {item.text}
                        </div>
                    </li>   
                )}
            </ul>
        </nav>
    );
}

export default TinySidebar;