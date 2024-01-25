import { Dispatch, MouseEvent, SetStateAction, useState } from "react"
import { useHistory } from "react-router-dom"
import { useAuth } from '../contexts/AuthContext'
import { motion, AnimatePresence } from 'framer-motion'
import BurgerButton from './BurgerButton'
import BurgerAdmin from './BurgerAdmin'
import BurgerToggleAdmin from './BurgerToggleAdmin'
import { navbarData } from "../data/navbar";

type Props = {
    isAdmin: boolean
    admin: boolean
    setAdmin: Dispatch<SetStateAction<boolean>>
}

const BurgerMenu = ({isAdmin, admin, setAdmin}: Props) => {

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

    const handleClick = (e: MouseEvent<HTMLDivElement>) => {
        console.log(e.currentTarget.classList)
        if (e.currentTarget.classList.contains('menu-closer')) {
          toggleHamburgerMenu()
        }
    }

    return (
        <>
            <AnimatePresence>
            { hamburgerMenuVisible && 
                <motion.div className="z-50 fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center" 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.98 }}
                exit={{opacity:0}}
                onClick={handleClick}
                >
                    <motion.nav className="menu-closer md:hidden fixed h-screen w-screen"
                    initial={{y:"-100vh"}}
                    animate={{y:0,}}
                    transition={{type: "tween"}}
                    exit={{y:"-100vh"}}>
                        {error && <span className="text-gray-50 bg-red-500 py-1 px-2 mb-2 -mt-2 rounded">{error}</span>}
                        <motion.div layout
                        transition={{ type:"spring", ease: "easeOut", duration: 0.5 }} 
                        className={`z-50 rounded-b-lg bg-gray-50 w-full pb-20`}>
                            <motion.ul className="pt-16 flex flex-col justify-between">
                                {navbarData.map((item, index) =>
                                    <BurgerButton key={index} index={index} {...item}/>
                                )}
                                {isAdmin &&
                                    <BurgerToggleAdmin admin={admin} setAdmin={setAdmin}/>
                                }
                            </motion.ul>
                            <motion.button 
                            //@ts-ignore
                            variant="link" 
                            onClick={handleLogout} 
                            className="fixed top-5 right-5 w-30 md:w-40 xl:w-48 flex-1 bg-secondary text-white font-bold p-2 rounded" 
                            id="login" 
                            type="submit"
                            initial={{opacity:0}}
                            animate={{opacity:1}}
                            transition={{delay:0.7}}>
                                <span>Déconnexion</span>
                            </motion.button>
                            <AnimatePresence>
                            { admin && hamburgerMenuVisible &&
                                <BurgerAdmin/>
                            }
                            </AnimatePresence>
                        </motion.div> 
                    </motion.nav>
                </motion.div>}
            </AnimatePresence>
            <div className={`md:hidden z-50 top-3 left-3 fixed bg-gray-50 bg-opacity-50 w-12 h-12 rounded-lg p-1 flex flex-col justify-between px-2 py-3 ${hamburgerMenuVisible && "change"}`} 
            onClick={toggleHamburgerMenu}>
                <div className={`h-0.5 transform bg-gray-500 bar1`}></div>
                <div className={`h-0.5 bg-gray-500 bar2`}></div>
                <div className={`h-0.5 transform bg-gray-500 bar3`}></div>
            </div>  
        </>
    );
}

export default BurgerMenu;