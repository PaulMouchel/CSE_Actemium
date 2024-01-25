import { Link } from 'react-router-dom' 
import { motion } from 'framer-motion';
import { IconType } from 'react-icons';

const buttonsVariant = {
    hidden: {
        x:100
    },
    visible: {
        x:0,
        transition:{delay:0.2}
    },
    exit : {
        x:100
    }
}

type Props = {
    icon: IconType
    href: string
    external: boolean
}

const BurgerAdminButton = (item: Props) => {

    const Icon = item.icon

    return (
        <motion.li className="group flex flex-row-reverse items-center"
            variants={buttonsVariant}
            initial="hidden"
            animate="visible"
            exit="exit">          
            <div className={`z-10 transform group-hover:translate-x-1 group-hover:scale-125 text-gray-50 flex justify-center w-10 h-10 rounded my-2 place-content-center bg-blue-900 transition duration-300 ease-in-out ${item.external && "bg-yellow-300 text-yellow-900"}`}>
                <Link className="flex justify-center items-center" to={"/" + item.href}>
                    <Icon className="box-content  p-1.5 m-0"/>
                </Link>
            </div>
        </motion.li>   
    );
}

export default BurgerAdminButton;