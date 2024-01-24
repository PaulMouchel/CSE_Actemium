import React, { useRef, useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom' 
import { projectFirestore, timestamp } from '../firebase/config';
import UploadImageForm from '../components/UploadImageForm.jsx';
import ImageGrid from '../components/ImageGrid.jsx';
import Modal from '../components/Modal.jsx';
import PreviousButton from '../components/PreviousButton.jsx'
import ActionButton from '../components/ActionButton.jsx'
import { motion } from 'framer-motion';
import { uploadImages } from '../functions/uploadImages';
import getFormatedDate from '../functions/getFormatedDate.js';
import { sendToastSuccess } from "../functions/sendToast";

const NewsArticleEdit = ({collection}) => {
  const { state } = useLocation();
  const [selectedImg, setSelectedImg] = useState(null); 
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const textData = useRef({
    title: "",
    subTitle: "",
    text: "",
  })
  const titleRef = useRef()
  const subTitleRef = useRef()
  const textRef = useRef()
  const history = useHistory()

 const uploadToDatabase = async () => {
    const collectionRef = projectFirestore.collection(collection);
    const createdAt = timestamp();
    const date = getFormatedDate()
    const galleryUrl = gallery.map(x => x.downloadURL)
    await collectionRef.doc(state.data.id).update({ galleryUrl, ...textData.current, date, createdAt, storageId:state.data.storageId });
    sendToastSuccess("Article modifié avec succès")
    history.push('/')
 }

 useEffect(() => {
  titleRef.current.value = state.data.title
  subTitleRef.current.value = state.data.subTitle
  textRef.current.value = state.data.text
  setGallery(state.data.galleryUrl.map(imageUrl => {
    return {
      url: imageUrl,
      downloadURL: imageUrl,
      status: "FINISH"
    }
  }))
 },[])

 useEffect(() => {
   if (loading) {
    uploadImages(gallery, setGallery, collection, state.data.storageId, setError, uploadToDatabase)
 }},[loading, gallery]);

  const setarticleImage = (image) => {
    if (image) {
      let galleryClone = gallery
      galleryClone[0] = image[0]
      setGallery([...galleryClone])
    }
  }

  const addImageToGallery = (images) => {
    if (images) {
      setGallery((prevState) => [...prevState, ...images])
     }
  }

  const getGalleryURL = (gallery) => {
    return gallery.map(image => image.url)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const _title = titleRef.current.value

    if (gallery[0] && _title !== "") {
      textData.current = {
        title: _title,
        subTitle: subTitleRef.current.value,
        text: textRef.current.value,
      }
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
        <article className="group max-w-6xl m-auto lg:border-2 lg:my-4 pb-5 bg-gray-50">
          <PreviousButton to={`/${collection.toLowerCase()}/${state.data.id}`} state={state.data} className="relative top-2 left-2"/>
          <p className="mx-20 relative -top-7 mb-4 text-center text-xl sm:text-3xl text-gray-600">Modifier un {collection === "News" ? "article" : "avantage"}</p>
          <div className="flex flex-col justify-between h-full -mt-10">
            <div className="pt-2">
              {gallery[0] ? 
                <div className="flex items-center justify-center h-72 md:h-96 bg-cover bg-center" style={{backgroundImage: `url(${gallery[0].url})`}}>
                  <UploadImageForm file={gallery} setFile={setarticleImage} maxWidth={1728} maxHeight={1728}/>
                </div> 
              : 
                <div className="flex items-center justify-center h-72 md:h-96 bg-gray-400">
                  <UploadImageForm file={gallery} setFile={setarticleImage} maxWidth={1728} maxHeight={1728}/>
                </div>}
            </div> 
            <div className="px-4">
              <h3 className="w-full relative my-3 text-xl text-blue-800 font-bold">
                <input type="text" name="title" className="block w-full border-2 focus:border-secondary p-2 outline-none" autoComplete="off" placeholder="Titre" ref={titleRef} required/>
              </h3>
              <div className="w-full text-gray-600 mb-3">
                <input type="text" name="subTitle" className="block w-full border-2 focus:border-secondary p-2 outline-none" autoComplete="off" placeholder="Sous titre" ref={subTitleRef} />
              </div>
              <div className="w-full h-60 text-gray-600 mb-2">
                <textarea type="text" name="text" className="resize-none block h-full w-full border-2 focus:border-secondary p-2 outline-none" autoComplete="off" placeholder="Texte" ref={textRef}/>
              </div>
              {gallery.length > 0 && <>
                <div className="w-full border-b">
                  <h3 className="max-w-4xl text-center m-auto pb-3 text-xl text-blue-800 font-bold">
                      Galerie
                  </h3>
                </div>
                <div className="pt-8">
                  <UploadImageForm file={gallery} setFile={addImageToGallery} multiple={true} maxWidth={1728} maxHeight={1728}/>
                </div> 
                <ImageGrid galleryUrl={getGalleryURL(gallery)} setSelectedImg={setSelectedImg} imagesDeletable={true} gallery={gallery} setGallery={setGallery}/></>
              }
            </div>
          </div>
          { selectedImg && (
            <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} galleryUrl={getGalleryURL(gallery)}/>
          )}
          <div className="w-full flex justify-end px-4 mt-4">
            <ActionButton loading={loading} className="w-full md:w-80" type="submit" onClick={handleSubmit}>Mettre à jour</ActionButton>
          </div>
        </article>  
      </motion.div>
    </>
  );
}

export default NewsArticleEdit;