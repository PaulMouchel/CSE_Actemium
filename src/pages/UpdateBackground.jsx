import React, { useState } from "react"

import { Link, useHistory } from 'react-router-dom'
import useFirestore from '../hooks/useFirestore';
import { projectFirestore, projectStorage, timestamp } from '../firebase/config';

import { faArrowLeft, faSpinner, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import UploadImageForm from '../components/UploadImageForm.jsx';

const UpdateBackground = () => {
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    const { docs } = useFirestore('Background');

    const [image, setImage] = useState(null);

    const setBackground = (images) => {
        if (images[0]) {
          setImage(images[0])
        }
      }

      const changeImageField = (parameter, value) => {
        const newImage = image;
        newImage[parameter] = value;
        setImage(newImage);
     };

    const uploadToDatabase = async () => {
        
        const collectionRef = projectFirestore.collection('Background');
        const createdAt = timestamp();
        const imageUrl = image.downloadURL
        
        if (docs[0]) {
            await collectionRef.doc(docs[0].id).update({ imageUrl, createdAt })
        } else {
            await collectionRef.add({ imageUrl, createdAt });
        }
        setLoading(false)
        history.push('/admin')
     }
    
     const UploadImage = () => {
        changeImageField("storageRef", projectStorage.ref().child("Background/" + image.fileName));
        const uploadTask = image.storageRef.put(image.file);
        uploadTask.on(
            "state_changed",
            null,
            function error(err) {
              console.log("Error Image Upload:", err);
            },
            async function complete() {
              const downloadURL = await uploadTask.snapshot.ref.getDownloadURL();
              changeImageField("downloadURL", downloadURL);
              uploadToDatabase()
    
            }
        );
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (image) {
            setLoading(true)
            UploadImage()
        }
    }

    return (
        <div className="w-screen h-screen flex justify-center items-center bg-gray-50 bg-cover bg-center"
       
        style={image ? 
                {backgroundImage: `url(${image.url})`}
                : 
                (docs[0] && {backgroundImage: `url(${docs[0].imageUrl})`})
        }>

            <div className="p-4 bg-white bg-opacity-20 rounded flex justify-center items-center flex-col shadow-md">
                <div className="w-full p-3 pb-10">
                <Link to="/admin" className="transform duration-300 ease-in-out bg-green-500 hover:bg-white text-white hover:text-green-500 rounded-full block w-10 h-10 flex items-center justify-center">
                    <FontAwesomeIcon icon={faArrowLeft} />
                </Link>
                </div>
                

                

                    
                   
                    <UploadImageForm file={image} setFile={setBackground}/>
                    { !loading ?
                        <button 
                            disabled={loading} 
                            className="focus:outline-none transform duration-300 ease-in-out bg-green-500 hover:bg-white text-white hover:text-green-500 rounded-full block w-10 h-10 flex items-center justify-center" 
                            onClick={handleSubmit}>
                                <FontAwesomeIcon icon={faCheck} />
                        </button>
                        :
                        <button 
                            disabled={loading} 
                            className="focus:outline-none transform duration-300 ease-in-out bg-green-500 hover:bg-white text-white hover:text-green-500 rounded-full block w-10 h-10 flex items-center justify-center">
                                <FontAwesomeIcon className="animate-spin" icon={faSpinner}/>
                        </button>
                        
                    }
            </div>
        </div>
    )
}

export default UpdateBackground;