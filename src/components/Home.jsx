import React from 'react';
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Quotation from './Quotation.jsx'
import useFirestore from '../hooks/useFirestore';
import Background from '../components/Background.jsx'

const Home = ({admin}) => {

  const { docs } = useFirestore('Background');

  return ( 
    <Background>
    <div className="min-h-screen flex flex-col justify-evenly items-center bg-fixed">
      <div className="p-10 flex justify-center items-center bg-gray-100 bg-opacity-70 md:rounded-lg">
        <h1 className="text-5xl text-gray-800 text-center">Bienvenue sur le site du CSE<br/>d'Actemium Rennes</h1>
      </div>
      <Quotation admin={admin}/>
      { admin &&
          <Link to="/update-background"
              className="mt-2 sm:mt-0">
              <motion.button 
                  className="m-auto focus:outline-none w-64 rounded-full p-2 px-5 bg-green-500 text-white flex justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
              >
              <span>Modifier l'image de fond</span>
              </motion.button>
          </Link> 
      }
    </div>
    </Background>
  );
}

export default Home;