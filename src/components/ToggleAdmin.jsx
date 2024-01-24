import React from 'react';
import { FaLock, FaLockOpen } from "react-icons/fa"
import ToggleAdminButton from './ToggleAdminButton'

const ToggleAdmin = ({admin, setAdmin}) => {
    
    const toAdmin = {
        icon: FaLock,
        text: "Mode admin"
    }

    const toUser = {
        icon: FaLockOpen,
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