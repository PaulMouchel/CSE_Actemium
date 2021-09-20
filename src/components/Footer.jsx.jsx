import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {


  return (
    <section id="footer" className="bg-gray-800 p-6 text-gray-50 text-xs flex justify-center">
      <div className="flex items-center">
        <span className="mr-4">2021 - Paul Mouchel</span>
        <a href="https://www.linkedin.com/in/paul-mouchel-54875216a/" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className="text-2xl box-content p-1.5 m-0"/>
        </a>
        <a href="https://github.com/PaulMouchel" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} className="text-2xl box-content p-1.5 m-0"/>
        </a>
        <a href="mailto:paulmouchel@live.fr" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faEnvelope} className="text-2xl box-content p-1.5 m-0"/>
        </a>
        <a href="tel:+262692115121" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faPhone} className="text-2xl box-content p-1.5 m-0"/>
        </a>
      </div>
    </section>    
  );
}

export default Footer;