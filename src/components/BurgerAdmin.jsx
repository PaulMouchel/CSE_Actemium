import React from 'react';
import { faImage, faQuoteLeft, faPen, faThumbsUp, faShieldAlt, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import BurgerAdminButton from './BurgerAdminButton.jsx'

const BurgerAdmin = () => {
    const sidebarData = [
        {
            href: "update-background",
            icon: faImage,
            text: "Image de fond"
        },
        {
            href: "update-quotation",
            icon: faQuoteLeft,
            text: "Phrase du moment"
        },
        {
            href: "create-article",
            icon: faPen,
            text: "Nouvel article"
        },
        {
            href: "create-benefit",
            icon: faThumbsUp,
            text: "Nouvel avantage"
        },
        {
            href: "create-cssct",
            icon: faShieldAlt,
            text: "Nouvelle mission"
        },
        {
            href: "create-member",
            icon: faUserPlus,
            text: "Nouveau membre"
        }
    ]

    return (
        <ul className="m-5 mb-5 flex justify-between">
            {sidebarData.map((item, index) =>
                <BurgerAdminButton {...item} key={index} />  
            )}
        </ul>
    );
}

export default BurgerAdmin;