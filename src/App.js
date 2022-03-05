import React from 'react'
import { AuthProvider } from './contexts/AuthContext';
import { UserProvider } from './contexts/UserContext';
import { BrowserRouter as Router } from  "react-router-dom";
import Main from './components/Main.jsx'

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <AuthProvider>
            <UserProvider>
              <Main />
            </UserProvider>
          </AuthProvider>
        </Router>
      </div>
      {process.env.REACT_APP_ENV !== "production" &&
        <div className="fixed bottom-2 left-2 bg-white p-2 font-bold text-red-700 rounded-lg">env : {process.env.REACT_APP_ENV}</div>
      }
    </>
  );
}

export default App;
