import React from 'react';

import VerticalLine from './VerticalLine.jsx'
import MemberDescription from './MemberDescription'

const TeamMember = ({image, fullName, role, holder, president, last, even}) => {
  return (
        <>
            <div className={`w-full flex ${!even && "flex-row-reverse"} justify-center max-h-40 md:max-h-56`}>
                <div className={`md:w-1/4 flex justify-${even ? "end" : "start"}`}>
                    <MemberDescription even={even} fullName={fullName} role={role} holder={holder} president={president} />
                </div>
                <div className="w-40 md:w-56 flex justify-center mx-4">
                    <div className="h-40 md:h-56 w-40 md:w-56 bg-cover bg-center rounded-full border-8" style={{backgroundImage: `url(${image})`}}></div>
                </div>
                <div className="md:w-1/4"></div>
            </div>
            { !last ? <VerticalLine/> : "" }
        </>
    );
}

export default TeamMember;