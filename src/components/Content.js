import React from 'react';

import News from './News.jsx'
import Benefits from './Benefits'
import Cssct from './Cssct'
import Team from './Team'
import Contact from './Contact'

const Content = () => {
  return (
    <div id="content">
        <div className="bg-gray-50 px-12 md:px-28 lg:px-48">

          <News />
          
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