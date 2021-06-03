import React from 'react';
import { faImage, faQuoteLeft, faPen, faThumbsUp, faShieldAlt, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom' 

const AdminSidebar = () => {
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
        <nav className="fixed h-screen right-5 top-0 z-40 invisible md:visible">
            <ul className="m-5 mb-5 h-screen flex flex-col justify-center">
                {sidebarData.map((item, index) =>
                    <li key={index} className="group flex flex-row-reverse items-center">          
                        <div className="z-10 transform group-hover:translate-x-1 group-hover:scale-125 text-gray-50 flex justify-center w-10 h-10 tiny-menu-item rounded my-2 place-content-center bg-blue-900 transition duration-300 ease-in-out">
                            <Link className="flex justify-center items-center" to={"/" + item.href}>
                                <FontAwesomeIcon icon={item.icon} className="box-content  p-1.5 m-0"/>
                            </Link>
                        </div>
                        <div className="mr-2 h-10 inline-flex justify-center items-center hide font-poppins py-1 px-2 text-blue-900 bg-gray-50 font-bold bg-opacity-50 rounded">
                            {item.text}
                        </div>
                        
                    </li>   
                )}
            </ul>
        </nav>
    );
}

export default AdminSidebar;