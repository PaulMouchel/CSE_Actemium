import React from 'react';

import VerticalLine from './VerticalLine.jsx'
import MemberDescription from './MemberDescription'

const TeamMember = ({image, fullName, role, holder, last, even}) => {
  return (
        <>
            <div className="w-full flex justify-center max-h-40 md:max-h-56">
                <div className="md:w-1/4 flex justify-end">
                    {
                        even ? 
                            <MemberDescription even={true} fullName={fullName} role={role} holder={holder} />
                        :
                            ""
                    }
                </div>
                <div className="w-40 md:w-56 flex justify-center mx-4">
                    <div className="h-40 md:h-56 w-40 md:w-56 bg-cover bg-center rounded-full border-8" style={{backgroundImage: `url(${image})`}}></div>
                </div>
                <div className="md:w-1/4 flex justify-start">
                    {
                        !even ? 
                            <MemberDescription even={false} fullName={fullName} role={role} holder={holder} />
                        :
                            ""
                    }
                </div>
            </div>
            { !last ? <VerticalLine/> : "" }
        </>
    );
}

export default TeamMember;