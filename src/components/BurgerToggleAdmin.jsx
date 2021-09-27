import React from 'react';
import { faLock, faLockOpen } from "@fortawesome/free-solid-svg-icons";
import BurgerToggleAdminButton from './BurgerToggleAdminButton.jsx'

const BurgerToggleAdmin = (props) => {
    
    const toAdmin = {
        icon: faLock,
        text: "Mode admin"
    }

    const toUser = {
        icon: faLockOpen,
        text: "Mode normal"
    }

    return (
        <>
            {!props.admin ?
                <BurgerToggleAdminButton {...props} {...toAdmin} />
            :
                <BurgerToggleAdminButton {...props} {...toUser} />
            }
        </>
    );
}

export default BurgerToggleAdmin;