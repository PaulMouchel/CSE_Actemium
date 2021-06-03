import React from 'react';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';

const Background = (props) => {
    
    const { docs } = useFirestore('Background');

    return (
        <motion.div className="w-screen h-screen flex justify-center items-center bg-gray-50 bg-cover bg-center bg-fixed"
            style={docs[0] && {backgroundImage: `url(${docs[0].imageUrl})`}}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0 }}>
                {props.children}
        </motion.div>
    );
}

export default Background;