import React from 'react';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';

const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore('images');

  return (
    <div className="max-w-screen-lg m-auto">
      <div className="grid grid-cols-4 gap-4 ">
        {docs && docs.map(doc => (
          <motion.div 
            className="relative overflow-hidden opacity-80 bg-cover bg-center" 
            style={
              {
                padding: "50% 0", 
                backgroundImage: `url(${doc.url})`
              }
            } 
            key={doc.id} 
            layout
            whileHover={{ opacity: 1 }}s
            onClick={() => setSelectedImg(doc.url)}
          />
        ))}
      </div>
    </div>
  )
}

export default ImageGrid;