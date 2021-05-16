import React from 'react';
import NewsArticle from './NewsArticle'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const News = () => {
  return (
      <>
        <h1>Actualités</h1>
          <div id="news">
            <NewsArticle />
            <NewsArticle />
            <NewsArticle />
            
            <div className="w-100 d-flex justify-center mt-10px">
              <a href="https://www.actemium.fr/actualites/" className="wb-button relative wb-button-green-stroke-blue" role="button">
                <span className="d-flex button-content-wrapper">
                  <span className="wb-button-icon wb-align-icon-right">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </span>
                  <span className="wb-button-text">Voir tous les articles</span>
                </span>
              </a>
            </div>
          </div>
        </>
  );
}

export default News;
    ;
