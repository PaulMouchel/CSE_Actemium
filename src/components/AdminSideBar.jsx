import React from 'react';
import { faImage, faQuoteLeft, faPen, faThumbsUp, faShieldAlt, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AdminSidebar = ({admin}) => {
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
        <nav className="fixed h-screen right-5 top-0 z-50 invisible md:visible">
            <ul className="m-5 mb-5 h-screen flex flex-col justify-center">
                {sidebarData.map((item, index) =>
                    <li key={index} className="group flex flex-row-reverse items-center">
                        
                        <div className="z-10 transform group-hover:translate-x-1 group-hover:scale-125 hover:text-gray-50 text-gray-600 flex justify-center w-8 h-8 tiny-menu-item rounded-full my-2 place-content-center hover:bg-gray-600 bg-gray-50 transition duration-300 ease-in-out">
                            <a href={"/" + item.href}>
                                <FontAwesomeIcon icon={item.icon} className="box-content  p-1.5 m-0"/>
                            </a>
                        </div>
                        <div className="mr-2 h-8 inline-flex justify-center align-center hide font-poppins py-1 px-2 text-gray-900 bg-gray-50 rounded-md">
                            {item.text}
                        </div>
                        
                    </li>   
                )}
            </ul>
        </nav>
    );
}

export default AdminSidebar;