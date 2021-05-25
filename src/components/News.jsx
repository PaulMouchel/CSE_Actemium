import React from 'react';
import useFirestore from '../hooks/useFirestore';

//Components
import NewsArticle from './NewsArticle.jsx'
import Title from './Title'

// Icons
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const News = () => {
  const { docs } = useFirestore('News');

  return (
      <>
        <Title id="news">Actualités</Title>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {docs && docs.map((article, index) =>
            <NewsArticle key={index} {...article}/>
          )} 
        </div>

        <div className="w-100 d-flex justify-center py-6">
          <a href="https://www.actemium.fr/actualites/" className="wb-button relative wb-button-green-stroke-blue rounded-full p-2 bg-green-500 text-white" role="button">
            <span className="d-flex button-content-wrapper">
              <span className="wb-button-icon wb-align-icon-right">
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
              <span className="pl-2">Voir tous les articles</span>
            </span>
          </a>
        </div>
      </>
  );
}

export default News;