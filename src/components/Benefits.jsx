import React from 'react';
import Title from './Title'
import Benefit from './Benefit.jsx'
import { sortByOrder } from '../functions/sortByOrder';
import useFirestore from '../hooks/useFirestore'

const Benefits = ({admin, textColor}) => {

  const benefits = useFirestore('Benefits');

  return (
      <div className="min-h-screen pb-10">
        <Title textColor={textColor}>Nos avantages</Title>
        <div className="pb-4" >
          <div>
            { benefits?.docs && sortByOrder(benefits.docs).map((benefit, index) =>
              <Benefit key={index} {...benefit} admin={admin} even={index%2 === 0} first={index===0} last={index===benefits.docs.length - 1} textColor={textColor}/>
            )}
          </div>
        </div>
      </div>
  );
}

export default Benefits;