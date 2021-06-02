import React from 'react';
import { motion } from 'framer-motion';

const ImageGrid = ({ gallery, setSelectedImg }) => {

  return (
    <div className="max-w-screen-lg m-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-4 ">
            {gallery && gallery.map((doc, index) => (
                <motion.div 
                    className="relative overflow-hidden opacity-80 bg-cover bg-center" 
                    style={{
                        padding: "50% 0", 
                        backgroundImage: `url(${doc})`
                    }} 
                    key={index} 
                    layout
                    whileHover={{ opacity: 1 }}s
                    onClick={() => setSelectedImg(doc)}
                />
            ))}
        </div>
    </div>
  )
}

export default ImageGrid;