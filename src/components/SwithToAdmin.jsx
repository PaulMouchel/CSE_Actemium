import React from 'react';
import { faUserPlus, faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom' 

const SwitchToAdmin = ({admin}) => {
    
    return (
        <nav className="z-50 fixed right-5 bottom-0 z-50 invisible md:visible">
            <ul className="mx-5 py-3 mb-5 flex flex-col justify-end">
                <li className="group flex items-center flex-row-reverse">
                    <div className="z-10 transform group-hover:translate-x-1 group-hover:scale-125 text-gray-50 flex justify-center w-10 h-10 tiny-menu-item rounded my-2 place-content-center bg-blue-900 transition duration-300 ease-in-out">
                        {!admin ?
                        <Link className="flex justify-center items-center" to="/admin">
                            <FontAwesomeIcon icon={faUserPlus} className="box-content  p-1.5 m-0"/>
                        </Link>
                        :
                        <Link className="flex justify-center items-center" to="/">
                            <FontAwesomeIcon icon={faUserAlt} className="box-content  p-1.5 m-0"/>
                        </Link>
                        }
                    </div>
                    <div className="mr-2 h-10 inline-flex justify-center items-center hide font-poppins py-1 px-2 text-blue-900 bg-gray-50 font-bold bg-opacity-50 rounded">
                        Mode {!admin? "admin" : "normal"}
                    </div>
                </li>
            </ul>
        </nav>
    );
}

export default SwitchToAdmin;