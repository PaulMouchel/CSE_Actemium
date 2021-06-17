import React from 'react';
import { faUserPlus, faUserAlt } from "@fortawesome/free-solid-svg-icons";
import ToggleAdminButton from './ToggleAdminButton.jsx'

const ToggleAdmin = ({admin, setAdmin}) => {
    
    const toAdmin = {
        icon: faUserPlus,
        text: "Mode admin"
    }

    const toUser = {
        icon: faUserAlt,
        text: "Mode normal"
    }

    return (
        <nav className="z-50 fixed right-5 bottom-0 invisible md:visible">
            <ul className="mx-5 py-3 mb-5 flex flex-col justify-end">
                {!admin ?
                    <ToggleAdminButton admin={admin} setAdmin={setAdmin} {...toAdmin} />
                :
                    <ToggleAdminButton admin={admin} setAdmin={setAdmin} {...toUser} />
                }
            </ul>
        </nav>
    );
}

export default ToggleAdmin;