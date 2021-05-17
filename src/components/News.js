import React from 'react';
import NewsArticle from './NewsArticle'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ski from "../images/ski.jpg";
import hollidays from "../images/hollidays.jpg";
import gifts from "../images/gifts.jpg";

const News = () => {
  return (
      <>
        <h1>Actualités</h1>
          <div id="news">
            <NewsArticle image={ski} date="29.01.2021" title="Envie de montagne ?" subTitle="Plus que quelques jours pour louer nos appartements à Meribel (encore 2 disponibles)"/>
            <NewsArticle image={gifts} date="20.11.2020" title="Repas de noël" subTitle="Il ne reste plus beaucoup de temps pour voter pour la date qui vous convient le mieux pour le repas de noël"/>
            <NewsArticle image={hollidays} date="10.05.2020" title="Les chèques vacances sont là !" subTitle="Passez au bureau pour les récupérer"/>
            
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