import { Dispatch, SetStateAction } from 'react';
import { motion } from 'framer-motion';
import { IconType } from 'react-icons';

const itemVariant = {
    hidden: {
        x:-50,
        opacity:0
    },
    visible: {
        x:0,
        opacity:1,
        transition: {duration: 0.3, delay: 0.77}
    }
}

type Props = {
    admin: boolean
    setAdmin: Dispatch<SetStateAction<boolean>>
    Icon: IconType
    text: string
}

const BurgerToggleAdminButton = ({admin, setAdmin, Icon, text}: Props) => {

    const toggleAdmin = () => {
        setAdmin(!admin)
    }

    return (
        <motion.li
            variants={itemVariant}
            initial="hidden"
            animate="visible">    
            <div
                className="p-3 pl-6 block justify-center items-center"
                onClick={toggleAdmin}
                >
                <div className="inline-flex items-center justify-center w-10 h-10 bg-blue-900 rounded-md">
                    <Icon className="block w-4 h-4 text-gray-50"/>
                </div>
                <span className="pl-4">{text}</span>
            </div> 
        </motion.li> 
    );
}

export default BurgerToggleAdminButton;