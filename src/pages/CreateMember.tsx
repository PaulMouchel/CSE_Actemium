import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom' 
import PreviousButton from '../components/PreviousButton'
import ActionButton from '../components/ActionButton'
import UploadImageForm from '../components/UploadImageForm';
import { motion } from 'framer-motion';
import { uploadImage } from '../functions/uploadImage';
import randomUid from '../functions/randomUid';
import { uploadToDatabase } from '../functions/uploadToDatabase';
import userImage from '../images/user.jpg'
import { sendToastError, sendToastSuccess } from "../functions/sendToast";
import { useTeam } from '../hooks/useTeam';

const CreateMember = () => {
    const [executive, setExecutive] = useState("executive");
    const [holder, setHolder] = useState("holder");
    const [president, setPresident] = useState(false);
    const [image, setImage] = useState<any>();
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const docs = useTeam();
    const teamLength = docs.length

    const formData = useRef({
        fullName: "",
        role: "",
        holder: false,
        executive: false,
        president: false,
        storageId: ""
    })

    const nameRef = useRef<HTMLInputElement>(null)
    const roleRef = useRef<HTMLInputElement>(null)
    const history = useHistory()

    const setDataAndUpload = () => {
        if (!image) return
        const imageUrl = image.downloadURL
        const order = teamLength
        const data = { imageUrl, ...formData.current, order}
        uploadToDatabase("Team", data).then(() => {
            sendToastSuccess("Membre créé avec succès")
            history.push('/')
        }).catch((error) => {
            setLoading(false)
            sendToastError(`Echec de création de membre : ${error}`)
        })
    }

    useEffect(() => {
        if (loading) {
            uploadImage(image, setImage, "Team", formData.current.storageId, setError, setDataAndUpload)
        }
    }, [loading])

    const setMemberImage = (images: any[]) => {
        if (images[0]) {
            setImage(images[0])
        }
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()

        const _name = nameRef.current?.value
        
        if (image && _name) {
            formData.current = {
                fullName: _name,
                role: roleRef.current?.value ?? '',
                holder: (holder==="holder"),
                executive: (executive==="executive"),
                president: president,
                storageId: randomUid()
            }
            setLoading(true)
        }
    }

    const onChangeExecutive = (e: ChangeEvent<HTMLInputElement>) => {
        setExecutive(e.target.value)
    }

    const onChangeHolder = (e: ChangeEvent<HTMLInputElement>) => {
        setHolder(e.target.value)
    }

    const onChangePresident = () => {
        setPresident(!president)
    }

    return (
        <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            className="w-screen h-screen flex justify-center items-center"
        >
            <div className="bg-white rounded flex justify-center items-center flex-col shadow-md">
                {error && <span className="text-gray-50 bg-red-500 py-1 px-2 mb-2 -mt-2 rounded">{error}</span>}
                <PreviousButton to="/" className="self-start relative top-2 left-2"/>
                <form className="p-10 flex justify-center items-center flex-col" onSubmit={handleSubmit}>
                    <p className="relative bottom-6 mb-5 text-3xl text-gray-600">Ajouter un membre du CSE</p>
                    <div className="w-40 md:w-56 flex justify-center mx-4">
                        <div className="relative bottom-6 h-40 md:h-56 w-40 md:w-56 bg-cover bg-center rounded-full border-8" style={image ? {backgroundImage: `url("${image.url}")`} : {backgroundImage: `url("${userImage}")`}}></div>
                    </div>
                    <UploadImageForm setFile={setMemberImage} maxWidth={400}/>
                    {error && <span className="text-gray-50 bg-red-500 py-1 px-2 mb-2 -mt-2 rounded">{error}</span>}
                    <input type="text" name="fullName" className="mb-5 p-3 w-80 focus:border-secondary rounded border-2 outline-none" autoComplete="off" placeholder="Prénom et Nom" ref={nameRef} required/>
                    <input type="text" name="role" className="mb-5 p-3 w-80 focus:border-secondary rounded border-2 outline-none" autoComplete="off" placeholder="Fonction" ref={roleRef}/>
                    <div className="w-80 flex justify-between mb-4">
                        <div>
                            <input onChange={onChangeExecutive} type="radio" id="executive" name="executive" checked={executive==="executive"} value="executive"></input>
                            <label className="pl-1" htmlFor="executive">Cadre</label>
                            <br/>
                            <input onChange={onChangeExecutive} type="radio" id="notExecutive" name="executive" checked={executive==="notExecutive"} value="notExecutive"></input>
                            <label className="pl-1" htmlFor="notExecutive">Non cadre</label>
                        </div>
                        <div >
                            <input onChange={onChangeHolder} type="radio" id="holder" name="holder" checked={holder==="holder"} value="holder"></input>
                            <label className="pl-1" htmlFor="holder">Titulaire</label>
                            <br/>
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