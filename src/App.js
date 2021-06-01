import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter as Router, Switch, Route } from  "react-router-dom";

import PrivateRoute from './PrivateRoute'



import Content from './pages/Content.jsx'

import Login from './pages/Login.jsx'
import ForgotPassword from './pages/ForgotPassword.jsx'
import CreateArticle from './pages/CreateArticle.jsx'
import NewsArticleDetail from './pages/NewsArticleDetail'


function App() {

  return (
    <>
      <div className="App">
        <Router>
          <AuthProvider>

            <Switch>
              {/* <PrivateRoute exact path="/" component={Content} /> */}
              <Route exact path="/" component={Content} />
              <Route path="/admin" render={() => <Content admin={true} />}/>
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
              <Route path="/create-article" component={CreateArticle} />
              <Route path="/news-article/:id" component={NewsArticleDetail} />
            </Switch>


          </AuthProvider>
        </Router>
      </div>
  </>


    
  );
}

export default App;
