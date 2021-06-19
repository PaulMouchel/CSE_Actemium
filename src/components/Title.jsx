import React from 'react';

const Title = (props) => {
    
    return (
        <div id={props.id} className={`flex justify-center py-16 text-4xl font-bold tracking-wider ${props.textColor && `text-${props.textColor}`}`}>
            <h2>{props.children}</h2>
        </div>
    );
}

export default Title;