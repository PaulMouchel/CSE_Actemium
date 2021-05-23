import React from 'react';
import { faHome, faNewspaper, faThumbsUp, faUserShield, faUsers, faEnvelope, faLockOpen } from "@fortawesome/free-solid-svg-icons";
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
      text: "L'équipe"
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
      <div className="w-40 lg:w-60 h-40 lg:h-60 bg-opacity-100 absolute top-0 left-0 z-50 invisible md:visible">
        <img src={fullLogo2} className="bg-opacity-100 float-left"/>
      </div>
      <div className="flex justify-center items-center bg-gray-100  shadow-md">
        <ul className="w-full text-center flex justify-center items-center flex-row py-5 pr-2 md:pr-5 md:pl-5 md:pl-0 md:ml-40 lg:ml-60">
          {navbarData.map((item, index) =>
            <li key={index} className="flex-auto font-poppins font-bold flex flex-col">
              <a href={item.href} className="hover:underline">
                <FontAwesomeIcon icon={item.icon} className="text-gray-600"/>
                {window.innerWidth < 1024 ? <br /> : ""}
                <span className=""> {item.text}</span>
              </a>
            </li>
          )}
          <button className="w-0 md:w-80 flex-1 transition duration-500 ease-in-out bg-green-400 hover:bg-green-500 text-white font-bold p-2 rounded" id="login" type="submit">
            <span>
              {window.innerWidth < 1024 ? <FontAwesomeIcon icon={faLockOpen}/> : "Déconnection"}
            </span>
          </button>
        </ul>
      </div>
    </>
  );
}

export default Navbar;