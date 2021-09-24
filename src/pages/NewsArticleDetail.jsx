import React, { useEffect, useState } from 'react';
import { faClock, faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation, useHistory, Link } from 'react-router-dom' 
import deleteDocument from '../functions/deleteDocument'
import ImageGrid from '../components/ImageGrid.jsx'
import Modal from '../components/Modal.jsx'
import PreviousButton from '../components/PreviousButton.jsx'
import DeleteButton from '../components/DeleteButton';
import { AnimatePresence, motion } from 'framer-motion';
import { projectFirestore } from '../firebase/config';
import parse from 'html-react-parser';

const NewsArticleDetail = ({admin, collection, docs}) => {
    let { state } = useLocation();
    const { pathname } = useLocation();
    const [data, setData] = useState(null)
    
    useEffect(() => {
        if (!state) {
            const splitPath = pathname.split('/').filter(path => path !== "");
            console.log(splitPath)

            const getData = async () => {
                const newsRef = projectFirestore.collection(collection).doc(splitPath[1]);
                const doc = await newsRef.get();
                if (!doc.exists) {
                    console.log('No such document!');
                } else {
                    console.log('Document data:', doc.data());
                    setData({...doc.data(), id:splitPath[1]}, admin)
                }
            }
            getData()
        } else {
            setData(state.data)
        }
    }, [])

    const [selectedImg, setSelectedImg] = useState(null);
    const history = useHistory()

    const handleDelete = () => {
        let id = data.id;
        deleteDocument({docs, id, collection})
        history.push('/')
    }

    const replaceURLWithHTMLLinks = (text) => {
        var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/i;
        return text.replace(exp,"<a className='text-primary font-bold' target='_blank' rel='noreferrer' href='$1'>$1</a>"); 
    }

  return (
    <motion.div 
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    className="w-full md:py-2" >
        <article className="group max-w-6xl m-auto lg:border-2 lg:my-4 lg:pb-5 bg-gray-50">
            <div className="flex justify-between">
            <PreviousButton to={`/#${collection.toLowerCase()}`} className="relative top-2 left-2"/>
            {admin && data &&
                <div className="flex">
                    <Link to={{
                    pathname:`/${collection.toLowerCase()}/${data.id}/edit`, 
                    state: {data: data}
                    }}>
                        <button 
                        className="transform duration-300 ease-in-out bg-primary hover:bg-white text-white hover:text-primary rounded-full w-10 h-10 flex items-center justify-center relative top-2 right-2 mr-4">
                            <FontAwesomeIcon icon={faPen} />
                        </button>
                    </Link>
                    <DeleteButton admin={admin} onClick={handleDelete} info={data?.title} alignRight={true} noAnimation={true}/>
                </div>
            }
            </div>
            <div className="flex flex-col justify-between h-full -mt-10">
                <div>
                    {data?.galleryUrl && <div className="h-72 md:h-96 bg-cover bg-center" style={{backgroundImage: `url(${data.galleryUrl[0]})`}}></div>}
                    <div className="p-4 pb-0">
                        <div className="relative bottom-9 left-3 bg-secondary p-2 text-gray-50 rounded-full px-3 inline-block">
                            <FontAwesomeIcon icon={faClock} />
                            <span className="text-sm ml-1">{data?.date}</span>                   
                        </div>
                    </div>
                </div>
                <div className="p-4 pt-0">
                    <h3 className="max-w-4xl m-auto relative lg:mt-6 bottom-3 text-xl text-blue-800 font-bold">
                        {data?.title}
                    </h3>
                    <div className="max-w-4xl m-auto text-justify text-gray-600 mb-5">
                        {data?.subTitle}
                    </div>
                    <div className="max-w-4xl m-auto text-justify text-gray-600 mb-10" style={{whiteSpace: "pre-line"}} id="text">
                        {data && parse(replaceURLWithHTMLLinks(data.text))}
                    </div>
                    {data?.galleryUrl && <>
                    <h3 className="max-w-4xl m-auto relative bottom-3 text-xl text-blue-800 font-bold">
                        Galerie
                    </h3></>}
                    {data?.galleryUrl && <ImageGrid galleryUrl={data.galleryUrl} setSelectedImg={setSelectedImg}/>}
                </div>
                
            </div>
            <AnimatePresence>
                { selectedImg && (
                    <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} galleryUrl={data.galleryUrl}/>
                )}
            </AnimatePresence>
        </article>  
    </motion.div>   
  );
}

export default NewsArticleDetail;