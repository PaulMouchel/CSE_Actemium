import React from 'react';
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useFirestore from '../hooks/useFirestore';
import deleteDocument from '../hooks/deleteDocument';
import { motion } from 'framer-motion'
const CssctMission = ({title, text, imageUrl, even, admin, id}) => {
  
  const { docs } = useFirestore('Cssct');

  const handleDelete = () => {
    deleteDocument({docs, id, collection:'Cssct'})
  }

  return (
    <div className={`py-4 flex justify-between ${!even ? "flex-row-reverse" : ""}`}>
      <div className="w-1/2 px-32 text-center flex flex-col justify-center">
          <p className="text-gray-50 text-2xl font-bold">{title}</p>
          <p className="text-gray-50 text-xl">{text}</p>
      </div>

      <div className="w-1/2 px-4 flex justify-center mx-4">
          <div className="h-96 w-full bg-cover bg-center" style={{backgroundImage: `url(${imageUrl})`}}>
            {admin && 
              <motion.button className=" transform duration-300 ease-in-out bg-red-500 hover:bg-white text-white hover:text-red-500 rounded-full block w-10 h-10 flex items-center justify-center relative top-2 left-2"
                onClick={handleDelete}
                layout
                initial={{ x:100 }}
                animate={{ x:0 }}
                transition={{ delay: 0 }}>
                  <FontAwesomeIcon icon={faTrashAlt} />
              </motion.button>
            }
          </div>
      </div>
    </div>
  );
}

export default CssctMission;