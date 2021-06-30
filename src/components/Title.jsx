import React from 'react';

const Title = (props) => {
    
    return (
        <div className={`border-b-2 border-secondary mx-16 md:mx-48 flex justify-center pt-16 pb-8 mb-8 text-4xl font-bold tracking-wider ${props.textColor && `text-${props.textColor}`}`}>
            <h2>{props.children}</h2>
        </div>
    );
}

export default Title;