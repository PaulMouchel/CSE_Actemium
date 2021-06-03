import React from 'react';
import useFirestore from '../hooks/useFirestore';
import Title from './Title'
import Benefit from './Benefit.jsx'

const Benefits = ({admin}) => {
  const { docs } = useFirestore('Benefits');
 
  return (
    <>
      <Title id="benefits">Nos avantages</Title>
      <div className="pb-4" >
        <div>
          { docs && docs.map((benefit, index) =>
            <Benefit key={index} {...benefit} admin={admin} even={index%2 === 0}/>
          )}
        </div>
      </div>
    </>
  );
}

export default Benefits;