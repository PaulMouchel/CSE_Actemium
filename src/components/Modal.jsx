import React, {useEffect, useRef} from 'react';
import { motion } from 'framer-motion';
import Carousel from './Carousel.jsx'

const Modal = ({ setSelectedImg, selectedImg, galleryUrl }) => {

  const carouselRef = useRef()

  // Navigation avec les flèches du clavier, contrôle de la touche
  const keyCheck = (e) => {
    switch (e.keyCode) {   
        case 37:
            carouselRef.current.slickPrev()
            break;
        case 39:
            carouselRef.current.slickNext()
            break;
        case 27:
            setSelectedImg(null)
            break;
        default:
            break;
    }
  }

  const nextImage = (e) => {
    e.stopPropagation()
    carouselRef.current.slickNext()
  }

  const previousImage = (e) => {
    e.stopPropagation()
    carouselRef.current.slickPrev()
  }

  useEffect(() => {
    document.addEventListener('keydown', keyCheck);
    return () => {
      document.removeEventListener('keydown', keyCheck)
    }
  }, [keyCheck]);

  useEffect(() => {
    const index = getImageIndex(galleryUrl, selectedImg)
    carouselRef.current.slickGoTo(index, true)
  }, [])

  const handleClick = (e) => {
      setSelectedImg(null);
  }

  const getImageIndex = (galleryUrl, selectedImage) => {
      const isTheRightIndex = (element) => element === selectedImage
      return galleryUrl.findIndex(isTheRightIndex)
  }

  return (
    <motion.div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex justify-center items-center" onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{opacity: 0}}
    >
      <div className="fixed left-0 w-20 h-20 hidden md:flex items-center justify-center z-50" onClick={previousImage}> 
        <div className="bg-gray-300 w-10 h-2 rounded-full transform -rotate-45 absolute -translate-y-3"/>
        <div className="bg-gray-300 w-10 h-2 rounded-full transform rotate-45 absolute translate-y-3"/>
      </div>
      <div className="fixed w-screen h-screen flex items-center justify-center">
        <Carousel carouselRef={carouselRef}>
            { galleryUrl.map((imageUrl, index) => 
                <div key={index} className="h-full w-screen items-center justify-center slide">
                    <img src={imageUrl} alt="enlarged pic block"
                    style={{
                      maxHeight: '90vh',
                      maxWidth: '90vw',
                      marginRight: 'auto',
                      marginLeft: 'auto',
                      border: "3px solid white" 
                    }}
                    />
                </div>
            )}
        </Carousel>
      </div>
      <div className="fixed right-0 w-20 h-20 hidden md:flex items-center justify-center z-50" onClick={nextImage}> 
        <div className="bg-gray-300 w-10 h-2 rounded-full transform rotate-45 absolute -translate-y-3"/>
        <div className="bg-gray-300 w-10 h-2 rounded-full transform -rotate-45 absolute translate-y-3"/>
      </div>
    </motion.div>
  )
}

export default Modal;