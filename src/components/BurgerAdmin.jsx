import React from 'react';
import { faImage, faQuoteLeft, faPen, faThumbsUp, faShieldAlt, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import BurgerAdminButton from './BurgerAdminButton.jsx'

const BurgerAdmin = () => {
    const sidebarData = [
        {
            href: "background/edit",
            icon: faImage,
            text: "Image de fond"
        },
        {
            href: "quotation/edit",
            icon: faQuoteLeft,
            text: "Phrase du moment"
        },
        {
            href: "news/new",
            icon: faPen,
            text: "Nouvel article"
        },
        {
            href: "benefits/new",
            icon: faThumbsUp,
            text: "Nouvel avantage"
        },
        {
            href: "cssct/new",
            icon: faShieldAlt,
            text: "Nouvelle mission"
        },
        {
            href: "members/new",
            icon: faUserPlus,
            text: "Nouveau membre"
        }
    ]

    return (
        <nav className="fixed h-screen right-0 top-0 z-40">
            <ul className="m-5 mb-5 h-screen flex flex-col justify-start mt-20">    
                {sidebarData.map((item, index) =>
                    <BurgerAdminButton {...item} key={index} />  
                )}
            </ul>
        </nav> 
    );
}

export default BurgerAdmin;