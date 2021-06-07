import {useState} from 'react'
import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter as Router, Switch, Route } from  "react-router-dom";
import { AnimatePresence } from 'framer-motion'

import PrivateRoute from './PrivateRoute'



import Content from './pages/Content.jsx'

import Login from './pages/Login.jsx'
import ForgotPassword from './pages/ForgotPassword.jsx'
import CreateArticle from './pages/CreateArticle.jsx'
import CreateBenefit from './pages/CreateBenefit.jsx'
import NewsArticleDetail from './pages/NewsArticleDetail.jsx'
import UpdateQuotation from './pages/UpdateQuotation.jsx'
import UpdateBackground from './pages/UpdateBackground.jsx'
import CreateMember from './pages/CreateMember.jsx'
import{ init } from 'emailjs-com';
init(process.env.REACT_APP_EMAILJS_USER_ID);

function App() {
  const [background, setBackground] = useState(null)
  
  return (
    <>
      <div className="App">
        <Router>
          <AuthProvider>
            <AnimatePresence>
              <Switch >
              {/* <Switch location={location} key={location.key}> */}
                {/* <PrivateRoute exact path="/" component={Content} /> */}
                <Route exact path="/" render={() => <Content admin={false} />} />
                <Route exact path="/admin" render={() => <Content admin={true} />}/>
                <Route path="/login" component={Login} />
                <Route path="/forgot-password" component={ForgotPassword} />
                <Route path="/create-article" component={CreateArticle} />
                <Route path="/create-member" component={CreateMember} />
                <Route path="/update-quotation" component={UpdateQuotation} />
                <Route path="/update-background" render={() => <UpdateBackground image={background} setImage={setBackground} />} />
                <Route path="/create-benefit" render={() => <CreateBenefit collection={"Benefits"} />} />
                <Route path="/create-cssct" render={() => <CreateBenefit collection={"Cssct"} />} />
                <Route path="/news-article/:id" render={() => <NewsArticleDetail admin={false} />} />
                <Route path="/admin/news-article/:id" render={() => <NewsArticleDetail admin={true} />} />
              </Switch>
            </AnimatePresence>

          </AuthProvider>
        </Router>
      </div>
  </>


    
  );
}

export default App;
