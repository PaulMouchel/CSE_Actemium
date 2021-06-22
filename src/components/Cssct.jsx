import React from 'react';
import useFirestore from '../hooks/useFirestore';
import Title from './Title'
import CssctMission from './CssctMission.jsx'

const Cssct = ({admin, textColor}) => {
  const { docs } = useFirestore('Cssct');
  
  return (
    <div className="min-h-screen pb-10">
      <Title textColor={textColor}>CSSCT</Title>
      <div className="pb-4 h-screen">
        <p className="text-xl text-center text-gray-50">Les missions de la CSSCT</p>
        <p className="h-0 md:invisible text-center text-gray-50">(Cliquer sur une image pour afficher le détail)</p>
        <div className="flex w-full h-full items-center justify-center">
          <div className="flex w-5/6 h-4/6 flex-col md:flex-row">
          {docs && docs.map((mission, index) =>
              <CssctMission key={index} {...mission} admin={admin}/>
          )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cssct;