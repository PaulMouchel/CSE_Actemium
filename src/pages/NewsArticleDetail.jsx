import React, { useState } from 'react';
import { faClock, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom' 

import ImageGrid from '../components/ImageGrid.jsx'
import Modal from '../components/Modal.jsx'


const NewsArticleDetail = () => {
    const { state } = useLocation();
    const [selectedImg, setSelectedImg] = useState(null);

  return (
      
    <article className="group max-w-6xl m-auto lg:border-2 lg:my-10 lg:pb-5">
        <Link to="/" className=" transform duration-300 ease-in-out bg-green-500 hover:bg-white text-white hover:text-green-500 rounded-full block w-10 h-10 flex items-center justify-center relative top-2 left-2">
            <FontAwesomeIcon icon={faArrowLeft} />
        </Link>
        <div className="flex flex-col justify-between h-full -mt-10">
            <div>
                {state.articles.galleryUrl && <div className="h-72 md:h-96 bg-cover bg-center" style={{backgroundImage: `url(${state.articles.galleryUrl[0]})`}}></div>}
                <div className="p-4 pb-0">
                    <div className="relative bottom-9 left-3 bg-green-500 p-2 text-gray-50 rounded-full px-3 inline-block">
                        <FontAwesomeIcon icon={faClock} />
                        <span className="ml-1">{state.articles.date}</span>                   
                    </div>
                </div>
            </div>
            <div className="p-4 pt-0">
                <h3 className="max-w-4xl m-auto relative lg:mt-6 bottom-3 text-xl text-blue-800 font-bold">
                    {state.articles.title}
                </h3>
                <div className="max-w-4xl m-auto text-justify text-gray-600 mb-5">
                    {state.articles.subTitle}
                </div>
                <div className="max-w-4xl m-auto text-justify text-gray-600 mb-10">
                    {state.articles.text}
                </div>
                {state.articles.galleryUrl && <>
                <h3 className="max-w-4xl m-auto relative bottom-3 text-xl text-blue-800 font-bold">
                    Galerie
                </h3>
                <ImageGrid gallery={state.articles.galleryUrl} setSelectedImg={setSelectedImg} /></>}
            </div>
        </div>
        { selectedImg && (
            <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
        )}
    </article>     
  );
}

export default NewsArticleDetail;