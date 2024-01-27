import { FaLock, FaLockOpen } from "react-icons/fa"
import ToggleAdminButton from './ToggleAdminButton'
import { Dispatch, SetStateAction } from "react"

type Props = {
    admin: boolean
    setAdmin: Dispatch<SetStateAction<boolean>>
}

const ToggleAdmin = ({admin, setAdmin}: Props) => {
    
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
                <ToggleAdminButton 
                    admin={admin} 
                    setAdmin={setAdmin} 
                    { ...(admin ? {...toUser} : {...toAdmin}) }
                />
            </ul>
        </nav>
    );
}

export default ToggleAdmin;