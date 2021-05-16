import React from 'react';
import { faHome, faThumbsUp, faUserShield, faUsers, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = () => {
  return (
    <nav id="sidebar">
        <div className="img bg-wrap text-center py-4 img-bg">
            <div className="user-logo">
                <div className="img pic"></div>    
            </div>
        </div>
        <ul className="list-unstyled components mb-5">
            <li className="active">
                <a href="localhost:3000"><FontAwesomeIcon icon={faHome} className="mr-3"/> Accueil</a>
            </li>
            <li>
                <a href="localhost:3000"><FontAwesomeIcon icon={faThumbsUp} className="mr-3"/> Nos avantages</a>
            </li>
            <li>
                <a href="localhost:3000"><FontAwesomeIcon icon={faUserShield} className="mr-3"/> CSSCT</a>
            </li>
            <li>
                <a href="localhost:3000"><FontAwesomeIcon icon={faUsers} className="mr-3"/> Qui sommes nous ?</a>
            </li>
            <li>
                <a href="localhost:3000"><FontAwesomeIcon icon={faEnvelope} className="mr-3"/> Nous contacter</a>
            </li>
        </ul>
    </nav>
  );
}

export default Sidebar;
    ;
