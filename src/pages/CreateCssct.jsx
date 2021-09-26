import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom' 
import PreviousButton from '../components/PreviousButton.jsx'
import ActionButton from '../components/ActionButton.jsx'
import { motion } from 'framer-motion';

import { uploadImage } from '../functions/uploadImage';
import randomUid from '../functions/randomUid';
import { uploadToDatabase } from '../functions/uploadToDatabase';

import UploadImageForm from '../components/UploadImageForm.jsx';

const CreateCssct = ({collection}) => {
  const [image, setImage] = useState();
  const [loading, setLoading] = useState(false)
  const [storageId, setStorageId] = useState(""); 
  const [title, setTitle] = useState("")
  const [text, setText] = useState("")
  const [error, setError] = useState("")
  const titleRef = useRef()
  const textRef = useRef()
  const history = useHistory()

 const setDataAndUpload = () => {
  const imageUrl = image.downloadURL
  const data = { imageUrl, title:title, text:text, storageId }

  uploadToDatabase(collection, data)
  .then(() => {
    setLoading(false)
    history.push('/')
  })
}

  const setBenefitImage = (images) => {
    if (images[0]) {
      setImage(images[0])
    }
  }

  useEffect(() => {
    if (loading && storageId && title && text) {
      uploadImage(image, setImage, collection, storageId, setError, setDataAndUpload)
    }
  }, [loading, storageId, title, text])

  const handleSubmit = async (e) => {
    e.preventDefault()

    let _title = titleRef.current.value
    let _text = textRef.current.value

    if (image && _title !== "" && _text !== "") {
      setTitle(_title)
      setText(_text)
      setStorageId(randomUid)
      setLoading(true)
    }
  }

  return (
    <>
      <motion.div 
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0}}
      className="w-full md:py-2" >
        <article className="group max-w-6xl m-auto lg:border-2 lg:my-6 pb-5 bg-gray-50">
          <PreviousButton to="/" className="relative top-2 left-2"/>
          <p className="mx-20 relative -top-7 mb-4 text-center text-xl sm:text-3xl text-gray-600">Créer {collection === "Benefits" ? "un nouvel avantage" : "une nouvelle mission CSSCT" }</p>
          <div className="flex flex-col justify-between h-full -mt-10">
            <div className="pt-8">
              
              {image ? 
                <div className="flex items-center justify-center h-72 md:h-96 bg-cover bg-center" style={{backgroundImage: `url(${image.url})`}}>
                  <UploadImageForm file={[image]} setFile={setBenefitImage} maxWidth={1000} maxHeight={1000}/>
                </div>
                :
                <div className="flex items-center justify-center h-72 md:h-96 bg-gray-400">
                  <UploadImageForm file={[image]} setFile={setBenefitImage} maxWidth={1000} maxHeight={1000}/>
                </div>
                }
            </div> 
            <div className="p-4 pt-0">
              <h3 className="w-full my-3 text-xl text-blue-800 font-bold">
                <input type="text" name="title" className="block w-full border-2 focus:border-secondary p-2 outline-none" autoComplete="off" placeholder="Titre" ref={titleRef} required/>
              </h3>
              <div className="w-full h-60 text-gray-600">
                <textarea type="text" name="text" className="resize-none block h-full w-full border-2 focus:border-secondary p-2 outline-none" autoComplete="off" placeholder="Texte" ref={textRef} required/>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-end px-4 mt-1">
            <ActionButton loading={loading} className="w-80" type="submit" onClick={handleSubmit}>Publier</ActionButton>
          </div>
        </article>
      </motion.div>     
    </>
  );
}

export default CreateCssct;