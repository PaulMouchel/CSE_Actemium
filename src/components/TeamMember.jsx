import React from 'react';

import VerticalLine from './VerticalLine.jsx'
import MemberDescription from './MemberDescription'
import { AnimatePresence } from 'framer-motion'
import useFirestore from '../hooks/useFirestore';
import deleteDocument from '../hooks/deleteDocument';
import DeleteButton from './DeleteButton.jsx'

const TeamMember = ({imageUrl, fullName, role, holder, executive, president, last, even, admin, id}) => {

  const { docs } = useFirestore('Team');

  const handleDelete = () => {
    deleteDocument({docs, id, collection:'Team'})
  }

  return (
        <>
            <div className={`w-full flex ${!even && "flex-row-reverse"} justify-center max-h-40 md:max-h-56`}>
                <div className={`md:w-1/4 flex justify-${even ? "end" : "start"}`}>
                    <MemberDescription even={even} fullName={fullName} role={role} holder={holder} executive={executive} president={president} />
                </div>
                <div className="w-40 md:w-56 flex justify-center mx-4">
                    <div className="h-40 md:h-56 w-40 md:w-56 bg-cover bg-center rounded-full border-8" style={{backgroundImage: `url(${imageUrl})`}}>
                    <AnimatePresence>
                        {admin && <DeleteButton onClick={handleDelete}/>}
                    </AnimatePresence>
                    </div>
                </div>
                <div className="md:w-1/4"></div>
            </div>
            { !last ? <VerticalLine/> : "" }
        </>
    );
}

export default TeamMember;