import React from 'react';
import { faUserPlus, faUserAlt } from "@fortawesome/free-solid-svg-icons";
import AdminButton from './AdminButton.jsx'

const SwitchToAdmin = ({admin}) => {
    
    const toAdmin = {
        href: "admin",
        icon: faUserPlus,
        text: "Mode admin"
    }

    const toUser = {
        href: "",
        icon: faUserAlt,
        text: "Mode normal"
    }

    return (
        <nav className="z-50 fixed right-5 bottom-0 z-50 invisible md:visible">
            <ul className="mx-5 py-3 mb-5 flex flex-col justify-end">
                {!admin ?
                    <AdminButton {...toAdmin} />
                :
                    <AdminButton {...toUser} />
                }
            </ul>
        </nav>
    );
}

export default SwitchToAdmin;