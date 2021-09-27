import React from 'react';
import { motion } from 'framer-motion';

const DeleteConfirmation = ({ setShowDeleteConfirmation, handleDelete, info }) => {

  const handleClickValidate = (e) => {
    setShowDeleteConfirmation(false);
    handleDelete()
  }

  const handleClickCancel = (e) => {
    setShowDeleteConfirmation(false);
  }


  return (
    <motion.div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex justify-center items-center z-50" onClick={handleClickCancel}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{opacity: 0}}
    >
      <motion.div 
        className="bg-gray-100 h-64 w-3/4 md:w-1/3 pb-4 flex flex-col justify-between"
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <p className="bg-primary text-white text-center text-lg font-bold py-2">Suppression de {info}</p>
        <p className="text-center text-lg font-bold">Êtes-vous sur ?</p>
        <div className="flex justify-end">
          <button className="bg-red-600 text-white text-md font-bold py-2 px-6 rounded-md focus:outline-none" onClick={handleClickValidate}>Confirmer</button>
          <button className="bg-gray-300 text-md font-bold py-2 px-6  mx-4 rounded-md focus:outline-none" onClick={handleClickCancel}>Annuler</button>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default DeleteConfirmation;