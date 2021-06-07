import React from 'react';
import { AnimatePresence } from 'framer-motion'
import useFirestore from '../hooks/useFirestore';
import deleteDocument from '../hooks/deleteDocument';
import DeleteButton from './DeleteButton.jsx'

const CssctMission = ({title, text, imageUrl, even, admin, id, last, textColor}) => {
  
  const { docs } = useFirestore('Cssct');

  const handleDelete = () => {
    deleteDocument({docs, id, collection:'Cssct'})
  }

  return (
    <div className={`py-4 md:flex justify-between md:flex-row${!even && "-reverse"} border-gray-500 ${!last && "border-b"}`}>
      <div className="md:w-1/2 md:px-20 text-center flex flex-col justify-center pb-4 md:pb-0">
        <p className={`text-${textColor} text-2xl font-bold pb-2`}>{title}</p>
        <p className={`text-${textColor} text-xl`}>{text}</p>
      </div>

      <div className="md:w-1/2 md:px-4 flex justify-center md:mx-4">
        <div className="h-80 md:h-96 w-full bg-cover bg-center" style={{backgroundImage: `url(${imageUrl})`}}>
            <DeleteButton admin={admin} onClick={handleDelete}/>
        </div>
      </div>
    </div>
  );
}

export default CssctMission;