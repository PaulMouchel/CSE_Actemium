import React, { useRef, useState } from "react"

import { Link, useHistory } from 'react-router-dom'
import useFirestore from '../hooks/useFirestore';
import { projectFirestore, timestamp } from '../firebase/config';

import { faArrowLeft, faSpinner, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import UploadImageForm from '../components/UploadImageForm.jsx';

const UpdateBackground = () => {
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    const { docs } = useFirestore('Quotation');

    const textRef = useRef();
    const authorRef = useRef();

    const [gallery, setGallery] = useState([]);

    const setarticleImage = (image) => {
        if (image) {
          let galleryClone = gallery
          galleryClone[0] = image[0]
          setGallery([...galleryClone])
        }
      }

    const uploadToDatabase = async (author, text) => {
        const collectionRef = projectFirestore.collection('Quotation');
        const createdAt = timestamp();
        if (docs[0]) {
            await collectionRef.doc(docs[0].id).update({ text, author, createdAt })
        } else {
            await collectionRef.add({ text, author, createdAt });
        }
        setLoading(false)
        history.push('/admin')
     }
    
    const handleSubmit = (e) => {
        e.preventDefault()

        let text = textRef.current.value
        let author = authorRef.current.value

        if (text !== "") {
            setLoading(true)
            uploadToDatabase(author, text)
        }
    }

    return (
        <div className="w-screen h-screen flex justify-center items-center bg-gradient-to-t from-yellow-200 to-yellow-500 bg-cover bg-center"
        style={gallery[0] && {backgroundImage: `url(${gallery[0].url})`}}>
            <div className="p-4 bg-white bg-opacity-20 rounded flex justify-center items-center flex-col shadow-md">
                <div className="w-full p-3 pb-10">
                <Link to="/admin" className="transform duration-300 ease-in-out bg-green-500 hover:bg-white text-white hover:text-green-500 rounded-full block w-10 h-10 flex items-center justify-center">
                    <FontAwesomeIcon icon={faArrowLeft} />
                </Link>
                </div>
                

                

                    
                   
                    <UploadImageForm file={gallery} setFile={setarticleImage}/>
                    { !loading ?
                        <button 
                            disabled={loading} 
                            className="transform duration-300 ease-in-out bg-green-500 hover:bg-white text-white hover:text-green-500 rounded-full block w-10 h-10 flex items-center justify-center" 
                            onClick={handleSubmit}>
                                <FontAwesomeIcon icon={faCheck} />
                        </button>
                        :
                        <button 
                            disabled={loading} 
                            className="transform duration-300 ease-in-out bg-green-500 hover:bg-white text-white hover:text-green-500 rounded-full block w-10 h-10 flex items-center justify-center">
                                <FontAwesomeIcon className="animate-spin" icon={faSpinner}/>
                        </button>
                        
                    }
            </div>
        </div>
    )
}

export default UpdateBackground;