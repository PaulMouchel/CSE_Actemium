import React, {useEffect} from 'react';
import { motion } from 'framer-motion';
import { faArrowCircleLeft, faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Modal = ({ setSelectedImg, selectedImg, galleryUrl }) => {

  const keyCheck = (e) => {
    switch (e.keyCode) {
        case 37:
            navigate(e, -1)
            break;
        case 39:
            navigate(e, 1)
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
    <motion.div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex justify-between items-center" onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <FontAwesomeIcon icon={faArrowCircleLeft} className="text-opacity-70 text-white text-4xl ml-6" onClick={e => navigate(e, -1)}/>
      <motion.img src={selectedImg} alt="enlarged pic block"  
        style={{
          maxWidth: "90%", 
          maxHeight: "90%", 
          border: "3px solid white" 
        }}
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
      />
      <FontAwesomeIcon icon={faArrowCircleRight} className="text-opacity-70 text-white text-4xl mr-6" onClick={e => navigate(e, 1)}/>
    </motion.div>
  )
}

export default Modal;