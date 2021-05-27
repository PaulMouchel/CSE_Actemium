import React, { useRef, useState } from 'react';
import { faSpinner, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom' 

import Title from '../components/Title';
import UploadImageForm from '../components/UploadImageForm.jsx';
import ImageGrid from '../components/ImageGrid.jsx';
import Modal from '../components/Modal.jsx';
import NewsProgressBar from '../components/NewsProgressBar.jsx'

const CreateArticle = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  const [mainImage, setMainImage] = useState(null); 
  const [title, setTitle] = useState(""); 
  const [subTitle, setSubTitle] = useState(""); 
  const [text, setText] = useState(""); 
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(false)

  const titleRef = useRef()
  const subTitleRef = useRef()
  const textRef = useRef()

  const setarticleImage = (image) => {
    if (image) {
      setMainImage(image[0])
    }
  }

  const addImageToGallery = (images) => {
    if (images) {
      setGallery([...gallery, ...images])
     }
  }

  const getGalleryURL = (gallery) => {
    return gallery.map(image => URL.createObjectURL(image))
  }

  async function handleSubmit(e) {
    e.preventDefault()

    let titleValue = titleRef.current.value
    let subTitleValue = subTitleRef.current.value
    let textValue = textRef.current.value

    if (mainImage && titleValue != "" && subTitleValue !== "" && textValue !== "") {
      setTitle(titleValue)
      setSubTitle(subTitleValue)
      setText(textValue)
      setLoading(true)
    }
    

        // try {
        //     setError("")
        //     setLoading(true)
        //     await login(emailRef.current.value, passwordRef.current.value)
        //     history.push('/')
        // } catch(e) {
        //     setError("Connexion échouée " + e)
        // }
        // setLoading(false)
}

  return (
    <>
      <Title>Créer un nouvel article</Title>
      <article className="group max-w-6xl m-auto lg:border-2 lg:my-10 lg:pb-5">
        <Link to="/" className=" transform duration-300 ease-in-out bg-green-500 hover:bg-white text-white hover:text-green-500 rounded-full block w-10 h-10 flex items-center justify-center relative top-2 left-2">
            <FontAwesomeIcon icon={faArrowLeft} />
        </Link>
        <div className="flex flex-col justify-between h-full -mt-10">
          <div className="pt-8">
            <UploadImageForm file={mainImage} setFile={setarticleImage}/>
            {mainImage && <div className="h-72 md:h-96 bg-cover bg-center" style={{backgroundImage: `url(${URL.createObjectURL(mainImage)})`}}></div>}
          </div> 
          <div className="p-4 pt-0">
            <h3 className="w-full relative lg:mt-6 bottom-3 text-xl text-blue-800 font-bold">
              <input type="text" name="title" className="block w-full border-2 focus:border-green-400 p-2 outline-none" autoComplete="off" placeholder="Titre" ref={titleRef} required/>
            </h3>
            <div className="w-full text-gray-600 mb-5">
              <input type="text" name="subTitle" className="block w-full border-2 focus:border-green-400 p-2 outline-none" autoComplete="off" placeholder="Sous titre" ref={subTitleRef} required/>
            </div>
            <div className="w-full h-80 text-gray-600 mb-10">
              <textarea type="text" name="text" className="resize-none block h-80 w-full border-2 focus:border-green-400 p-2 outline-none" autoComplete="off" placeholder="Texte" ref={textRef} required/>
            </div>
            <h3 className="max-w-4xl m-auto relative bottom-3 text-xl text-blue-800 font-bold">
                Galerie
            </h3>
            <div className="pt-8">
              <UploadImageForm file={gallery} setFile={addImageToGallery} multiple={true}/>
            </div> 
            <ImageGrid gallery={getGalleryURL(gallery)} setSelectedImg={setSelectedImg} />
          </div>
        </div>
        { selectedImg && (
            <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
        )}
        { !loading ?
          <button disabled={loading} className="transition duration-500 ease-in-out bg-green-400 hover:bg-green-500 text-white font-bold p-2 rounded w-80" id="login" type="submit" onClick={handleSubmit}><span>Publier</span></button>
          :
          <button disabled={loading} className="transition duration-500 ease-in-out bg-green-400 hover:bg-green-500 text-white font-bold p-2 rounded w-80" id="login" type="submit"><FontAwesomeIcon className="animate-spin" icon={faSpinner}/></button>
        }
        { loading && <NewsProgressBar mainImage={mainImage} title={title} subTitle={subTitle} text={text} gallery={gallery} /> }
      </article>     
    </>
  );
}

export default CreateArticle;