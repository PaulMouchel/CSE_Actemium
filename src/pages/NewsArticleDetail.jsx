import React, { useState } from 'react';
import { faClock, faTrashAlt, faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation, useHistory, Link } from 'react-router-dom' 
import useFirestore from '../hooks/useFirestore';
import deleteDocument from '../hooks/deleteDocument'

import ImageGrid from '../components/ImageGrid.jsx'
import Modal from '../components/Modal.jsx'
import PreviousButton from '../components/PreviousButton.jsx'

const NewsArticleDetail = ({admin, collection}) => {
    const { state } = useLocation();
    const [selectedImg, setSelectedImg] = useState(null);
    const history = useHistory()
    const { docs } = useFirestore(collection);

    const handleDelete = () => {
        let id = state.data.id;
        deleteDocument({docs, id, collection})
        history.push('/')
    }

  return (
    <div className="w-full md:py-2" >
        <article className="group max-w-6xl m-auto lg:border-2 lg:my-4 lg:pb-5 bg-gray-50">
            <div className="flex justify-between">
            <PreviousButton to={`/#${collection.toLowerCase()}`} className="relative top-2 left-2"/>
            {admin && state?.data &&
                <div className="flex">
                    <Link to={{
                    pathname:`/${collection.toLowerCase()}/${state.data.id}/edit`, 
                    state: {data: state.data}
                    }}>
                        <button className="transform duration-300 ease-in-out bg-primary hover:bg-white text-white hover:text-primary rounded-full block w-10 h-10 flex items-center justify-center relative top-2 right-2 mr-4">
                            <FontAwesomeIcon icon={faPen} />
                        </button>
                    </Link>
                    <button className="transform duration-300 ease-in-out bg-red-500 hover:bg-white text-white hover:text-red-500 rounded-full block w-10 h-10 flex items-center justify-center relative top-2 right-2"
                    onClick={handleDelete}>
                        <FontAwesomeIcon icon={faTrashAlt} />
                    </button>
                </div>
            }
            </div>
            <div className="flex flex-col justify-between h-full -mt-10">
                <div>
                    {state?.data?.galleryUrl && <div className="h-72 md:h-96 bg-cover bg-center" style={{backgroundImage: `url(${state.data.galleryUrl[0]})`}}></div>}
                    <div className="p-4 pb-0">
                        <div className="relative bottom-9 left-3 bg-secondary p-2 text-gray-50 rounded-full px-3 inline-block">
                            <FontAwesomeIcon icon={faClock} />
                            <span className="text-sm ml-1">{state?.data?.date}</span>                   
                        </div>
                    </div>
                </div>
                <div className="p-4 pt-0">
                    <h3 className="max-w-4xl m-auto relative lg:mt-6 bottom-3 text-xl text-blue-800 font-bold">
                        {state?.data?.title}
                    </h3>
                    <div className="max-w-4xl m-auto text-justify text-gray-600 mb-5">
                        {state?.data?.subTitle}
                    </div>
                    <div className="max-w-4xl m-auto text-justify text-gray-600 mb-10" style={{whiteSpace: "pre-line"}}>
                        {state?.data?.text}
                    </div>
                    {state?.data?.galleryUrl && <>
                    <h3 className="max-w-4xl m-auto relative bottom-3 text-xl text-blue-800 font-bold">
                        Galerie
                    </h3></>}
                    {state?.data?.galleryUrl && <ImageGrid galleryUrl={state.data.galleryUrl} setSelectedImg={setSelectedImg}/>}
                </div>
                
            </div>
            { selectedImg && (
                <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
            )}
        </article>  
    </div>   
  );
}

export default NewsArticleDetail;