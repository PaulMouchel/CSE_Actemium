import React from 'react';
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import News from './News'
import Benefits from './Benefits'
import Cssct from './Cssct'
import Team from './Team'
import Contact from './Contact'

const Content = () => {
  return (
    <div id="content">
        <div className="bg-blue">
        <News />
          <div id="quote">
              <div className="quote-start">
                  <FontAwesomeIcon icon={faQuoteLeft} className="quotemark"/>
              </div>
              <blockquote>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</blockquote>  
              <div className="quote-end">
                  <FontAwesomeIcon icon={faQuoteRight} className="quotemark" />
              </div>
          </div>
        </div>
        <div className="bg-white">
          <Benefits />
        </div>
        <div className="bg-blue">
          <Cssct />
        </div>
        <div className="bg-white">
          <Team />
        </div>
        <div className="bg-blue">
          <Contact />
        </div>
    </div>
  );
}

export default Content;