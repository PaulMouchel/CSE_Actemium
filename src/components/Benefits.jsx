import React from 'react';
import useFirestore from '../hooks/useFirestore';
import Title from './Title'
import Benefit from './Benefit.jsx'

import { motion } from 'framer-motion'
import { Link } from 'react-router-dom' 

import chequesVacances from '../images/chequesVacances.jpg'
import gifts from '../images/gifts.jpg'
import cezam from '../images/cezam.png'

// Icons
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Benefits = ({admin}) => {
  const { docs } = useFirestore('Benefits');
  console.log("benefits : " + docs)
  // const benefitsList = [
  //   {
  //     text: "Des chèques vacances",
  //     image: chequesVacances
  //   },
  //   {
  //     text: "L'arbre de Noël",
  //     image: gifts
  //   },
  //   {
  //   text: "La carte CEZAM",
  //     image: cezam
  //   }
  // ]

  return (
      <>
        <Title id="benefits">Nos avantages</Title>
          <div >
            <div>
              {docs && docs.map((benefit, index) =>
                    <Benefit key={index} {...benefit} even={index%2 === 0}/>
                )}
              
            </div>

            { admin &&
          <Link to="/create-benefit"
            className="mt-2 sm:mt-0">
            <motion.button 
              className="mb-2 m-auto focus:outline-none w-64 rounded-full p-2 px-5 bg-green-500 text-white flex justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>
                <FontAwesomeIcon icon={faPlus} />
                <span className="pl-4">Créer un nouvel avantage</span>
              </span>  
            </motion.button>
          </Link> }

          </div>
        </>
  );
}

export default Benefits;