import React from 'react';
import BurgerAdminButton from './BurgerAdminButton'
import { adminMenuData } from '../data/adminMenu'

const BurgerAdmin = () => {
    return (
        <nav className="fixed h-screen right-0 top-0 z-40">
            <ul className="m-5 mb-5 h-screen flex flex-col justify-start mt-20">    
                {adminMenuData.map((item, index) =>
                    <BurgerAdminButton {...item} key={index} />  
                )}
            </ul>
        </nav> 
    );
}

export default BurgerAdmin;