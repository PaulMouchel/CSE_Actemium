import React from 'react';
import useFirestore from '../hooks/useFirestore';

//Components
import NewsArticle from './NewsArticle.jsx'
import Title from './Title'

const News = ({admin, textColor}) => {
  const { docs } = useFirestore('News');

  return (
      <div className="min-h-screen">
        <Title id="news" textColor={textColor}>Actualités</Title>
        <div className="flex flex-row">
          <div className="mt-10 mb-20 w-full flex flex-row flex-nowrap overflow-y-hidden overflow-x-scroll jusify-start items-center">
            {docs && docs.map((article, index) =>
              <NewsArticle key={index} {...article} admin={admin} />
            )}
          </div>
        </div>
      </div>
  );
}

export default News;