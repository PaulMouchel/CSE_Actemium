import React from 'react';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';

const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore('images');

  return (
    <div className="grid grid-cols-4 gap-4">
      {docs && docs.map(doc => (
        <motion.div className="relative overflow-hidden opacity-80" style={{padding: "50% 0"}} key={doc.id} 
          layout
          whileHover={{ opacity: 1 }}s
          onClick={() => setSelectedImg(doc.url)}
        >
          <motion.img src={doc.url} alt="uploaded pic" className="min-h-full min-w-full absolute top-0 left-0" style={{maxWidth:"150%"}}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          />
        </motion.div>
      ))}
    </div>
  )
}

export default ImageGrid;