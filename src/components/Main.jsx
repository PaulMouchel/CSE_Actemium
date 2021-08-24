import React, {useState} from 'react'
import { BrowserRouter as Switch, Route, Redirect } from  "react-router-dom";

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

import Background from './Background.jsx'

init(process.env.REACT_APP_EMAILJS_USER_ID);

const Main = () => {
    const [background, setBackground] = useState(null)
    const { docs } = useFirestore('Admins');
    const { currentUser } = useAuth()
    const [admin, setAdmin] = useState(false)
    const [benefits, setBenefits] = useState()

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
       <Background image={background} setImage={setBackground} >
            <Switch >
                {/* Public routes */}
                <Route path="/login" component={Login}/>
                <Route path="/forgot-password" component={ForgotPassword}/>
                {/* Private routes */}
                <Route exact path="/" render={() => privateRoute(Content, {admin:admin, setAdmin:setAdmin, isAdmin:isAdmin(), benefits, setBenefits})} />
                <Route path="/news-article/:id" render={() => privateRoute(NewsArticleDetail, {admin:isAdmin(), collection:"News"})} />
                <Route path="/benefit/:id" render={() => privateRoute(NewsArticleDetail, {admin:isAdmin(), collection:"Benefits"})} />
                {/* Admin routes */}
                <Route path="/create-article" render={() => adminRoute(CreateArticle, {collection:"News"})} />
                <Route path="/create-member" render={() => adminRoute(CreateMember)} />
                <Route path="/update-quotation" render={() => adminRoute(UpdateQuotation)} />
                <Route path="/update-background" render={() => adminRoute(UpdateBackground, {image:background, setImage:setBackground})} />
                <Route path="/create-benefit" render={() => adminRoute(CreateArticle, {collection:"Benefits"})} /> 
                <Route path="/create-cssct" render={() => adminRoute(CreateBenefit, {collection:"Cssct"})} />
            </Switch>
        </Background>
  </>


    
  );
}

export default Main;
