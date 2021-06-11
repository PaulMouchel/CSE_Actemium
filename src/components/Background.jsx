import React, { useState, useEffect } from 'react';
import useFirestore from '../hooks/useFirestore';

const Background = (props) => {
    
    const { docs } = useFirestore('Background');
    const [diplayedImage, setDisplayedImage] = useState("")

    useEffect(() => {
        if (props.image) {
            setDisplayedImage(props.image)
        } else if (docs[0]) {
            setDisplayedImage(docs[0].imageUrl)
        } else
        setDisplayedImage("")
        },[props.image, docs]);

    return (
        <div className={`w-screen min-h-screen bg-cover bg-center bg-fixed ${props.className}`}
            style={docs[0] && {backgroundImage: `url(${diplayedImage})`}}>
                {props.children}
        </div>
    );
}

export default Background;