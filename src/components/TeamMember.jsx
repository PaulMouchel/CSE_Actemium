import React from 'react';
import VerticalLine from './VerticalLine.jsx'
import MemberDescription from './MemberDescription'
import deleteDocument from '../hooks/deleteDocument';
import DeleteButton from './DeleteButton.jsx'
import Img from "react-cool-img";
import loadingImage from "../images/loading.gif";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { projectFirestore } from '../firebase/config';
import { motion, AnimatePresence } from 'framer-motion';

const TeamMember = ({imageUrl, fullName, role, holder, executive, president, first, last, even, admin, id, order, docs}) => {

    const variant = {
        hidden: {
            opacity:0
        },
        visible: {
            opacity:1,
            transition: {duration: 0.7}
        },
        exit: {
            opacity:0,
            transition: {duration: 0.7}
        }
    }

    const handleDelete = () => {
        deleteDocument({docs, id, collection:'Team'})
    }

    const move = async (movement) => {
        const collectionRef = projectFirestore.collection('Team');
        const otherUser = await collectionRef.where('order', '==', order + movement).get()
        otherUser.forEach((doc) => {
            collectionRef.doc(doc.id).update({ order: order });
        });
        collectionRef.doc(id).update({ order: order + movement });
    }

    const goDown = () => {
        if (last) return
        move(1)
    }

      const goUp = () => {
        if(first) return
        move(-1)
    }

    return (
        <>
            <div className={`w-full flex flex-row${!even && "-reverse"} justify-center md:max-h-56`}>
                <div className={`md:w-1/4 flex justify-${even ? "end" : "start"}`}>
                    <MemberDescription even={even} fullName={fullName} role={role} holder={holder} executive={executive} president={president} />
                </div>
                <div className="w-40 md:w-56 flex items-center justify-center mx-4">
                    <div className="h-40 md:h-56 w-40 md:w-56 bg-cover bg-center rounded-full border-4 md:border-8 relative">
                        <Img 
                            placeholder={loadingImage}
                            src={imageUrl} 
                            alt={fullName}
                            className={`absolute h-full w-full object-cover rounded-full`}/>
                        <DeleteButton admin={admin} onClick={handleDelete} info={fullName}/>
                        <AnimatePresence>
                            {admin &&
                                <>
                                    <div className="w-full h-full flex justify-center">
                                        {!first &&
                                            <motion.button 
                                            variants={variant}
                                            initial="hidden"
                                            animate="visible"
                                            exit="exit"
                                            onClick={goUp}
                                            className="bg-primary w-8 h-8 rounded-full absolute -top-6 flex items-center justify-center focus:outline-none">
                                                <FontAwesomeIcon icon={faArrowUp} className="text-white text-lg"/>
                                            </motion.button>
                                        }
                                        {!last &&
                                            <motion.button 
                                            variants={variant}
                                            initial="hidden"
                                            animate="visible"
                                            exit="exit"
                                            onClick={goDown}
                                            className="bg-primary w-8 h-8 rounded-full absolute -bottom-6 flex items-center justify-center focus:outline-none">
                                                <FontAwesomeIcon icon={faArrowDown} className="text-white text-lg"/>
                                            </motion.button>
                                        }
                                    </div>
                                </>
                            }
                        </AnimatePresence>
                    </div>
                </div>
                <div className="md:w-1/4"></div>
            </div>
            { !last && <VerticalLine/> }
        </>
    );
}

export default TeamMember;