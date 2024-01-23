import React from 'react';
import { Link } from 'react-router-dom'
import Img from "react-cool-img";
import { AnimatePresence } from 'framer-motion';
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { move } from '../functions/move.js';
import FadeButton from './FadeButton.jsx';

const Benefit = (props) => {

  const goDown = () => {
    if (props.last) return
    move(1, "Benefits", props.order, props.id)
  }

  const goUp = () => {
    if(props.first) return
    move(-1, "Benefits", props.order, props.id)
  }

  return (
    <div className="relative">
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
                <button className="bg-secondary rounded-full p-4 py-2 font-bold focus:outline-none">
                  En savoir plus
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 md:px-4 flex justify-center md:mx-4">
          { props.galleryUrl && 
            <Img 
              src={props.galleryUrl[0]} 
              alt={props.title}
              className={`h-80 md:h-96 w-full object-cover loading-bg`}/>
          }
        </div>
      </div>
      <AnimatePresence>
        {props.admin &&
          <>
            <div className="absolute top-0 left-6 h-full flex justify-end">
              {!props.first &&
                  <FadeButton
                  onClick={goUp}
                  className="bg-primary w-8 h-8 rounded-full absolute top-6 flex items-center justify-center focus:outline-none">
                      <FaArrowUp className="text-white text-lg"/>
                  </FadeButton>
              }
              {!props.last &&
                  <FadeButton 
                  onClick={goDown}
                  className="bg-primary w-8 h-8 rounded-full absolute bottom-6 flex items-center justify-center focus:outline-none">
                      <FaArrowDown className="text-white text-lg"/>
                  </FadeButton>
              }
            </div>
          </>
          }
      </AnimatePresence>
    </div>
  );
}

export default Benefit;