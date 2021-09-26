import React, { useState } from "react"

import { useHistory } from 'react-router-dom'
import useFirestore from '../hooks/useFirestore';
import { projectFirestore, projectStorage, timestamp } from '../firebase/config';

import { faSpinner, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import PreviousButton from '../components/PreviousButton.jsx'
import UploadImageForm from '../components/UploadImageForm.jsx';
import { motion } from "framer-motion";
import deleteFolderContents from "../functions/deleteFolderContents";

const UpdateBackground = ({image, setImage}) => {
    const [loading, setLoading] = useState(false)
    const [selectedImage, setSelectedImage] = useState()
    const history = useHistory()

    const { docs } = useFirestore('Background');

    const setBackground = (images) => {
        if (images[0]) {
            setSelectedImage(images[0])
        }
    }

    const changeImageField = (parameter, value) => {
        const newImage = selectedImage;
        newImage[parameter] = value;
        setSelectedImage(newImage);
     };

    const uploadToDatabase = async () => {
        
        const collectionRef = projectFirestore.collection('Background');
        const createdAt = timestamp();
        const imageUrl = selectedImage.downloadURL
        if (docs[0]) {
            await collectionRef.doc(docs[0].id).update({ imageUrl, createdAt })
        } else {
            await collectionRef.add({ imageUrl, createdAt });
        }
        setLoading(false)
        setImage(imageUrl)
        history.push('/')
     }
    
     const UploadImage = () => {
        deleteFolderContents("Background")
        changeImageField("storageRef", projectStorage.ref().child("Background/" + selectedImage.fileName));
        const uploadTask = selectedImage.storageRef.put(selectedImage.file);
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

        if (selectedImage) {
            setLoading(true)
            UploadImage()
        }
    }

    return (
        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        className="w-screen h-screen flex justify-center items-center bg-cover bg-center"
            style={selectedImage ? {backgroundImage: `url(${selectedImage.url})`} : {}}>
            <div className="p-4 bg-white bg-opacity-20 rounded flex justify-center items-center flex-col shadow-md">
                <div className="w-full p-3 pb-10">
                    <PreviousButton to="/"/>
                </div>
                    <UploadImageForm file={image} setFile={setBackground} maxWidth={1920} maxHeight={1920}/>
                    { !loading ?
                        <button 
                            disabled={loading} 
                            className="focus:outline-none transform duration-300 ease-in-out bg-primary hover:bg-white text-white hover:text-primary rounded-full block w-10 h-10 flex items-center justify-center" 
                            onClick={handleSubmit}>
                                <FontAwesomeIcon icon={faCheck} />
                        </button>
                        :
                        <button 
                            disabled={loading} 
                            className="focus:outline-none transform duration-300 ease-in-out bg-primary hover:bg-white text-white hover:text-primary rounded-full block w-10 h-10 flex items-center justify-center">
                                <FontAwesomeIcon className="animate-spin" icon={faSpinner}/>
                        </button>
                        
                    }
            </div>
        </motion.div>
    )
}

export default UpdateBackground;