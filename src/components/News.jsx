import React, {useState} from 'react';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom' 

//Components
import NewsArticle from './NewsArticle.jsx'
import Title from './Title'

// Icons
import { faArrowRight, faArrowLeft, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const News = ({admin}) => {
  const { docs } = useFirestore('News');
  const [showArticles, setShowArticles] = useState(false)

  const handleClick = () => {
    setShowArticles(!showArticles)
  }

  return (
      <>
        <Title id="news">Actualités</Title>
        <div>{"admin = " + admin}</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {docs && docs.map((article, index) =>
            <NewsArticle key={index} {...article} admin={admin} />
          )} 
        </div>

        <div className="w-100 flex flex-col sm:flex-row items-center justify-evenly py-6">
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

          { admin &&
          <Link to="/create-article"
            className="mt-2 sm:mt-0">
            <motion.button 
              className="focus:outline-none w-64 rounded-full p-2 px-5 bg-green-500 text-white flex justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>
                <FontAwesomeIcon icon={faPlus} />
                <span className="pl-4">Créer un nouvel article</span>
              </span>  
            </motion.button>
          </Link> }
        </div>
      </>
  );
}

export default News;