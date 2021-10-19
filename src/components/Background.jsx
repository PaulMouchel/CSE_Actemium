import React, { useState, useEffect } from 'react';
import useFirestore from '../hooks/useFirestore';
import defaultBg from '../images/defaultBg.jpg'

const Background = (props) => {
    
    const { docs } = useFirestore('Background');
    const [displayedImage, setDisplayedImage] = useState("")

    useEffect(() => {
        if (props.image) {
            setDisplayedImage(props.image)
        } else if (docs[0]) {
            props.setImage(docs[0].imageUrl)
        } else {
            setDisplayedImage("")
        }
        },[props.image, docs]);

    return (
        <div className={`w-screen min-h-screen bg-cover bg-center bg-fixed ${props.className}`}
            style={{backgroundImage: `url(${props.currentUser ? displayedImage : defaultBg})`}}>
                {props.children}
        </div>
    );
}

export default Background;