import React from 'react';

const Benefit = ({text, image, even}) => {
  return (
 
    <div id="benefit">
        
        <div className={`py-4 flex justify-between ${!even ? "flex-row-reverse" : ""}`}>
            <div className="w-1/2 px-32 text-center flex flex-col justify-center">
                <p className="text-gray-50 text-xl">{text}</p>
            </div>

           
            <div className="w-1/2 px-4 flex justify-center mx-4">
                <div className="h-96 w-full bg-cover bg-center" style={{backgroundImage: `url(${image})`}}></div>
            </div>
           

          </div>

    </div> 
  );
}

export default Benefit;