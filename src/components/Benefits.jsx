import React from 'react';
import useFirestore from '../hooks/useFirestore';
import Title from './Title'
import Benefit from './Benefit.jsx'

const Benefits = ({admin, textColor}) => {
  const { docs } = useFirestore('Benefits');
 
  return (
    <>
      <Title id="benefits" textColor={textColor}>Nos avantages</Title>
      <div className="pb-4" >
        <div>
          { docs && docs.map((benefit, index) =>
            <Benefit key={index} {...benefit} admin={admin} even={index%2 === 0} last={index===docs.length - 1} textColor={textColor}/>
          )}
        </div>
      </div>
    </>
  );
}

export default Benefits;