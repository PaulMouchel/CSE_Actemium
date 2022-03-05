import React, {useEffect, useRef, useState} from 'react';
import { AnimatePresence, motion } from 'framer-motion'
import Home from '../components/Home.jsx'
import Navbar from '../components/Navbar.jsx';
import TinySidebar from '../components/TinySidebar.jsx';
import AdminSideBar from '../components/AdminSideBar.jsx'
import ToggleAdmin from '../components/ToggleAdmin.jsx'
import News from '../components/News.jsx'
import Benefits from '../components/Benefits.jsx'
import Cssct from '../components/Cssct.jsx'
import Team from '../components/Team.jsx'
import Contact from '../components/Contact.jsx'
import Footer from '../components/Footer.jsx'
import { goToHash } from '../functions/goToHash';
import { useLocation } from 'react-router-dom' 

const Content = ({admin, setAdmin, isAdmin}) => {
  
  const homeRef = useRef(null);
  const newsRef = useRef(null);
  const benefitsRef = useRef(null);
  const cssctRef = useRef(null)
  const teamRef = useRef(null)
  const contactRef = useRef(null)
  const [visibleSection, setVisibleSection] = useState();
  let { state } = useLocation();

  const sectionRefs = [
    { section: "home", ref: homeRef },
    { section: "news", ref: newsRef },
    { section: "benefits", ref: benefitsRef },
    { section: "cssct", ref: cssctRef },
    { section: "team", ref: teamRef },
    { section: "contact", ref: contactRef },
  ];  

  useEffect(() => {
    if (state?.hash)
    {
      goToHash(state.hash, 'auto')
    }   
  },[state])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight/2;

      const selected = sectionRefs.find(({ section, ref }) => {
        const ele = ref.current;
        if (ele) {
          const { offsetBottom, offsetTop } = getDimensions(ele);
          return scrollPosition > offsetTop && scrollPosition < offsetBottom;
        }
      });
      
      if (selected && selected.section !== visibleSection) {
        setVisibleSection(selected.section);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visibleSection]);

  const getDimensions = (ele) => {
    const { height } = ele.getBoundingClientRect();
    const offsetTop = ele.offsetTop;
    const offsetBottom = offsetTop + height;
  
    return {
      height,
      offsetTop,
      offsetBottom,
    };
  };

  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}>
        <section id="home" ref={homeRef}>
          <Navbar isAdmin={isAdmin} admin={admin} setAdmin={setAdmin}/>
          <Home/>
        </section>
        <TinySidebar visibleSection={visibleSection}/>
        { isAdmin &&
          <ToggleAdmin admin={admin} setAdmin={setAdmin}/>
        }
        <AnimatePresence>
          { admin && <AdminSideBar />}
        </AnimatePresence>
        <section id="news" ref={newsRef} className="bg-white">
          <News admin={admin} textColor="gray-800"/>
        </section>
        <section id="benefits" ref={benefitsRef} className="bg-gray-200 px-4 md:px-28 lg:px-48">
          <Benefits admin={admin} textColor="gray-800"/>
        </section>
        <section id="cssct" ref={cssctRef} className="bg-gray-800 px-4 md:px-28 lg:px-48">
          <Cssct admin={admin} textColor="gray-50"/>
        </section>
        <section id="team" ref={teamRef} className="bg-gray-50 px-4 md:px-28 lg:px-48">
          <Team admin={admin} textColor="gray-800"/>
        </section>
        <section id="contact" ref={contactRef} className="bg-gray-200 px-12 md:px-28 lg:px-48">
          <Contact textColor="gray-800"/>
        </section> 
        <Footer />
    </motion.div>
  );
}

export default Content;