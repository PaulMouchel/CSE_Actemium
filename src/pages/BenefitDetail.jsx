import React, { useState } from 'react';
import { faClock, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation, useHistory } from 'react-router-dom' 
import useFirestore from '../hooks/useFirestore';
import deleteDocument from '../hooks/deleteDocument'

import ImageGrid from '../components/ImageGrid.jsx'
import Modal from '../components/Modal.jsx'
import PreviousButton from '../components/PreviousButton.jsx'

const BenefitDetail = ({admin}) => {
    const { state } = useLocation();
    const [selectedImg, setSelectedImg] = useState(null);
    const history = useHistory()
    const { docs } = useFirestore('Benefits');

    const handleDelete = () => {
        let id = state.benefits.id;
        deleteDocument({docs, id, collection:"News"})
        history.push('/')
    }

  return (
    <div className="w-full md:py-2" >
        <article className="group max-w-6xl m-auto lg:border-2 lg:my-4 lg:pb-5 bg-gray-50">
            <div className="flex justify-between">
            <PreviousButton to="/#benefits" className="relative top-2 left-2"/>
            {admin && 
                <button className=" transform duration-300 ease-in-out bg-red-500 hover:bg-white text-white hover:text-red-500 rounded-full block w-10 h-10 flex items-center justify-center relative top-2 right-2"
                onClick={handleDelete}>
                    <FontAwesomeIcon icon={faTrashAlt} />
                </button>
            }
            </div>
            <div className="flex flex-col justify-between h-full -mt-10">
                <div>
                    {state.benefits.galleryUrl[0] && <div className="h-72 md:h-96 bg-cover bg-center" style={{backgroundImage: `url(${state.benefits.galleryUrl[0]})`}}></div>}
                </div>
                <div className="p-4">
                    <h3 className="max-w-4xl m-auto relative lg:mt-6 bottom-3 text-xl text-blue-800 font-bold">
                        {state.benefits.title}
                    </h3>
                    <div className="max-w-4xl m-auto text-justify text-gray-600 mb-5">
                        {state.benefits.subTitle}
                    </div>
                    <div className="max-w-4xl m-auto text-justify text-gray-600 mb-10" style={{whiteSpace: "pre-line"}}>
                        {state.benefits.text}
                    </div>
                    {state.benefits.galleryUrl && <>
                    <h3 className="max-w-4xl m-auto relative bottom-3 text-xl text-blue-800 font-bold">
                        Galerie
                    </h3></>}
                    {state.benefits.galleryUrl && <ImageGrid gallery={state.benefits.galleryUrl} setSelectedImg={setSelectedImg} />}
                </div>
                
            </div>
            { selectedImg && (
                <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
            )}
        </article>  
    </div>   
  );
}

export default BenefitDetail;