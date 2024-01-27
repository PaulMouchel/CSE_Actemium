import { FaLock, FaLockOpen } from 'react-icons/fa'
import BurgerToggleAdminButton from './BurgerToggleAdminButton'
import { Dispatch, SetStateAction } from 'react'

type Props = {
    admin: boolean
    setAdmin: Dispatch<SetStateAction<boolean>>
}

const BurgerToggleAdmin = (props: Props) => {
    
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