import React, {useState} from 'react'
import { BrowserRouter as Switch, Route, Redirect } from  "react-router-dom";
// import { AnimatePresence } from 'framer-motion'

import Content from '../pages/Content.jsx'

import Login from '../pages/Login.jsx'
import ForgotPassword from '../pages/ForgotPassword.jsx'
import CreateArticle from '../pages/CreateArticle.jsx'
import CreateBenefit from '../pages/CreateBenefit.jsx'
import NewsArticleDetail from '../pages/NewsArticleDetail.jsx'
import UpdateQuotation from '../pages/UpdateQuotation.jsx'
import UpdateBackground from '../pages/UpdateBackground.jsx'
import CreateMember from '../pages/CreateMember.jsx'
import { init } from 'emailjs-com';
import useFirestore from '../hooks/useFirestore';
import { useAuth } from '../contexts/AuthContext'

import SimpleBackground from './SimpleBackground.jsx'

import Background from './Background.jsx'

init(process.env.REACT_APP_EMAILJS_USER_ID);

const Main = () => {
    const [background, setBackground] = useState(null)
    const { docs } = useFirestore('Admins');
    const { currentUser } = useAuth()
    const [admin, setAdmin] = useState(false)

    const privateRoute = (Component, props) => {
        if (currentUser) {
            return <Component {...props}/>
        } return <Redirect to="/login" />
    }

    const isAdmin = () => {
        if (currentUser && docs && docs[0]) {
            return docs[0].list.includes(currentUser.email)
        } return false
    }

    const adminRoute = (Component, props) => {
        if (currentUser) {
            if (isAdmin()) {
                return <Component admin={true} isAdmin={true} {...props}/>
            }
        } return <Redirect to="/login" />
    }

  return (
    <>
       <SimpleBackground image={background} setImage={setBackground} >
        {/* <AnimatePresence> */}
            <Switch >
                
                {/* Public routes */}
                <Route path="/login" render={() => <Login image={background} setImage={setBackground} />} />
                <Route path="/forgot-password" render={() => <ForgotPassword image={background} setImage={setBackground} />} />
                {/* Private routes */}
                <Route exact path="/" render={() => privateRoute(Content, {admin:admin, setAdmin:setAdmin, isAdmin:isAdmin()})} />
                <Route path="/news-article/:id" render={() => privateRoute(NewsArticleDetail, {admin:false})} />
                {/* Admin routes */}
                <Route path="/create-article" render={() => adminRoute(CreateArticle, {background:background, setBackground:setBackground})} />
                <Route path="/create-member" render={() => adminRoute(CreateMember, {background:background, setBackground:setBackground})} />
                <Route path="/update-quotation" render={() => adminRoute(UpdateQuotation)} />
                <Route path="/update-background" render={() => adminRoute(UpdateBackground, {image:background, setImage:setBackground})} />
                <Route path="/create-benefit" render={() => adminRoute(CreateBenefit, {collection:"Benefits"})} /> 
                <Route path="/create-cssct" render={() => adminRoute(CreateBenefit, {collection:"Cssct"})} />
                <Route path="/admin/news-article/:id" render={() => adminRoute(NewsArticleDetail)} />
            </Switch>
        {/* </AnimatePresence> */}
        </SimpleBackground>
  </>


    
  );
}

export default Main;
