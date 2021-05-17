import React from 'react';
import { faHome, faThumbsUp, faUserShield, faUsers, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const Sidebar = () => {
    const sidebarData = [
        {
            href: "localhost:3000",
            icon: faHome,
            text: "Accueil"
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
        <nav id="sidebar">
            <div className="img bg-wrap py-4 img-bg">
                <div className="user-logo">
                    <div className="img pic"></div>    
                </div>
            </div>
            <ul className="list-unstyled components mb-5">
                {sidebarData.map((item) =>
                    <li>
                        <a href={item.href}><FontAwesomeIcon icon={item.icon} className="mr-3"/> {item.text} </a>
                    </li>
                )}
            </ul>
        </nav>
    );
}

export default Sidebar;