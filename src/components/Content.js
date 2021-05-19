import React from 'react';
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import News from './News'
import Benefits from './Benefits'
import Cssct from './Cssct'
import Team from './Team'
import Contact from './Contact'
import Quotation from './Quotation'

const Content = () => {
  return (
    <div id="content">
        <div className="bg-blue">
          <News />
          <Quotation/>
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