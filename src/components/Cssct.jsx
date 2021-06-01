import React from 'react';
import useFirestore from '../hooks/useFirestore';
import Title from './Title'
import CssctMission from './CssctMission.jsx'

import { motion } from 'framer-motion'
import { Link } from 'react-router-dom' 

import risquesPro from '../images/Risques_Pro.jpg'
import maladiesPro from '../images/Maladies_Pro.jpg'
import conditionsTravail from '../images/Conditions_Travail.jpg'
import harcelement from '../images/Harcelement.JPG'
import violence from '../images/Violence.jpg'
import hygiene from '../images/Hygiene.jpg'

// Icons
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Cssct = ({admin}) => {
  const { docs } = useFirestore('Cssct');
  const missions = [
    {
      text: "Les risques professionnels",
      image: risquesPro
    },
    {
      text: "les maladies professionnelles",
      image: maladiesPro
    },
    {
      text: "les conditions de travail des employés, et l'impact sur celles-ci de tout projet qui lui est soumis",
      image: conditionsTravail
    },
    {
      text: "les actions préventives contre le harcèlement sexuel et moral",
      image: harcelement
    },
    {
      text: "la prévention des RPS (risques psycho-sociaux)",
      image: violence
    },
    {
      text: "l'hygiène",
      image: hygiene
    }
  ]
  return (
      <>
        <div className="min-h-screen">
        <Title id="cssct" addClass="text-gray-50">CSSCT</Title>
          <div className="">
            <p className="text-gray-50">Les missions de la CSSCT</p>
            <div>
              {docs && docs.map((mission, index) =>
                    <CssctMission key={index} {...mission} even={index%2 === 0}/>
                )}
              
            </div>

          </div>
          { admin &&
          <Link to="/create-cssct"
            className="mt-2 sm:mt-0">
            <motion.button 
              className="mb-2 m-auto focus:outline-none w-64 rounded-full p-2 px-5 bg-green-500 text-white flex justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>
                <FontAwesomeIcon icon={faPlus} />
                <span className="pl-4">Créer une nouvelle mission</span>
              </span>  
            </motion.button>
          </Link> }

        </div>
      </>
  );
}

export default Cssct;