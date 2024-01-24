import React from 'react';
import Quotation from './Quotation.jsx'
import useFirestore from '../hooks/useFirestore'

const Home = () => {

  const quotation = useFirestore('Quotation');
  const vowels = ['a', 'e', 'i', 'o', 'u', 'y']
  const firstLetter = import.meta.env.VITE_COMPANY_NAME[0].toLowerCase()
  const startWithVowel = vowels.includes(firstLetter)
  const beforeCompanyName = startWithVowel ? "d'" : "de "

  return ( 
    <>
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="min-h-screen flex flex-col justify-evenly items-center">
        <div className="p-10 flex justify-center items-center bg-gray-100 bg-opacity-70 md:rounded-lg">
          <h1 className="text-4xl md:text-5xl text-gray-800 text-center">Bienvenue sur le site du CSE<br/>{beforeCompanyName}{import.meta.env.VITE_COMPANY_NAME}</h1>
        </div>
        <Quotation quotation={quotation}/>
      </div>
    </div>
    </>
  );
}

export default Home;