import React, {useState} from 'react';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion'

//Components
import NewsArticle from './NewsArticle.jsx'
import Title from './Title'

// Icons
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const News = ({admin, textColor}) => {
  const { docs } = useFirestore('News');
  const [showArticles, setShowArticles] = useState(false)
  const [display, setDisplay] = useState(0)

  const handleClick = () => {
    setShowArticles(!showArticles)
  }

  const next = () => {
    if (display < (docs.length - 4) && !showArticles) {
      setDisplay(display + 1)
    }
  }

  const previous = () => {
    if (display > 0 && !showArticles) {
      setDisplay(display - 1)
    }
  }

  return (
      <>
        <Title id="news" textColor={textColor}>Actualités</Title>
        <div className="flex flex-row">
          <div className="flex items-center mx-8">
            <div className={`transform duration-300 ease-in-out bg-green-500 hover:bg-white text-white hover:text-green-500 rounded-full block w-10 h-10 flex items-center justify-center bg-opacity-${!showArticles ? "100" : "0"}`}
              onClick={previous}>
              <FontAwesomeIcon icon={faArrowLeft} className={`opacity-${!showArticles ? "100" : "0"}`}/>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {docs && docs.map((article, index) =>
              <>{((index >= display && index < (display+4)) || showArticles) && <NewsArticle key={index} {...article} admin={admin} />}
              </>
            )}
          </div>
          <div className="flex items-center mx-8">
            <div className={`transform duration-300 ease-in-out bg-green-500 hover:bg-white text-white hover:text-green-500 rounded-full block w-10 h-10 flex items-center justify-center bg-opacity-${!showArticles ? "100" : "0"}`}
              onClick={next}>
              <FontAwesomeIcon icon={faArrowRight} className={`opacity-${!showArticles ? "100" : "0"}`}/>
            </div>
          </div>
        </div>
        <div className="w-100 flex flex-col sm:flex-row items-center justify-evenly pt-6 pb-10">
          <motion.button onClick={handleClick} 
            className="focus:outline-none w-64 rounded-full p-2 px-5 bg-green-500 text-white flex justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>
              {!showArticles && <FontAwesomeIcon icon={faArrowRight} />}
              {showArticles && <FontAwesomeIcon icon={faArrowLeft} />}
              <span className="pl-4">{!showArticles ? "Voir tous les articles" : "Masquer les articles"}</span>
            </span>  
          </motion.button>
        </div>
      </>
  );
}

export default News;