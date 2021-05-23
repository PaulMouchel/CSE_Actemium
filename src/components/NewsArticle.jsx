import React from 'react';
import { faClock, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NewsArticle = ({image, date, title, subTitle}) => {
  const dataArticle = [
    {
      href: "https://www.actemium.fr/smart-industry/symbio-accelere-son-industrialisation-actemium-fidec-thermic-et-citinea-les-accompagne-dans-cette-aventure/",
    }
  ]

  return (
    <article className="border-2 rounded-2xl hover:shadow-md group transform duration-300 ease-in-out hover:-translate-y-1">
      <a href={dataArticle[0].href} title={title}>
        <div className="flex flex-col justify-between h-full">
          <div>
            <div className="h-60 bg-cover bg-center" style={{backgroundImage: `url(${image})`}}></div>
            <div className="p-4 pb-0">
              <div className="relative bottom-9 left-3 bg-green-500 p-2 text-gray-50 rounded-full px-3 inline-block">
                <div>
                  <FontAwesomeIcon icon={faClock} />
                  <span className="ml-1">{date}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 pt-0">
            <h3 className="relative bottom-3 text-xl text-blue-800 font-bold">
              {title}
            </h3>
            <div className="text-justify text-gray-600 mb-2">
              {subTitle}
            </div>
          </div>
          
          <div className="p-4 pt-0 flex justify-between">
              <div className="text-gray-400 font-bold">
                En savoir plus
              </div>
              <div>
                <button className="text-blue-800 group-hover:text-green-300 transform duration-300 ease-in-out group-hover:translate-x-1"><FontAwesomeIcon icon={faArrowRight} /></button>
              </div>
            </div>
        </div>
      </a>
    </article>     
  );
}

export default NewsArticle;