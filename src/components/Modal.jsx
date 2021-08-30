import React, {useEffect} from 'react';
import { motion } from 'framer-motion';

const Modal = ({ setSelectedImg, selectedImg, galleryUrl }) => {

  const keyCheck = (e) => {
    switch (e.keyCode) {   
        case 37:
            navigate(e, -1)
            break;
        case 39:
            navigate(e, 1)
            break;
        case 27:
            setSelectedImg(null)
            break;
        default:
            break;
    }}

  useEffect(() => {
    document.addEventListener('keydown', keyCheck);
    return () => {
      document.removeEventListener('keydown', keyCheck)
    }
  }, [keyCheck]);

  const handleClick = (e) => {
      setSelectedImg(null);
  }

  const getImageIndex = (galleryUrl, selectedImage) => {
      const isTheRightIndex = (element) => element === selectedImage
      return galleryUrl.findIndex(isTheRightIndex)
  }

  const navigate = (e, offset) => {
    e.stopPropagation()
    let initialIndex = getImageIndex(galleryUrl, selectedImg)
    setSelectedImg(galleryUrl[(initialIndex + galleryUrl.length + offset) % galleryUrl.length])
  }

  return (
    <motion.div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex justify-center items-center" onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="fixed left-0 w-20 h-20 flex items-center justify-center z-50" onClick={e => navigate(e, -1)}> 
        <div className="bg-gray-300 w-10 h-2 rounded-full transform -rotate-45 absolute -translate-y-3"/>
        <div className="bg-gray-300 w-10 h-2 rounded-full transform rotate-45 absolute translate-y-3"/>
      </div>
      <motion.img src={selectedImg} alt="enlarged pic block"  
        style={{
          maxWidth: "90%", 
          maxHeight: "90%", 
          border: "3px solid white" 
        }}
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
      />
      <div className="fixed right-0 w-20 h-20 flex items-center justify-center z-50" onClick={e => navigate(e, 1)}> 
        <div className="bg-gray-300 w-10 h-2 rounded-full transform rotate-45 absolute -translate-y-3"/>
        <div className="bg-gray-300 w-10 h-2 rounded-full transform -rotate-45 absolute translate-y-3"/>
      </div>
    </motion.div>
  )
}

export default Modal;