import React, { useRef, useState, useEffect } from 'react';
import { faSpinner, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useHistory } from 'react-router-dom' 
import { projectFirestore, projectStorage, timestamp } from '../firebase/config';

import Title from '../components/Title';
import UploadImageForm from '../components/UploadImageForm.jsx';
import ImageGrid from '../components/ImageGrid.jsx';
import Modal from '../components/Modal.jsx';

const CreateArticle = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [title, setTitle] = useState(""); 
  const [subTitle, setSubTitle] = useState(""); 
  const [text, setText] = useState(""); 
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(false)
  const titleRef = useRef()
  const subTitleRef = useRef()
  const textRef = useRef()
  const history = useHistory()

  const changeImageField = (index, parameter, value) => {
    const newArray = [...gallery];
    newArray[index][parameter] = value;
    setGallery(newArray);
 };

 const uploadToDatabase = async () => {
   if(loading) {
    const collectionRef = projectFirestore.collection('News');
    const createdAt = timestamp();
    
    const currentTime = new Date()
    // returns the month (from 0 to 11)
    const month = ('0' + currentTime.getMonth()).slice(-2)
    // returns the day of the month (from 1 to 31)
    const day = ('0' + currentTime.getDate()).slice(-2)
    // returns the year (four digits)
    const year = currentTime.getFullYear()
    const date = day + "." + month + "." + year
    const galleryUrl = gallery.map(x => x.downloadURL)

    await collectionRef.add({ galleryUrl, title, subTitle, text, date, createdAt });
    history.push('/admin')
   }
 }

 useEffect(() => {
   if (loading) {
    if(gallery.every(x => (x.status === "FINISH"))) {
      setLoading(false)
      uploadToDatabase()
      return
    } else {
      gallery.forEach((image, index) => {
        if (image.storageRef === "") {
          changeImageField(index, "storageRef", projectStorage.ref().child("News/" + title + "/" + image.fileName));
        }
        if (image.status === "FINISH" || image.status === "UPLOADING") return;
        changeImageField(index, "status", "UPLOADING");
        const uploadTask = image.storageRef.put(image.file);
        uploadTask.on(
            "state_changed",
            null,
            function error(err) {
              console.log("Error Image Upload:", err);
            },
            async function complete() {
              const downloadURL = await uploadTask.snapshot.ref.getDownloadURL();
              changeImageField(index, "downloadURL", downloadURL);
              changeImageField(index, "status", "FINISH");
            }
        );
      })};
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

  async function handleSubmit(e) {
    e.preventDefault()

    let titleValue = titleRef.current.value
    let subTitleValue = subTitleRef.current.value
    let textValue = textRef.current.value

    if (gallery[0] && titleValue !== "" && subTitleValue !== "" && textValue !== "") {
      setTitle(titleValue)
      setSubTitle(subTitleValue)
      setText(textValue)
      setLoading(true)
    }
  }

  return (
    <>
      <Title>Créer un nouvel article</Title>
      <article className="group max-w-6xl m-auto lg:border-2 lg:my-10 lg:pb-5">
        <Link to="/admin" className=" transform duration-300 ease-in-out bg-green-500 hover:bg-white text-white hover:text-green-500 rounded-full block w-10 h-10 flex items-center justify-center relative top-2 left-2">
            <FontAwesomeIcon icon={faArrowLeft} />
        </Link>
        <div className="flex flex-col justify-between h-full -mt-10">
          <div className="pt-8">
            <UploadImageForm file={gallery} setFile={setarticleImage}/>
            {gallery[0] && <div className="h-72 md:h-96 bg-cover bg-center" style={{backgroundImage: `url(${gallery[0].url})`}}></div>}
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
            {gallery.length > 0 && <>
              <h3 className="max-w-4xl m-auto relative bottom-3 text-xl text-blue-800 font-bold">
                  Galerie
              </h3>
              <div className="pt-8">
                <UploadImageForm file={gallery} setFile={addImageToGallery} multiple={true}/>
              </div> 
              <ImageGrid gallery={getGalleryURL(gallery)} setSelectedImg={setSelectedImg} /></>
            }
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
      </article>     
    </>
  );
}

export default CreateArticle;