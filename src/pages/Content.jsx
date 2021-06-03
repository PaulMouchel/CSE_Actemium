import React from 'react';


import Home from '../components/Home.jsx'
import Navbar from '../components/Navbar.jsx';
import TinySidebar from '../components/TinySidebar.jsx';
import AdminSideBar from '../components/AdminSideBar.jsx'
import SwitchToAdmin from '../components/SwithToAdmin.jsx'
import News from '../components/News.jsx'
import Benefits from '../components/Benefits.jsx'
import Cssct from '../components/Cssct.jsx'
import Team from '../components/Team.jsx'
import Contact from '../components/Contact.jsx'

const Content = ({admin}) => {


  return (
    <div id="home">
        
        <Navbar/>
        <Home/>
        <TinySidebar/>
        <SwitchToAdmin admin={admin}/>
        { admin && <AdminSideBar />}
        <div className="bg-gray-50 px-4 md:px-28 lg:px-48">
          <News admin={admin} />
        </div>
        <div className="bg-gray-200 px-12 md:px-28 lg:px-48">
          <Benefits admin={admin}/>
        </div>
        <div className="bg-gray-800 px-12 md:px-28 lg:px-48">
          <Cssct admin={admin} />
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