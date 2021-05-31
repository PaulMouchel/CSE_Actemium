import React from 'react';
import Title from './Title'
import CssctMission from './CssctMission.jsx'

import risquesPro from '../images/Risques_Pro.jpg'
import maladiesPro from '../images/Maladies_Pro.jpg'
import conditionsTravail from '../images/Conditions_Travail.jpg'
import harcelement from '../images/Harcelement.JPG'
import violence from '../images/Violence.jpg'
import hygiene from '../images/Hygiene.jpg'

const Cssct = () => {
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
              {missions.map((mission, index) =>
                    <CssctMission key={index} image={mission.image} text={mission.text} even={index%2 === 0}/>
                )}
              
            </div>

          </div>
        </div>
      </>
  );
}

export default Cssct;