import React from 'react';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';

const Background = (props) => {
    
    const { docs } = useFirestore('Background');

    const getImage = () => {
        if (props.image) {
            console.log("image")
            return props.image
        }
        if (docs[0]) {
            console.log("docs")
            props.setImage(docs[0].imageUrl)
            // return docs[0].imageUrl
        }
        return ""
    }

    return (
        <motion.div className="w-screen h-screen flex justify-center items-center bg-gray-50 bg-cover bg-center bg-fixed"
            // style={docs[0] && {backgroundImage: `url(${docs[0].imageUrl})`}}
            style={docs[0] && {backgroundImage: `url(${getImage()})`}}
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}>
                {props.children}
        </motion.div>
    );
}

export default Background;