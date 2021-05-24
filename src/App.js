import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter as Router, Switch, Route } from  "react-router-dom";

import PrivateRoute from './PrivateRoute'



import Content from './components/Content.jsx'

import UpdateProfile from './pages/UpdateProfile'
import Login from './pages/Login.jsx'
import ForgotPassword from './pages/ForgotPassword.jsx'

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <AuthProvider>

            <Switch>
              <PrivateRoute exact path="/" component={Content} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>


          </AuthProvider>
        </Router>
      </div>
  </>


    
  );
}

export default App;
