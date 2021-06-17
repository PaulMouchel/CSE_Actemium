import React from 'react';
import { faClock, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const NewsArticle = (article) => {

  return (
    <motion.article className={`news-article flex-none w-full md:w-72 h-full mb-4 mr-4 bg-gray-50 rounded-2xl hover:shadow-md group transform duration-300 ease-in-out hover:-translate-y-1`}
      whileHover={{scale:1.02}}>
      <Link to={{
        pathname:`/${article.admin ? "admin/" : ""}news-article/${article.id}`, 
        state: {articles: article}
        }}>
        <div className="flex flex-col justify-between h-full">
          <div>
            {article.galleryUrl && <div className="h-60 bg-cover bg-center" style={{backgroundImage: `url(${article.galleryUrl[0]})`}}></div>}
            <div className="p-4 pb-0">
              <div className="relative bottom-9 left-3 bg-secondary p-2 text-gray-50 rounded-full px-3 inline-block">
                <div>
                  <FontAwesomeIcon icon={faClock} />
                  <span className="ml-1 text-xs">{article.date}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 pt-0">
            <h3 className="relative bottom-3 text-lg text-blue-800 font-bold">
              {article.title}
            </h3>
            <div className="text-justify text-gray-600 mb-2">
              {article.subTitle}
            </div>
          </div>
          
          <div className="p-4 pt-0 flex justify-between">
              <div className="text-gray-400 font-bold">
                En savoir plus
              </div>
              <div>
                <button className="text-primary transform duration-300 ease-in-out group-hover:translate-x-1">
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
            </div>
        </div>
      </Link>
    </motion.article>     
  );
}

export default NewsArticle;