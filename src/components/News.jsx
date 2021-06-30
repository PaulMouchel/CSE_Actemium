import React from 'react';
import useFirestore from '../hooks/useFirestore';

//Components
import NewsArticle from './NewsArticle.jsx'
import OldArticle from './OldArticle.jsx'
import Title from './Title'

const News = ({admin, textColor}) => {
  const { docs } = useFirestore('News');

  return (
      <div className="min-h-screen">
        <Title textColor={textColor}>Actualités</Title>
        <div className="flex flex-col md:flex-row justify-center m-auto pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6 md:w-3/5 xl:w-1/2 ">
            {docs && docs.slice(0, 6).map((article, index) =>
              <div className={`h-full ${(index === 0) && "md:col-span-2 md:row-span-2"}`} key={index}>
                <NewsArticle {...article} admin={admin} current={index === 0}/>
              </div>
            )}
          </div>
          <div className="m-auto mt-6 md:mt-0 p-4 md:ml-6 md:mr-0 md:mb-0 w-4/5 md:w-60 text-center bg-gray-200">
            <h2 className="text-gray-50 p-2 bg-gray-700 font-bold">Archives</h2>
            <div className="overflow-auto">
              {docs && docs.slice(6, -1).map((article, index) =>
                <div className="" key={index}>
                  <OldArticle {...article} admin={admin}/>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
  );
}

export default News;