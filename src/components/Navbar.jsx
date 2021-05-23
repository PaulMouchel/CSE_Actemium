import React from 'react';
import { faHome, faNewspaper, faThumbsUp, faUserShield, faUsers, faEnvelope, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import logo from '../images/logo_min.png'
import fullLogo from '../images/full_logo.png'
import fullLogo2 from '../images/full_logo2.png'

  const navbarData = [
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
      text: "Avantages"
    },
    {
      href: "localhost:3000",
      icon: faUserShield,
      text: "CSSCT"
    },
    {
      href: "localhost:3000",
      icon: faUsers,
      text: "L' équipe"
    },
    {
      href: "localhost:3000",
      icon: faEnvelope,
      text: "Contact"
    }
]

const Navbar = () => {
  return (
      <>
      <div className="bg-opacity-100 absolute top-0 left-0 z-50 invisible md:visible">
        <img src={fullLogo2} className="bg-opacity-100 float-left"/>
      </div>
    <div className="w-screen flex justify-center items-center bg-gray-100 absolute top-0 shadow-md">
        
        <ul className="w-screen p-5 text-center flex justify-center items-center flex-row  pr-10 pl-10 md:ml-52">
            {navbarData.map((item, index) =>
                    <li key={index} className="flex-auto font-poppins font-bold flex flex-col">
                        <a href={item.href} className="hover:underline"><FontAwesomeIcon icon={item.icon} className="text-gray-600"/> {item.text} </a>
                    </li>
                )}
            <button className="flex-1 transition duration-500 ease-in-out bg-green-400 hover:bg-green-500 text-white font-bold p-2 rounded w-80 " id="login" type="submit"><span>Déconnection</span></button>
        </ul>
    </div>
        </>
  );
}

export default Navbar;