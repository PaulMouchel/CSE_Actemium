import React from 'react';

import Home from './Home'
import News2 from './News'
import Benefits from './Benefits'
import Cssct from './Cssct'
import Team from './Team'
import Contact from './Contact'
import Quotation from './Quotation'

const Content = () => {
  return (
    <div id="content">
        <div className="bg-blue">
          <News2 />
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