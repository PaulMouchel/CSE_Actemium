import { FaArrowLeft } from "react-icons/fa"
import { Link } from 'react-router-dom'

type Props = {
    to: string
    hash?: string
    state?: Record<string, any>
    className: string
}

const PreviousButton = ({ to, hash, state, className }:Props) => {
  
    return (
        <Link 
            to={{
                pathname: to,
                state: { data: state, hash: hash }
            }}  
            className={`transform duration-300 ease-in-out bg-secondary hover:bg-white text-white hover:text-secondary rounded-full w-10 h-10 flex items-center justify-center ${className}`}
        >
            <FaArrowLeft />
        </Link>
    );
}

export default PreviousButton;