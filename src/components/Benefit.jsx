import React from 'react';

import { Link } from 'react-router-dom'

const Benefit = (props) => {

  return (
    <div className={`py-4 md:flex justify-between flex-row${!props.even ? "-reverse" : ""} border-gray-500 ${!props.last && "border-b"}`}>
      <div className="md:w-1/2 md:px-20 text-center flex flex-col justify-center pb-4 md:pb-0">
        <p className={`text-${props.textColor} text-2xl font-bold pb-2`}>{props.title}</p>
        <p className={`text-${props.textColor} text-xl`}>{props.subTitle}</p>
        <div>
          <div className="my-2 flex justify-center items-center h-full">
            <Link to={{
          pathname:`/benefits/${props.id}`, 
          state: {data: props}
          }}>
              <button className="bg-secondary rounded-full p-4 py-2 font-bold">
                En savoir plus
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="md:w-1/2 md:px-4 flex justify-center md:mx-4">
        <div className="h-80 md:h-96 w-full bg-cover bg-center" style={{backgroundImage: `url(${props.galleryUrl && props.galleryUrl[0]})`}}>
        </div>
      </div>
    </div>
  );
}

export default Benefit;