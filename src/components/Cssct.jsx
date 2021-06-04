import React from 'react';
import useFirestore from '../hooks/useFirestore';
import Title from './Title'
import CssctMission from './CssctMission.jsx'

const Cssct = ({admin, textColor}) => {
  const { docs } = useFirestore('Cssct');

  return (
    <>
      <div className="min-h-screen pb-4">
      <Title id="cssct" textColor={textColor}>CSSCT</Title>
        <div className="">
          <p className="pb-6 text-xl text-center text-gray-50">Les missions de la CSSCT</p>
          <div>
            {docs && docs.map((mission, index) =>
                  <CssctMission key={index} {...mission} admin={admin} even={index%2 === 0} last={index===docs.length - 1} textColor={textColor}/>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Cssct;