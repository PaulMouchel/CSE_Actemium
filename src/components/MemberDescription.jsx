import React from 'react';

const MemberDescription = ({fullName, role, holder, even}) => {
  return (
        <div className={`flex flex-col justify-center align-center  p-2  ${even ? "text-right" : ""}`}>
                <h3 className="text-gray-700 text-xl md:text-2xl font-bold">{fullName}</h3>
                <p className="text-gray-700 text-xl">{ holder ? "Titulaire" : "Suppléant"}</p>
                <p className="text-gray-700 text-lg">{role} du CSE</p>
        </div>
    );
}

export default MemberDescription;