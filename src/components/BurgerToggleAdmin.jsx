import React from 'react';
import { FaLock, FaLockOpen } from 'react-icons/fa'
import BurgerToggleAdminButton from './BurgerToggleAdminButton.jsx'

const BurgerToggleAdmin = (props) => {
    
    const toAdmin = {
        Icon: FaLock,
        text: "Mode admin"
    }

    const toUser = {
        Icon: FaLockOpen,
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