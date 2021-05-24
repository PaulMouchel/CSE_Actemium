import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter as Router, Switch, Route } from  "react-router-dom";

// import Login from './components/Login'
import PrivateRoute from './PrivateRoute'

import Home from './components/Home.jsx'

import Content from './components/Content.jsx'
import Navbar from './components/Navbar.jsx';
import TinySidebar from './components/TinySidebar.jsx';
import Dashboard from './pages/Dashboard'
import UpdateProfile from './pages/UpdateProfile'
import Signup from './pages/Signup'
import Login from './pages/Login copy'
import ForgotPassword from './pages/ForgotPassword'

function App() {
  return (
    <>
    {/* <Login/> */}
    <div className="App">
      <Router>
        <AuthProvider>

          <Switch>
            <PrivateRoute exact path="/" component={Dashboard} />
            <PrivateRoute path="/update-profile" component={UpdateProfile} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
          </Switch>

          {/* <Navbar/>
          <Home/>
          <TinySidebar/>
          <Content/> */}


        </AuthProvider>
      </Router>
    </div>
</>


    
  );
}

export default App;
