import React from 'react';

const Title = (props) => {
    
    return (
        <div className={`flex justify-center py-4 text-3xl ${props.addClass}`}>
            <h2>{props.children}</h2>
        </div>
    );
}

export default Title;