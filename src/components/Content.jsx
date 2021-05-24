import React from 'react';

import Home from './Home.jsx'
import Navbar from './Navbar.jsx';
import TinySidebar from './TinySidebar.jsx';
import News from './News.jsx'
import Benefits from './Benefits.jsx'
import Cssct from './Cssct.jsx'
import Team from './Team.jsx'
import Contact from './Contact.jsx'

const Content = () => {
  return (
    <div id="home">
        <Navbar/>
        <Home/>
        <TinySidebar/>
        <div className="bg-gray-50 px-4 md:px-28 lg:px-48">
          <News />
        </div>
        <div className="bg-gray-200 px-12 md:px-28 lg:px-48">
          <Benefits />
        </div>
        <div className="bg-gray-800 px-12 md:px-28 lg:px-48">
          <Cssct />
        </div>
        <div className="bg-gray-50 px-4 md:px-28 lg:px-48">
          <Team />
        </div>
        <div className="bg-gray-200 px-12 md:px-28 lg:px-48">
          <Contact />
        </div>
    </div>
  );
}

export default Content;