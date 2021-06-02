import React from 'react';
import useFirestore from '../hooks/useFirestore';
import Title from './Title'
import CssctMission from './CssctMission.jsx'

import { motion } from 'framer-motion'
import { Link } from 'react-router-dom' 

// Icons
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Cssct = ({admin}) => {
  const { docs } = useFirestore('Cssct');

  return (
    <>
      <div className="min-h-screen pb-4">
      <Title id="cssct" addClass="text-gray-50">CSSCT</Title>
        <div className="">
          <p className="text-gray-50">Les missions de la CSSCT</p>
          <div>
            {docs && docs.map((mission, index) =>
                  <CssctMission key={index} {...mission} admin={admin} even={index%2 === 0}/>
            )}
            { admin &&
              <Link to="/create-cssct"
                className="mt-2 sm:mt-0">
                <motion.button 
                  className="m-auto focus:outline-none w-64 rounded-full p-2 px-5 bg-green-500 text-white flex justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>
                    <FontAwesomeIcon icon={faPlus} />
                    <span className="pl-4">Créer une nouvelle mission</span>
                  </span>  
                </motion.button>
              </Link> 
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default Cssct;