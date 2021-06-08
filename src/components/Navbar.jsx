import React, { useState } from "react"

import { useHistory } from "react-router-dom"
import { useAuth } from '../contexts/AuthContext'
import { motion } from 'framer-motion'

import { faHome, faNewspaper, faThumbsUp, faUserShield, faUsers, faEnvelope } from "@fortawesome/free-solid-svg-icons";

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

  const [error, setError] = useState("")
    const { logout } = useAuth()
    const history = useHistory()
    const [hamburgerMenuVisible, setHamburgerMenuVisible] = useState(false)

    const toggleHamburgerMenu = () => {
      setHamburgerMenuVisible(!hamburgerMenuVisible);
    }

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
      <div className="w-40 lg:w-60 h-40 lg:h-60 bg-opacity-100 absolute top-0 left-0 z-50 hidden md:block">
        <img src={logo} className="bg-opacity-100 float-left" alt="logo"/>
      </div>

      <div className="hidden md:flex bg-gray-100 shadow-md">
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


      <nav className="p-2 md:hidden fixed">
          <div className={`w-12 h-12 bg-gray-50 rounded-lg p-1 m-1 flex flex-col justify-between px-2 py-3 ${hamburgerMenuVisible && "change"}`} onClick={toggleHamburgerMenu}>
              <div className={`h-0.5 transform bg-gray-500 bar1`}></div>
              <div className={`h-0.5 bg-gray-500 bar2`}></div>
              <div className={`h-0.5 transform bg-gray-500 bar3`}></div>
          </div>
          <ul className={`flex flex-col justify-between ${!hamburgerMenuVisible && "hidden"}`}>
            {navbarData.map((item, index) =>
                <li className="mx-3 d-block"><a href="#accueil">{item.text}</a></li>
            )}
          </ul>
      </nav>
    </>
  );
}

export default Navbar;