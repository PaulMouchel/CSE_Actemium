import React from 'react';
import { faHome, faNewspaper, faThumbsUp, faUserShield, faUsers, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import SideButton from './SideButton.jsx'

const TinySidebar = ({visibleSection}) => {

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
        <nav className="hidden md:block fixed h-screen left-5 top-0 z-50">
            <ul className="mx-5 mb-5 h-screen flex flex-col justify-center">
                {sidebarData.map((item, index) =>
                    <SideButton {...item} key={index} focus={visibleSection === item.href}/>
                )}
            </ul>
        </nav>
    );
}

export default TinySidebar;