import React from 'react';
import Title from './Title'
import Benefit from './Benefit.jsx'

import chequesVacances from '../images/chequesVacances.jpg'
import gifts from '../images/gifts.jpg'
import cezam from '../images/cezam.png'

const Benefits = () => {
  const benefitsList = [
    {
      text: "Des chèques vacances",
      image: chequesVacances
    },
    {
      text: "L'arbre de Noël",
      image: gifts
    },
    {
    text: "La carte CEZAM",
      image: cezam
    }
  ]

  return (
      <>
        <Title id="benefits">Nos avantages</Title>
          <div >
            <div>
              {benefitsList.map((benefit, index) =>
                    <Benefit key={index} image={benefit.image} text={benefit.text} even={index%2 === 0}/>
                )}
              
            </div>
          </div>
        </>
  );
}

export default Benefits;