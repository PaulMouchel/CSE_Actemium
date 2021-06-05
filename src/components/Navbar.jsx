import React, { useState } from "react"

import { useHistory } from "react-router-dom"
import { useAuth } from '../contexts/AuthContext'

import { faHome, faNewspaper, faThumbsUp, faUserShield, faUsers, faEnvelope, faLockOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useScrollData } from "scroll-data-hook";

import logo from '../images/full_logo2.png'

import NavButton from './NavButton.jsx'

  const navbarData = [
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
        text: "L'équipe"
    },
    {
        href: "contact",
        icon: faEnvelope,
        text: "Contact"
    }
  ]

const Navbar = () => {

  const {
    scrolling,
    time,
    speed,
    direction,
    position,
    relativeDistance,
    totalDistance
  } = useScrollData({
    onScrollStart: () => {
      console.log('Started scrolling');
    },
    onScrollEnd: () => {
      console.log('Finished scrolling');
    }
  });

  const [error, setError] = useState("")
    const { logout } = useAuth()
    const history = useHistory()

    async function handleLogout() {
        setError('')

        try {
            await logout()
            history.push("/login")
        } catch(e) {
            setError("Déconnexion échouée " + e)
        }
    }

  return (
    <>
      {error && <span className="block text-center text-gray-50 bg-red-500 py-1 px-2">{error}</span>}
      {/* <div className="w-40 lg:w-60 h-40 lg:h-60 bg-opacity-100 absolute top-0 left-0 z-50 invisible md:visible"> */}
      <div className="w-40 lg:w-60 h-40 lg:h-60 bg-opacity-100 absolute top-0 left-0 z-50 invisible md:visible">
        <img src={logo} className="bg-opacity-100 float-left" alt="logo"/>
      </div>
      <div className="flex bg-gray-100 shadow-md">
        <ul className="w-full text-center flex justify-between items-center flex-row py-5 pr-2 md:pr-5 md:pl-5 md:pl-0 md:ml-40 lg:ml-60">
          <div className="flex flex-row">
            {navbarData.map((item, index) =>
              <NavButton key={index} {...item}/>
            )}   
          </div>
          <div>
            <button variant="link" onClick={handleLogout} className="w-0 md:w-40 xl:w-48 flex-1 transition duration-500 ease-in-out bg-green-400 hover:bg-green-500 text-white font-bold p-2 rounded" id="login" type="submit">
              <span>Déconnection</span>
            </button>
          </div>
        </ul>
      </div>
    </>
  );
}

export default Navbar;