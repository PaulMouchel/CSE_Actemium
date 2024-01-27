import { Dispatch, FormEvent, SetStateAction, useState } from "react"
import { useHistory } from 'react-router-dom'
import { firestore, storage, timestamp } from '../firebase/config';
import { FaSpinner, FaCheck } from "react-icons/fa"
import PreviousButton from '../components/PreviousButton'
import UploadImageForm from '../components/UploadImageForm';
import { motion } from "framer-motion";
import deleteFolderContents from "../functions/deleteFolderContents";
import { sendToastSuccess } from "../functions/sendToast";
import { useBackground } from "../hooks/useBackground";
import { addDoc, doc, collection as firestoreCollection, updateDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { FileType } from "../types/File.type";

type Props = {
    setImage: Dispatch<SetStateAction<any>>
}

const UpdateBackground = ({setImage}: Props) => {
    const [loading, setLoading] = useState(false)
    const [selectedImage, setSelectedImage] = useState<FileType>()
    const history = useHistory()

    const background = useBackground()

    const setBackground = (images: FileType[] | null) => {
        if (images?.at(0)) {
            setSelectedImage(images[0])
        }
    }

    const changeImageField = (parameter: keyof FileType, value: any) => {
        if (!selectedImage) return
        const newImage = selectedImage;
        newImage[parameter] = value;
        setSelectedImage(newImage);
     };

    const uploadToDatabase = async () => {
        if(!selectedImage) return
        const collectionRef = firestoreCollection(firestore, 'Background')
        const createdAt = timestamp();
        const imageUrl = selectedImage.downloadURL
        if (background) {
            const docRef = doc(firestore, 'Background', background.id)
            await updateDoc(docRef, { imageUrl, createdAt })
        } else {
            await addDoc(collectionRef, { imageUrl, createdAt })
        }
        sendToastSuccess("Image de fond modifiée")
        setImage(imageUrl)
        history.push('/')
     }
    
     const UploadImage = () => {
        if(!selectedImage) return
        deleteFolderContents("Background")
        const storageRef = ref(storage, "Background/" + selectedImage.fileName)
        changeImageField("storageRef", storageRef)
        const uploadTask = uploadBytesResumable(storageRef, selectedImage.file);
        uploadTask.on(
            "state_changed",
            null,
            function error(err: any) {
                console.log("Error Image Upload:", err);
            },
            async function complete() {
                const downloadURL = await getDownloadURL(uploadTask.snapshot.ref)
                changeImageField("downloadURL", downloadURL);
                uploadToDatabase()
    
            }
        );
    }

    const handleSubmit = (e: FormEvent) => {
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
            style={selectedImage ? {backgroundImage: `url("${selectedImage.url}")`} : {}}>
            <div className="p-4 bg-white bg-opacity-20 rounded flex justify-center items-center flex-col shadow-md">
                <div className="w-full p-3 pb-10">
                    <PreviousButton to="/"/>
                </div>
                    <UploadImageForm setFile={setBackground} maxWidth={1920} maxHeight={1920}/>
                    { !loading ?
                        <button 
                            disabled={loading} 
                            className="focus:outline-none transform duration-300 ease-in-out bg-primary hover:bg-white text-white hover:text-primary rounded-full w-10 h-10 flex items-center justify-center" 
                            onClick={handleSubmit}>
                                <FaCheck />
                        </button>
                        :
                        <button 
                            disabled={loading} 
                            className="focus:outline-none transform duration-300 ease-in-out bg-primary hover:bg-white text-white hover:text-primary rounded-full w-10 h-10 flex items-center justify-center">
                                <FaSpinner className="animate-spin" />
                        </button>
                        
                    }
            </div>
        </motion.div>
    )
}

export default UpdateBackground;