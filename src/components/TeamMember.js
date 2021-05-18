import React from 'react';

const TeamMember = ({image, fullName, role}) => {
  return (
        <div>
            <div className="team-member">
                <img src={image} alt="uploaded pic" width="300px"/>
            </div>
            <div className="text-center">
                <h3>{fullName}</h3>
                <p className="text-muted">{role}</p>
            </div>
        </div>
    );
}

export default TeamMember;