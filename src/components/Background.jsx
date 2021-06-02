import React from 'react';
import useFirestore from '../hooks/useFirestore';

const Background = (props) => {
    
    const { docs } = useFirestore('Background');

    return (
        <div className="w-screen h-screen flex justify-center items-center bg-gradient-to-t from-yellow-200 to-yellow-500 bg-cover bg-center"
            style={docs[0] && {backgroundImage: `url(${docs[0].imageUrl})`}}>
                {props.children}
        </div>
    );
}

export default Background;