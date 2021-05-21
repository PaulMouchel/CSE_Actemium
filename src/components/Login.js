import React from 'react';
// Icons
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Login = () => {

  	return (
		<div className="w-screen h-screen flex justify-center items-center bg-gradient-to-t from-yellow-200 to-yellow-500 bg-beach    ">
			<form className="p-10 bg-white rounded flex justify-center items-center flex-col shadow-md">
				<FontAwesomeIcon icon={faUserCircle} className="w-20 h-20 text-gray-600 mb-2 text-5xl"/>
				<p className="mb-5 text-3xl  text-gray-600">Connexion</p>
				<input type="email" name="email" className="mb-5 p-3 w-80 focus:border-green-400 rounded border-2 outline-none" autocomplete="off" placeholder="Email" required/>
				<input type="password" name="password" className="mb-5 p-3 w-80 focus:border-green-400 rounded border-2 outline-none" autocomplete="off" placeholder="Mot de passe" required/>
				<button className="transition duration-500 ease-in-out bg-green-400 hover:bg-green-500 text-white font-bold p-2 rounded w-80" id="login" type="submit"><span>Se connecter</span></button>
			</form>
		</div>
  	);
}

export default Login;