import React from 'react';
import useFirestore from '../hooks/useFirestore';
import deleteDocument from '../hooks/deleteDocument';
import DeleteButton from './DeleteButton.jsx'
import { Link } from 'react-router-dom'

const Benefit = (props) => {

  const { docs } = useFirestore('Benefits');

  const handleDelete = () => {
    deleteDocument({docs, id:props.id, collection:'Benefits'})
  }

  return (
    <div className={`py-4 md:flex justify-between flex-row${!props.even ? "-reverse" : ""} border-gray-500 ${!props.last && "border-b"}`}>
      <div className="md:w-1/2 md:px-20 text-center flex flex-col justify-center pb-4 md:pb-0">
        <p className={`text-${props.textColor} text-2xl font-bold pb-2`}>{props.title}</p>
        <p className={`text-${props.textColor} text-xl`}>{props.subTitle}</p>
        <Link to={{
        pathname:`/${props.admin ? "admin/" : ""}benefit/${props.id}`, 
        state: {benefits: props}
        }}>
          <div className="my-2 flex justify-center items-center h-full">
            <button className="bg-secondary rounded-full p-4 py-2 font-bold">
              En savoir plus
            </button>
          </div>
        </Link>
      </div>

      <div className="md:w-1/2 md:px-4 flex justify-center md:mx-4">
        <div className="h-80 md:h-96 w-full bg-cover bg-center" style={{backgroundImage: `url(${props.imageUrl})`}}>
            <DeleteButton admin={props.admin} onClick={handleDelete}/>
        </div>
      </div>
    </div>
  );
}

export default Benefit;