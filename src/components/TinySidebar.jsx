import React from 'react';
import { faHome, faNewspaper, faThumbsUp, faUserShield, faUsers, faEnvelope, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TinySidebar = () => {
    const sidebarData = [
        {
            href: "localhost:3000",
            icon: faHome,
            text: "Accueil"
        },
        {
            href: "localhost:3000",
            icon: faNewspaper,
            text: "Actualités"
        },
        {
            href: "localhost:3000",
            icon: faThumbsUp,
            text: "Nos avantages"
        },
        {
            href: "localhost:3000",
            icon: faUserShield,
            text: "CSSCT"
        },
        {
            href: "localhost:3000",
            icon: faUsers,
            text: "Qui sommes nous ?"
        },
        {
            href: "localhost:3000",
            icon: faEnvelope,
            text: "Nous contacter"
        }
    ]

    return (
        <nav className="fixed h-screen left-5 top-0 z-50">
            <ul className="m-5 mb-5 h-screen flex flex-col justify-center">
                {sidebarData.map((item) =>
                    <li className="flex items-center">
                        <div className="hover:text-gray-50 text-gray-600 flex justify-center w-8 h-8 tiny-menu-item rounded-full my-2 place-content-center hover:bg-gray-600 bg-gray-50 transition duration-300 ease-in-out">
                            <a href={item.href}>
                                <FontAwesomeIcon icon={item.icon} className="box-content  p-1.5 m-0"/>
                                
                            </a>
                            
                        </div>
                        <div className="ml-2 h-8 inline-flex justify-center align-center hide font-poppins py-1 px-2 text-gray-900 bg-gray-50 rounded-md font-bold">{item.text}</div>
                    </li>   
                )}
            </ul>
        </nav>
    );
}

export default TinySidebar;