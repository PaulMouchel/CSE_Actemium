import React from 'react';
//import useFirestore from '../hooks/useFirestore';

//Components
import NewsArticle from './NewsArticle.jsx'
import Title from './Title'
// import UploadForm from './UploadForm'

// Icons
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Images
import ski from "../images/ski.jpg";
import hollidays from "../images/hollidays.jpg";
import gifts from "../images/gifts.jpg";

const News = () => {
  //const { docs } = useFirestore('images');
  //const ski = docs[0].url;
  return (
      <>
        {/* <UploadForm />
        {docs && docs.map(doc => ( 
          <div className="img-wrap" key={doc.id}>
            <img src={doc.url} alt="uploaded pic"/>
          </div>
        ))} */}
        <Title>Actualités</Title>
          <div id="news" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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