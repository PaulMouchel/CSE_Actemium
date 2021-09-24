import React from 'react';
import Title from './Title'
import TeamMember from './TeamMember.jsx'
import { sortByOrder } from '../functions/sortByOrder';

const Team = ({textColor, admin, team}) => {

    return (
        <>
            <Title textColor={textColor}>L'équipe du CSE</Title>
            <div className="flex flex-col pt-12 pb-32">
                {team?.docs && sortByOrder(team.docs).map((member, index) =>
                    <TeamMember key={index} {...member} first={index === 0} last={index === team.docs.length - 1} even={index%2 === 0} admin={admin} textColor={textColor} docs={team.docs}/>
                )}
            </div>
        </>
    );
}

export default Team;