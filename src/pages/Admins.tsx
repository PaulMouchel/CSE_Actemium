import { FormEvent, useRef } from 'react';
import PreviousButton from '../components/PreviousButton.jsx'
import ActionButton from '../components/ActionButton.jsx';
import { motion } from 'framer-motion';
import useFirestore from '../hooks/useFirestore.js';
import DeleteButton from '../components/DeleteButton.jsx';
import { projectFirestore } from '../firebase/config.js';
import { useAuth } from '../contexts/AuthContext.js';

const Admins = () => {
    const admins = useFirestore('Admins');
    const { currentUser } = useAuth()
    const newAdminRef = useRef<HTMLInputElement>(null)

    const handleDelete = async (email: string) => {
        const collectionRef = projectFirestore.collection("Admins");
        let adminList: string[] = admins.docs[0].list
        adminList = adminList.filter((value) => { 
            return value !== email;
        });
        await collectionRef.doc(admins.docs[0].id).update({ list: adminList });
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        if (newAdminRef.current?.value) {
            const collectionRef = projectFirestore.collection("Admins");
            let adminList = admins.docs[0].list
            if (adminList.includes(newAdminRef.current.value)) {
                console.log("Déjà Administrateur !")
                return
            }
            adminList.push(newAdminRef.current.value)
            await collectionRef.doc(admins.docs[0].id).update({ list: adminList });
            newAdminRef.current.value = ""
        }
    }


    return (
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        className="w-full md:py-2" >
            <div className="group max-w-6xl m-auto lg:border-2 lg:my-4 pb-5 bg-gray-50">
                <PreviousButton to="/" className="relative top-2 left-2"/>
                <h2 className="mx-20 mb-10 text-center text-xl sm:text-3xl text-gray-600">Gestion des administrateurs</h2>
                <div className="">
                    <div className="py-2 mb-8 px-32">
                        <h3 className="text-xl text-blue-800 font-bold py-6">
                            Administrateurs
                        </h3>
                        <ul>
                            {admins && admins.docs && admins.docs[0] && admins.docs[0].list.map((admin: string) => 
                                <li className="py-2 border-b flex justify-left" key={admin}>
                                    <span className="pr-8 h-14 flex items-center">{admin}</span>
                                    <span>
                                        { currentUser && currentUser.email !== admin &&
                                            <DeleteButton admin={true} onClick={() => {handleDelete(admin)}} info={admin} alignRight={true} noAnimation={true}/>
                                        }
                                    </span>
                                </li>)
                            }
                        </ul>
                        <h3 className="text-xl text-blue-800 font-bold py-6">
                            Ajouter un administrateur
                        </h3>
                        <form>
                            <p className="w-full relative my-3 text-xl text-blue-800 font-bold">
                                <input type="text" name="title" className="block w-full border-2 focus:border-secondary p-2 outline-none" autoComplete="off" placeholder="email" ref={newAdminRef} required/>
                            </p>
                            <ActionButton className="w-full md:w-80" type="submit" onClick={handleSubmit}>Mettre à jour</ActionButton>
                        </form>
                    </div> 
                </div>
            </div>  
        </motion.div>
    );
}

export default Admins;