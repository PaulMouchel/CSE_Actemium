import React from 'react';

const MemberDescription = ({fullName, role, holder, even}) => {
  return (
        <div className={`my-12 m${even ? "l" : "r"}-8 p-2 w-full rounded-md ${even ? "text-right" : ""}`}>
            
                <h3 className="text-gray-700 text-2xl font-bold">{fullName}</h3>
                <p className="text-gray-700 text-xl">{ holder ? "Titulaire" : "Suppléant"}</p>
                <p className="text-gray-700 text-lg">{fullName} est le {role} du CSE</p>
            
        </div>
    );
}

export default MemberDescription;