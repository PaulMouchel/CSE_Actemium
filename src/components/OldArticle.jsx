import React from 'react';
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const OldArticle = (article) => {

  return (
    <motion.article className={`border-b w-full border-gray-400 m-auto mt-2 bg-gray-200 hover:shadow-md group transform duration-300 ease-in-out hover:-translate-y-1`}
    >
      <Link to={{
        pathname:`/news/${article.id}`, 
        state: {data: article}
        }}>
        <div className="flex flex-row">
          <div className="px-2 py-4 text-gray-800 flex items-center">
              <span className="text-xs">{article.date}</span>           
          </div>
          <div className="p-2 flex justify-start items-center">
            <h3 className={`text-xs text-blue-800 font-bold`}>
              {article.title}
            </h3>
          </div>
        </div>
      </Link>
    </motion.article>     
  );
}

export default OldArticle;