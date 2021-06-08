import React, { useState } from 'react';
import useFirestore from '../hooks/useFirestore';
import deleteDocument from '../hooks/deleteDocument';
import DeleteButton from './DeleteButton.jsx'
import { motion } from 'framer-motion'

const CssctMission = ({title, text, imageUrl, admin, id}) => {
  
  const { docs } = useFirestore('Cssct');
  const [size, setSize] = useState(1)
  const [showText, setShowText] = useState(false)

  const handleDelete = () => {
    deleteDocument({docs, id, collection:'Cssct'})
  }

  const handleMouseEnter = () => {
    let elements = docs.length
    setSize(elements+1)
    setShowText(true)
  }

  const handleMouseLeave = () => {
    setSize(1)
    setShowText(false)
  }

  return (
      <div 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave} 
        className="relative flex-auto hover:flex-5 bg-cover bg-center transition-all duration-500 ease-in-out hover:flex-grow" 
        style={{backgroundImage:`url(${imageUrl})`, flex: size}}>
        { showText && 
          <motion.div className="bg-gradient-to-t from-gray-900 h-full px-4 text-start flex flex-col justify-between items-start py-4"
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{delay: 0.4, duration: 0.7}}>
            <DeleteButton admin={admin} onClick={handleDelete}/>
            {!admin && <div/>}
            <div>
            <p className={`text-gray-50 text-2xl font-bold mt-8 pb-2`}>{title}</p>
            <p className={`text-gray-50 text-xl`}>{text}</p>
            </div>  
          </motion.div>
        }
      </div>
  );
}

export default CssctMission;