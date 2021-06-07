import React from 'react';
import { motion, AnimatePresence } from 'framer-motion'

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

import { useScrollData } from "scroll-data-hook";

const containerVariant = {
  hidden:{
    x: '-100vh'
  },
  visible:{
    x: 0
  },
  exit: {
    x: '-100vh',
    transition: {ease: 'easeInOut'}
  }
}

const Content = ({admin}) => {

  const {
    scrolling,
    time,
    speed,
    direction,
    position,
    relativeDistance,
    totalDistance
  } = useScrollData({
    onScrollStart: () => {
      console.log('Started scrolling');
      console.log("position" + position.y)
    },
    onScrollEnd: () => {
      console.log('Finished scrolling');
      console.log("position" + position.y)
    }
  });

  return (
    <div id="home"
        variants={containerVariant}
        initial="hidden"
        animate="visible"
        exit="exit">
        
        <Navbar/>
        <Home/>
        <AnimatePresence>
          { position.y>100 && <TinySidebar/>}
        </AnimatePresence>
        <SwitchToAdmin admin={admin}/>
        <AnimatePresence>
          { admin && <AdminSideBar />}
        </AnimatePresence>
        <div className="bg-gray-50 px-4 md:px-28 lg:px-48">
          <News admin={admin} textColor="gray-800"/>
        </div>
        <div className="bg-gray-200 px-4 md:px-28 lg:px-48">
          <Benefits admin={admin} textColor="gray-800"/>
        </div>
        <div className="bg-gray-800 px-4 md:px-28 lg:px-48">
          <Cssct admin={admin} textColor="gray-50"/>
        </div>
        <div className="bg-gray-50 px-4 md:px-28 lg:px-48">
          <Team admin={admin} textColor="gray-800"/>
        </div>
        <div className="bg-gray-200 px-12 md:px-28 lg:px-48">
          <Contact textColor="gray-800"/>
        </div>
    </div>
  );
}

export default Content;