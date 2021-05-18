import React from 'react';
import TeamMember from './TeamMember'

import imageThomas from '../images/thomas.jpg'

const Team = () => {
    return (
        <div id="team">
            <h1>Qui sommes-nous ?</h1>
            <div className="text-center">
                <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
            </div>
            <div className="team-members">
                <TeamMember image={imageThomas} fullName="thomas Le-Gal" role="Trésorier"/>
                <TeamMember image={imageThomas} fullName="thomas Le-Gal" role="Trésorier"/>
                <TeamMember image={imageThomas} fullName="thomas Le-Gal" role="Trésorier"/>
            </div>
          </div>
  );
}

export default Team;