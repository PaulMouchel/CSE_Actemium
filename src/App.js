import React from 'react'
import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter as Router } from  "react-router-dom";
import Main from './components/Main.jsx'
import{ init } from 'emailjs-com';

init(process.env.REACT_APP_EMAILJS_USER_ID);

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <AuthProvider>
            <Main />
          </AuthProvider>
        </Router>
      </div>
    </>


    
  );
}

export default App;
