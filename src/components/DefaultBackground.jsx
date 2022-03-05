import React from 'react';
import defaultBg from '../images/defaultBg.jpg'

const DefaultBackground = ({ className, children }) => {
    
    return (
        <div className={`w-screen min-h-screen bg-cover bg-center bg-fixed ${className}`}
            style={{backgroundImage: `url(${defaultBg})`}}>
                {children}
        </div>
    );
}

export default DefaultBackground;