import React from 'react';
import { faUserPlus, faUserAlt } from "@fortawesome/free-solid-svg-icons";
import BurgerToggleAdminButton from './BurgerToggleAdminButton.jsx'

const BurgerToggleAdmin = (props) => {
    
    const toAdmin = {
        icon: faUserPlus,
        text: "Mode admin"
    }

    const toUser = {
        icon: faUserAlt,
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