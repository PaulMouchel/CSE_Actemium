import React, { useRef, useState } from 'react';
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from 'react-router-dom' 
import { projectFirestore, projectStorage, timestamp } from '../firebase/config';
import PreviousButton from '../components/PreviousButton.jsx'
import ActionButton from '../components/ActionButton.jsx'
import { motion } from 'framer-motion';

import UploadImageForm from '../components/UploadImageForm.jsx';

import userImage from '../images/user.jpg'

const CreateMember = () => {
  const [executive, setExecutive] = useState("executive");
  const [holder, setHolder] = useState("holder");
  const [president, setPresident] = useState(false);
  const [image, setImage] = useState();
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const nameRef = useRef()
  const roleRef = useRef()
  const history = useHistory()

  const changeImageField = (parameter, value) => {
    const newImage = image;
    newImage[parameter] = value;
    setImage(newImage);
 };

 const uploadToDatabase = async (name) => {
    let role = roleRef.current.value

    const collectionRef = projectFirestore.collection("Team");
    const createdAt = timestamp();
    const imageUrl = image.downloadURL
    await collectionRef.add({ imageUrl, fullName:name, role, holder:(holder==="holder"), executive:(executive==="executive"), president, createdAt });
    setLoading(false)
    history.push('/')
 }

const UploadImage = (name) => {
    changeImageField("storageRef", projectStorage.ref().child("Team/" + name + "/" + image.fileName));
    const uploadTask = image.storageRef.put(image.file);
    uploadTask.on(
        "state_changed",
        null,
        function error(err) {
          setError("Error Image Upload:" + err)
        },
        async function complete() {
          const downloadURL = await uploadTask.snapshot.ref.getDownloadURL();
          changeImageField("downloadURL", downloadURL);
          uploadToDatabase(name)
        }
    );
}

  const setMemberImage = (images) => {
    if (images[0]) {
      setImage(images[0])
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    let name = nameRef.current.value
    
    if (image && name !== "") {
      setLoading(true)
      UploadImage(name)
    }
  }

  const onChangeExecutive = (e) => {
    setExecutive(e.target.value);
  }

  const onChangeHolder = (e) => {
    setHolder(e.target.value);
  }

  const onChangePresident = (e) => {
    setPresident(!president)
  }

  return (
    <motion.div 
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    className="w-screen h-screen flex justify-center items-center">
      <div className="bg-white rounded flex justify-center items-center flex-col shadow-md">
        {error && <span className="text-gray-50 bg-red-500 py-1 px-2 mb-2 -mt-2 rounded">{error}</span>}
        <PreviousButton to="/" className="self-start relative top-2 left-2"/>
        <form className="p-10 flex justify-center items-center flex-col" onSubmit={handleSubmit}>
          <p className="relative bottom-6 mb-5 text-3xl text-gray-600">Ajouter un membre du CSE</p>
          {!true && <FontAwesomeIcon icon={faUserCircle} className="rounded-full border-8 text-gray-600 mb-2 text-9xl"/>}
          <div className="w-40 md:w-56 flex justify-center mx-4">
            <div className="relative bottom-6 h-40 md:h-56 w-40 md:w-56 bg-cover bg-center rounded-full border-8" style={image ? {backgroundImage: `url(${image.url})`} : {backgroundImage: `url(${userImage})`}}></div>
          </div>
          <UploadImageForm file={image} setFile={setMemberImage}/>
          {error && <span className="text-gray-50 bg-red-500 py-1 px-2 mb-2 -mt-2 rounded">{error}</span>}
          <input type="text" name="fullName" className="mb-5 p-3 w-80 focus:border-secondary rounded border-2 outline-none" autoComplete="off" placeholder="Prénom et Nom" ref={nameRef} required/>
          <input type="text" name="role" className="mb-5 p-3 w-80 focus:border-secondary rounded border-2 outline-none" autoComplete="off" placeholder="Fonction" ref={roleRef}/>
          <div className="w-80 flex justify-between mb-4">
            <div>
              <input onChange={onChangeExecutive} type="radio" id="executive" name="executive" checked={executive==="executive"} value="executive"></input>
              <label className="pl-1" htmlFor="executive">Cadre</label>
              <br></br>
              <input onChange={onChangeExecutive} type="radio" id="notExecutive" name="executive" checked={executive==="notExecutive"} value="notExecutive"></input>
              <label className="pl-1" htmlFor="notExecutive">Non cadre</label>
            </div>
            <div >
              <input onChange={onChangeHolder} type="radio" id="holder" name="holder" checked={holder==="holder"} value="holder"></input>
              <label className="pl-1" htmlFor="holder">Titulaire</label>
              <br></br>
              <input onChange={onChangeHolder} type="radio" id="alternate" name="holder" checked={holder==="alternate"} value="alternate"></input>
              <label className="pl-1" htmlFor="alternate">Suppléant</label>
            </div>
          </div>

          <div className="w-80 flex justify-start items-center mb-4">
            <input type="checkbox" name="president" onChange={onChangePresident} checked={president}></input><span className="pl-1">Président du CSE</span>
          </div>
          <ActionButton loading={loading} className="w-80" type="submit">Créer un membre</ActionButton>
        </form>
      </div>
    </motion.div>
  );
}

export default CreateMember;