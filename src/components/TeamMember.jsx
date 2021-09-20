import React from 'react';
import VerticalLine from './VerticalLine.jsx'
import MemberDescription from './MemberDescription'
import deleteDocument from '../hooks/deleteDocument';
import DeleteButton from './DeleteButton.jsx'


const TeamMember = ({imageUrl, fullName, role, holder, executive, president, last, even, admin, id, docs}) => {
    const handleDelete = () => {
        deleteDocument({docs, id, collection:'Team'})
    }

    return (
        <>
            <div className={`w-full flex flex-row${!even && "-reverse"} justify-center md:max-h-56`}>
                <div className={`md:w-1/4 flex justify-${even ? "end" : "start"}`}>
                    <MemberDescription even={even} fullName={fullName} role={role} holder={holder} executive={executive} president={president} />
                </div>
                <div className="w-40 md:w-56 flex items-center justify-center mx-4">
                    <div className="h-40 md:h-56 w-40 md:w-56 bg-cover bg-center rounded-full border-4 md:border-8" style={{backgroundImage: `url(${imageUrl})`}}>
                        <DeleteButton admin={admin} onClick={handleDelete} info={fullName}/>
                    </div>
                </div>
                <div className="md:w-1/4"></div>
            </div>
            { !last && <VerticalLine/> }
        </>
    );
}

export default TeamMember;