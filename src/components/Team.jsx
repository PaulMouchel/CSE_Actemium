import React from 'react';
import useFirestore from '../hooks/useFirestore';
import Title from './Title'
import TeamMember from './TeamMember.jsx'

const Team = ({textColor, admin}) => {
    const { docs } = useFirestore('Team');

    const sortTeam = (team) => {
        return team.sort((a, b) => {

            if (a.president > b.president) return -1;
            if (a.president < b.president) return 1;

            if (a.holder > b.holder) return -1;
            if (a.holder < b.holder) return 1;

            if (a.executive > b.executive) return -1;
            if (a.executive < b.executive) return 1;
            return 0
        });
    }

    return (
        <>
            <Title id="team" textColor={textColor}>L'équipe du CSE</Title>
            <div className="text-center">
                <h3 className="">Lorem ipsum dolor sit amet consectetur.</h3>
            </div>
            <div className="flex flex-col pt-12 pb-32">
                {docs && sortTeam(docs).map((member, index) =>
                    <TeamMember key={index} {...member} last={index === docs.length - 1} even={index%2 === 0} admin={admin}/>
                )}
            </div>
        </>
    );
}

export default Team;