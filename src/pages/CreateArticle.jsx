import React, { useRef, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom' 
import UploadImageForm from '../components/UploadImageForm.jsx';
import ImageGrid from '../components/ImageGrid.jsx';
import Modal from '../components/Modal.jsx';
import PreviousButton from '../components/PreviousButton.jsx'
import ActionButton from '../components/ActionButton.jsx'
import { motion } from 'framer-motion';
import { uploadImages } from '../functions/uploadImages';
import randomUid from '../functions/randomUid';
import { uploadToDatabase } from '../functions/uploadToDatabase';

const CreateArticle = ({collection, length}) => {
  const [selectedImg, setSelectedImg] = useState(null);
  // const [title, setTitle] = useState(""); 
  const title = useRef("")
  // const [subTitle, setSubTitle] = useState(""); 
  const subTitle = useRef("")
  // const [text, setText] = useState("");
  const text = useRef("")
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(false)
  const [storageId, setStorageId] = useState(""); 
  const [error, setError] = useState(""); 
  const titleRef = useRef()
  const subTitleRef = useRef()
  const textRef = useRef()
  const history = useHistory()

 const setDataAndUpload = () => {
    const currentTime = new Date()
    // returns the month (from 0 to 11)
    const month = ('0' + (currentTime.getMonth() + 1)).slice(-2)
    // returns the day of the month (from 1 to 31)
    const day = ('0' + currentTime.getDate()).slice(-2)
    // returns the year (four digits)
    const year = currentTime.getFullYear()
    const date = day + "." + month + "." + year
    const galleryUrl = gallery.map(x => x.downloadURL)
    const order = length ? length : 0
    const data = { galleryUrl, title:title.current, subTitle:subTitle.current, text:text.current, date, storageId, order }

    uploadToDatabase(collection, data)
    .then(() => {
      setLoading(false)
      history.push('/')
    })
}

 useEffect(() => {
   console.log("useEffect")
   if (loading && storageId) {
     uploadImages(gallery, setGallery, collection, storageId, setError, setDataAndUpload)
 }},[loading, storageId, gallery, collection]);

  const setArticleImage = (image) => {
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

  async function handleSubmit(e) {
    e.preventDefault()

    let _title = titleRef.current.value
    let _subTitle = subTitleRef.current.value
    let _text = textRef.current.value

    if (gallery[0] && _title !== "") {
      // setTitle(_title)
      title.current = _title
      // setSubTitle(_subTitle)
      subTitle.current = _subTitle
      // setText(_text)
      text.current = _text
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
        <article className="group max-w-6xl m-auto lg:border-2 lg:my-4 pb-5 bg-gray-50">
          <PreviousButton to="/" className="relative top-2 left-2"/>
          <p className="mx-20 relative -top-7 mb-4 text-center text-xl sm:text-3xl text-gray-600">Créer un nouvel {collection === "News" ? "article" : "avantage"}</p>
          <div className="flex flex-col justify-between h-full -mt-10">
            <div className="pt-2">
              {gallery[0] ? 
                <div className="flex items-center justify-center h-72 md:h-96 bg-cover bg-center" style={{backgroundImage: `url(${gallery[0].url})`}}>
                  <UploadImageForm file={gallery} setFile={setArticleImage} maxWidth={1728} maxHeight={1728}/>
                </div> 
              : 
                <div className="flex items-center justify-center h-72 md:h-96 bg-gray-400">
                  <UploadImageForm file={gallery} setFile={setArticleImage} maxWidth={1728} maxHeight={1728}/>
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
            <ActionButton loading={loading} className="w-full md:w-80" type="submit" onClick={handleSubmit}>Publier</ActionButton>
          </div>
        </article>  
      </motion.div>
    </>
  );
}

export default CreateArticle;