import React from 'react';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';

const SimpleBackground = (props) => {
    
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
        <div className={`w-screen min-h-screen bg-cover bg-center bg-fixed ${props.className}`}
            style={docs[0] && {backgroundImage: `url(${getImage()})`}}>
                {props.children}
        </div>
    );
}

export default SimpleBackground;