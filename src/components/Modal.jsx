import React, {useEffect} from 'react';
import { motion } from 'framer-motion';

const Modal = ({ setSelectedImg, selectedImg, galleryUrl }) => {

  let xDown = null;                                                        
  let yDown = null;

  // Navigation avec les flèches du clavier, contrôle de la touche
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
    }
  }

  // Navigation en swippant sur mobile : pose du doigt
  const handleTouchStart = (e) => {
    const firstTouch = e.touches[0];                                      
    xDown = firstTouch.clientX;                                      
    yDown = firstTouch.clientY;                                      
  };                                                
  
  // Navigation en swippant sur mobile : déplacement du doigt
  const handleTouchMove = (e) => {
      if ( ! xDown || ! yDown ) {
          return;
      }
  
      const xUp = e.touches[0].clientX;                                    
      const yUp = e.touches[0].clientY;
  
      const xDiff = xDown - xUp;
      const yDiff = yDown - yUp;
                                                                           
      if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
          if ( xDiff > 0 ) {
              /* right swipe */ 
              navigate(e, 1)
          } else {
              /* left swipe */
              navigate(e, -1)
          }                       
      } 
      else {
          if ( yDiff > 0 ) {
              /* down swipe */ 
          } else { 
              /* up swipe */
          }                                                                 
      }
      /* reset values */
      xDown = null;
      yDown = null;                                             
  };

  useEffect(() => {
    document.addEventListener('keydown', keyCheck);
    document.addEventListener('touchstart', handleTouchStart, false);        
    document.addEventListener('touchmove', handleTouchMove, false);
    return () => {
      document.removeEventListener('keydown', keyCheck)
      document.removeEventListener('touchstart', handleTouchStart, false);        
      document.removeEventListener('touchmove', handleTouchMove, false);
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
      exit={{opacity: 0}}
    >
      <div className="fixed left-0 w-20 h-20 hidden md:flex items-center justify-center z-50" onClick={e => navigate(e, -1)}> 
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
      <div className="fixed right-0 w-20 h-20 hidden md:flex items-center justify-center z-50" onClick={e => navigate(e, 1)}> 
        <div className="bg-gray-300 w-10 h-2 rounded-full transform rotate-45 absolute -translate-y-3"/>
        <div className="bg-gray-300 w-10 h-2 rounded-full transform -rotate-45 absolute translate-y-3"/>
      </div>
    </motion.div>
  )
}

export default Modal;