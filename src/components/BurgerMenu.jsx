import React, { useState } from "react"

import { useHistory } from "react-router-dom"
import { useAuth } from '../contexts/AuthContext'
import { motion, AnimatePresence } from 'framer-motion'

import { faHome, faNewspaper, faThumbsUp, faUserShield, faUsers, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import BurgerButton from './BurgerButton.jsx'
import BurgerAdmin from './BurgerAdmin.jsx'

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

const BurgerMenu = ({admin}) => {

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

    const handleClick = (e) => {
        console.log(e.target.classList)
        if (e.target.classList.contains('menu-closer')) {
          toggleHamburgerMenu()
        }
      }

  return (
    <>
        <AnimatePresence>
        { hamburgerMenuVisible && 
            <motion.div className="z-50 fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{opacity:0}}
            onClick={handleClick}
            >    
            <motion.nav className="p-3 menu-closer md:hidden fixed h-screen w-screen"
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}>
                {error && <span className="text-gray-50 bg-red-500 py-1 px-2 mb-2 -mt-2 rounded">{error}</span>}
                <motion.div layout
                transition={{ type:"spring", ease: "easeOut", duration: 0.5 }} 
                className={`z-50 border border-gray-500 rounded-lg bg-gray-50 w-full ${admin ? "h-3/4" : "h-2/3"}`}>
                    <motion.ul className="pt-16 flex flex-col justify-between">
                        {navbarData.map((item, index) =>
                            <BurgerButton key={index} {...item}/>
                        )}
                    </motion.ul>
                    <motion.button 
                    variant="link" 
                    onClick={handleLogout} 
                    className="fixed top-5 right-5 w-30 md:w-40 xl:w-48 flex-1 transition duration-500 ease-in-out bg-green-400 hover:bg-green-500 text-white font-bold p-2 rounded" 
                    id="login" 
                    type="submit"
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{delay:0.5}}>
                        <span>Déconnection</span>
                    </motion.button>
                    { admin && 
                    <BurgerAdmin/>}
                </motion.div> 
            </motion.nav>
        </motion.div>}
        </AnimatePresence>
        <div className={`md:hidden z-50 top-3 left-3 fixed w-12 h-12 rounded-lg p-1 flex flex-col justify-between px-2 py-3 ${hamburgerMenuVisible && "change"}`} onClick={toggleHamburgerMenu}>
            <div className={`h-0.5 transform bg-gray-500 bar1`}></div>
            <div className={`h-0.5 bg-gray-500 bar2`}></div>
            <div className={`h-0.5 transform bg-gray-500 bar3`}></div>
        </div>  
    </>
  );
}

export default BurgerMenu;