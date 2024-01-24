import React, {useEffect, useRef} from 'react';
import { motion } from 'framer-motion';
import Carousel from './Carousel'

const Modal = ({ setSelectedImg, selectedImg, galleryUrl }) => {

  const carouselRef = useRef()

  // Navigation avec les flèches du clavier, contrôle de la touche
  const keyCheck = (e) => {
    switch (e.key) {  
        case "ArrowLeft":
            carouselRef.current.slickPrev()
            break;
        case "ArrowRight":
            carouselRef.current.slickNext()
            break;
        case "Escape":
            setSelectedImg(null)
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
    const selectedImageIndex = getImageIndex(galleryUrl, selectedImg)
    carouselRef.current.slickGoTo(selectedImageIndex, true)
    document.addEventListener('keydown', keyCheck);

    return () => {
      document.removeEventListener('keydown', keyCheck)
    }
  }, [])

  const handleClick = (e) => {
      setSelectedImg(null);
  }

  const getImageIndex = (galleryUrl, selectedImage) => {
      return galleryUrl.findIndex((element) => element === selectedImage)
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