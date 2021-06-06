import React from 'react';
import useFirestore from '../hooks/useFirestore';
import Title from './Title'
import TeamMember from './TeamMember.jsx'

import thomas from '../images/thomas.jpg'
import vincent from '../images/Vincent.JPG'
import maxime from '../images/Maxime.JPG'
import sandrine from '../images/Sandrine.JPG'
import norman from '../images/Norman.JPG'
import guillaume from '../images/Guillaume.JPG'
import catherine from '../images/Catherine.JPG'
import jeremie from '../images/Jeremie.JPG'
import mathieu from '../images/Mathieu.JPG'

const Team = ({textColor}) => {
    const { docs } = useFirestore('Team');
    const members = [
        {
            image: vincent,
            fullName: "Vincent Chaintreau",
            role: "Président du CSE",
            executive: false,
            holder: true,
            president: true
        },
        {
            image: sandrine,
            fullName: "Sandrine Lemarié",
            role: "Vice-secrétaire et référent contre les harcèlements et agissements sexistes",
            executive: false,
            holder: true,
            president: false
        },
        {
            image: maxime,
            fullName: "Maxime Thetiot",
            role: "Vice-trésorier",
            executive: false,
            holder: true,
            president: false
        },
        {
            image: guillaume,
            fullName: "Guillaume Louvel",
            role: "Membre de la CSSCT",
            executive: false,
            holder: true,
            president: false
        },
        {
            image: thomas,
            fullName: "Thomas Le-Gal",
            role: "Trésorier",
            executive: true,
            holder: true,
            president: false
        },
        {
            image: norman,
            fullName: "Norman Jan-Le-Cloirec",
            role: "Secrétaire",
            executive: true,
            holder: true,
            president: false
        },
        {
            image: catherine,
            fullName: "Catherine Bastard",
            role: "Membre de la CSSCT (secrétaire)",
            executive: false,
            holder: false,
            president: false
        },
        {
            image: jeremie,
            fullName: "Jérémie Chaperon",
            role: "Membre de la CSSCT",
            executive: true,
            holder: false,
            president: false
        },
        {
            image: mathieu,
            fullName: "Mathieu Buan",
            role: "",
            executive: true,
            holder: false,
            president: false
        }
    ]
    return (
        <>
            <Title id="team" textColor={textColor}>L' équipe du CSE</Title>
            <div className="text-center">
                <h3 className="">Lorem ipsum dolor sit amet consectetur.</h3>
            </div>
            <div className="flex flex-col pt-6 pb-32">
                {/* {members.map((member, index) =>
                    <TeamMember key={index} {...member} last={index === members.length - 1} even={index%2 === 0}/>
                )} */}
                {docs && docs.map((member, index) =>
                    <TeamMember key={index} {...member} last={index === members.length - 1} even={index%2 === 0}/>
                )}
            </div>
        </>
    );
}

export default Team;