import React from 'react';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGithub } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {


  return (
    <section id="footer" className="bg-gray-700 p-6 text-gray-50 text-xs flex justify-between">
      <div>
        Réalisé en 2021 par Paul Mouchel
      </div>
      <div>
        paulmouchel@live.fr
      </div>
      {/* <FontAwesomeIcon icon={faGithub} className="text-sm box-content p-1.5 m-0"/> */}
    </section>
  );
}

export default Footer;