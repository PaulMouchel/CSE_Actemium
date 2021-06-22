import React from 'react';
import useFirestore from '../hooks/useFirestore';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

//Components
import NewsArticle from './NewsArticle.jsx'
import Title from './Title'

const News = ({admin, textColor}) => {
  const { docs } = useFirestore('News');

  const doScrollLeft = () =>
{
  let articles = document.getElementsByClassName('news-article')
  if (articles) {
    document.getElementById('news-carousel').scrollLeft -= articles[0].clientWidth + 20
  }
}

const doScrollRight = () =>
{
  let articles = document.getElementsByClassName('news-article')
  if (articles) {
    document.getElementById('news-carousel').scrollLeft += articles[0].clientWidth + 20
  }
}

  return (
      <div className="min-h-screen">
        <Title textColor={textColor}>Actualités</Title>
        <div className="relative flex flex-row">
          <div className="my-10 w-full flex flex-row flex-nowrap overflow-y-hidden overflow-x-scroll jusify-start items-center" 
          id="news-carousel"
          style={{scrollBehavior: "smooth"}}>
            {docs && docs.map((article, index) =>
              <NewsArticle key={index} {...article} admin={admin} />
            )}
          </div>
          <div className="absolute top-0 -left-5 h-full flex items-center">
            <div className="w-10 h-10 rounded-full bg-gray-200 opacity-70 flex items-center justify-center"
              onClick={doScrollLeft}>
              <FontAwesomeIcon icon={faArrowLeft} className="text-sm box-content p-1.5 m-0"/>
            </div>
          </div>
          <div className="absolute top-0 -right-5 h-full flex items-center">
            <div className="w-10 h-10 rounded-full bg-gray-200 opacity-70 flex items-center justify-center"
               onClick={doScrollRight}>
              <FontAwesomeIcon icon={faArrowRight} className="text-sm box-content p-1.5 m-0"/>
            </div>
          </div>
        </div>
      </div>
  );
}

export default News;