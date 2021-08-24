import React from 'react';

const Error404 = () => {

    return (
        <div className="w-screen h-screen bg-primary bg-center bg-fixed flex items-center justify-center">
            <div className="text-center">
                <div className="text-white text-8xl">
                    Erreur 404
                </div>
                <div className="text-white text-2xl">
                    Impossible de trouver la page
                </div>
            </div>
        </div>
    );
}

export default Error404;