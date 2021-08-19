import React from 'react';
import useFirestore from '../hooks/useFirestore';
import Title from './Title'
import Benefit from './Benefit.jsx'
import { useEffect } from 'react';

const Benefits = ({admin, textColor, benefits, setBenefits}) => {
  const { docs } = useFirestore('Benefits');
 
  useEffect(()=>{
    if (docs && docs[0] && docs !== benefits) {
      setBenefits(docs)
    }
  })

  return (
      <div className="min-h-screen pb-10">
        <Title textColor={textColor}>Nos avantages</Title>
        <div className="pb-4" >
          <div>
            { benefits && benefits.map((benefit, index) =>
              <Benefit key={index} {...benefit} admin={admin} even={index%2 === 0} last={index===docs.length - 1} textColor={textColor}/>
            )}
          </div>
        </div>
      </div>
  );
}

export default Benefits;