import React from 'react'
import { AuthProvider } from './contexts/AuthContext';
import { UserProvider } from './contexts/UserContext';
import { BrowserRouter as Router } from  "react-router-dom";
import Main from './components/Main.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <AuthProvider>
            <UserProvider>
              <ToastContainer
              position="bottom-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              />
              <Main />
            </UserProvider>
          </AuthProvider>
        </Router>
      </div>
      {import.meta.env.VITE_ENV === "development" &&
        <div className="fixed bottom-2 left-2 bg-white p-2 font-bold text-red-700 rounded-lg">env : {import.meta.env.VITE_ENV}</div>
      }
    </>
  );
}

export default App;
