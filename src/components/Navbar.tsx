import { Dispatch, SetStateAction, useState } from "react"
import { useHistory } from "react-router-dom"
import { useAuth } from '../contexts/AuthContext'
import { motion } from 'framer-motion'
import NavButton from './NavButton'
import BurgerMenu from './BurgerMenu'
import { navbarData } from "../data/navbar";

type Props = {
  isAdmin: boolean
  admin: boolean
  setAdmin: Dispatch<SetStateAction<boolean>>
}

const Navbar = (props: Props) => {

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
      <div className="w-40 lg:w-60 h-40 lg:h-60 bg-opacity-100 absolute top-0 left-0 z-50 hidden md:block">
        <img src={import.meta.env.VITE_NAV_LOGO_URL} className="bg-opacity-100 float-left" alt="logo"/>
      </div>

      <div className="hidden md:flex bg-gray-100 shadow-md">
        <ul className="w-full text-center flex justify-between items-center flex-row py-5 pr-2 md:pr-5 md:pl-0 md:ml-40 lg:ml-60">
          <div className="flex flex-row">
            {navbarData.map((item, index) =>
              <NavButton key={index} {...item}/>
            )}   
          </div>
          <div>
            <motion.button 
            //@ts-ignore
            variant="link" 
            onClick={handleLogout} className="w-0 md:w-40 xl:w-48 flex-1 bg-secondary text-white font-bold p-2 rounded mr-4" id="logout" type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}>
              <span>Déconnexion</span>
            </motion.button>
          </div>
        </ul>
      </div>
      <BurgerMenu {...props}/>
    </>
  );
}

export default Navbar;