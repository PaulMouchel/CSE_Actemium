import React from 'react';
import { faHome, faNewspaper, faThumbsUp, faUserShield, faUsers, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import SideButton from './SideButton.jsx'

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
            <ul className="mx-5 mb-5 h-screen flex flex-col justify-center">
                {sidebarData.map((item, index) =>
                    <SideButton {...item} key={index}/>
                )}
            </ul>
        </nav>
    );
}

export default TinySidebar;