import React, { useState } from "react"

import { useHistory } from "react-router-dom"
import { useAuth } from '../contexts/AuthContext'
import { motion } from 'framer-motion'

import { faHome, faNewspaper, faThumbsUp, faUserShield, faUsers, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import BurgerButton from './BurgerButton.jsx'

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
      <nav className="p-3 md:hidden fixed h-screen w-screen">
        <motion.div layout
        transition={{ type:"spring", ease: "easeOut", duration: 0.5 }} className={`z-50 border border-gray-500 rounded-lg bg-gray-50 ${hamburgerMenuVisible ? "w-full" : "w-12"} ${hamburgerMenuVisible ? "h-2/3" : "h-12"}`}>
          <motion.ul className={`pt-16 flex flex-col justify-between ${!hamburgerMenuVisible && "hidden"}`}>
            {hamburgerMenuVisible && navbarData.map((item, index) =>
              <BurgerButton key={index} {...item}/>
            )}
            
          </motion.ul>
          {hamburgerMenuVisible &&  
          <motion.button variant="link" 
          onClick={handleLogout} 
          className="fixed top-5 right-5 w-30 md:w-40 xl:w-48 flex-1 transition duration-500 ease-in-out bg-green-400 hover:bg-green-500 text-white font-bold p-2 rounded" 
          id="login" 
          type="submit"
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{delay:0.5}}>
              <span>Déconnection</span>
            </motion.button>}     
        </motion.div>
        <div className={`z-50 top-3 left-3 fixed w-12 h-12 rounded-lg p-1 flex flex-col justify-between px-2 py-3 ${hamburgerMenuVisible && "change"}`} onClick={toggleHamburgerMenu}>
              <div className={`h-0.5 transform bg-gray-500 bar1`}></div>
              <div className={`h-0.5 bg-gray-500 bar2`}></div>
              <div className={`h-0.5 transform bg-gray-500 bar3`}></div>
        </div>  
        
      </nav>
    </>
  );
}

export default Navbar;