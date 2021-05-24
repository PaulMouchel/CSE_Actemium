import React from 'react';
import { motion } from 'framer-motion';

const Modal = ({ setSelectedImg, selectedImg }) => {

  const handleClick = (e) => {
    if (e.target.classList.contains('backdrop')) {
      setSelectedImg(null);
    }
  }

  return (
    <motion.div className="backdrop fixed top-0 left-0 w-full h-full bg-black bg-opacity-50" onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img src={selectedImg} alt="enlarged pic block" 
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
      />
    </motion.div>
  )
}

export default Modal;