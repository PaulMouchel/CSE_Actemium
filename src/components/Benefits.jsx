import React from 'react';
import Title from './Title'
import Benefit from './Benefit.jsx'

const Benefits = ({admin, textColor, benefits}) => {

  return (
      <div className="min-h-screen pb-10">
        <Title textColor={textColor}>Nos avantages</Title>
        <div className="pb-4" >
          <div>
            { benefits?.docs && benefits.docs.map((benefit, index) =>
              <Benefit key={index} {...benefit} admin={admin} even={index%2 === 0} last={index===benefits.docs.length - 1} textColor={textColor}/>
            )}
          </div>
        </div>
      </div>
  );
}

export default Benefits;