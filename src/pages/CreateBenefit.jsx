import React, { useRef, useState } from 'react';
import { faSpinner, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useHistory } from 'react-router-dom' 
import { projectFirestore, projectStorage, timestamp } from '../firebase/config';
import { motion } from 'framer-motion'

import UploadImageForm from '../components/UploadImageForm.jsx';

const CreateBenefit = ({collection}) => {
  const [image, setImage] = useState();
  const [loading, setLoading] = useState(false)
  const titleRef = useRef()
  const textRef = useRef()
  const history = useHistory()

  const changeImageField = (parameter, value) => {
    const newImage = image;
    newImage[parameter] = value;
    setImage(newImage);
 };

 const uploadToDatabase = async (title, text) => {
    const collectionRef = projectFirestore.collection(collection);
    const createdAt = timestamp();
    const imageUrl = image.downloadURL
    await collectionRef.add({ imageUrl, title:title, text:text, createdAt });
    setLoading(false)
    history.push('/')
 }

const UploadImage = (title, text) => {
    changeImageField("storageRef", projectStorage.ref().child(collection + "/" + title + "/" + image.fileName));
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
          uploadToDatabase(title, text)

        }
    );
}

  const setBenefitImage = (images) => {
    if (images[0]) {
      setImage(images[0])
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    let title = titleRef.current.value
    let text = textRef.current.value

    if (image && title !== "" && text !== "") {
      setLoading(true)
      UploadImage(title, text)
    }
  }

  return (
    <>
      <div className="w-full md:py-2" >
        <article className="group max-w-6xl m-auto lg:border-2 lg:my-6 pb-5 bg-gray-50">
          <Link to="/" className=" transform duration-300 ease-in-out bg-secondary hover:bg-white text-white hover:text-secondary rounded-full block w-10 h-10 flex items-center justify-center relative top-2 left-2">
              <FontAwesomeIcon icon={faArrowLeft} />
          </Link>
          <p className="mx-20 relative -top-7 mb-4 text-center text-xl sm:text-3xl text-gray-600">Créer {collection === "Benefits" ? "un nouvel avantage" : "une nouvelle mission CSSCT" }</p>
          <div className="flex flex-col justify-between h-full -mt-10">
            <div className="pt-8">
              
              {image ? 
                <div className="flex items-center justify-center h-72 md:h-96 bg-cover bg-center" style={{backgroundImage: `url(${image.url})`}}>
                  <UploadImageForm file={[image]} setFile={setBenefitImage}/>
                </div>
                :
                <div className="flex items-center justify-center h-72 md:h-96 bg-gray-400">
                  <UploadImageForm file={[image]} setFile={setBenefitImage}/>
                </div>
                }
            </div> 
            <div className="p-4 pt-0">
              <h3 className="w-full my-3 text-xl text-blue-800 font-bold">
                <input type="text" name="title" className="block w-full border-2 focus:border-primary p-2 outline-none" autoComplete="off" placeholder="Titre" ref={titleRef} required/>
              </h3>
              <div className="w-full h-60 text-gray-600">
                <textarea type="text" name="text" className="resize-none block h-full w-full border-2 focus:border-primary p-2 outline-none" autoComplete="off" placeholder="Texte" ref={textRef} required/>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-end px-4 mt-1">
            { !loading ?
              <motion.button disabled={loading} className="bg-primary text-white font-bold p-2 rounded w-80" id="login" type="submit" onClick={handleSubmit}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}><span>Publier</span></motion.button>
              :
              <button disabled={loading} className="bg-primary text-white font-bold p-2 rounded w-80" id="login" type="submit"><FontAwesomeIcon className="animate-spin" icon={faSpinner}/></button>
            }
          </div>
        </article>
      </div>     
    </>
  );
}

export default CreateBenefit;