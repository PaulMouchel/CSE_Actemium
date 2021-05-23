import React from 'react';

import VerticalLine from './VerticalLine.jsx'
import MemberDescription from './MemberDescription'

const TeamMember = ({image, fullName, role, holder, last, even}) => {
  return (
        <>
            {
                even ? 
                    <div className="col-start-1 flex align-center jutify-end">
                        <MemberDescription even={true} fullName={fullName} role={role} holder={holder} />
                    </div>
                :
                    ""
            }
            <div className="col-start-2 flex justify-center">
                <div className="h-56 w-56 bg-cover bg-center rounded-full border-8" style={{backgroundImage: `url(${image})`}}></div>
            </div>
            
            {
                !even ? 
                    <div className="col-start-3 flex align-center justify-start">
                        <MemberDescription even={false} fullName={fullName} role={role} holder={holder} />
                    </div>
                :
                    ""
            }

            { !last ? <VerticalLine/> : "" }
        </>
    );
}

export default TeamMember;