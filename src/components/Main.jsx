import React, {useState} from 'react'
import { Switch, Route } from  "react-router-dom";

import Content from '../pages/Content.jsx'

import Login from '../pages/Login.jsx'
import ForgotPassword from '../pages/ForgotPassword.jsx'
import CreateArticle from '../pages/CreateArticle.jsx'
import CreateCssct from '../pages/CreateCssct.jsx'
import NewsArticleDetail from '../pages/NewsArticleDetail.jsx'
import NewsArticleEdit from '../pages/NewsArticleEdit.jsx'
import UpdateQuotation from '../pages/UpdateQuotation.jsx'
import UpdateBackground from '../pages/UpdateBackground.jsx'
import CreateMember from '../pages/CreateMember.jsx'
import Error404 from '../pages/Error404.jsx';
import ScrollToTop from './ScrollToTop.jsx';
import { init } from 'emailjs-com';
import { useAuth } from '../contexts/AuthContext'
import PrivateRoute from './PrivateRoute.jsx';
import AdminRoute from './AdminRoute.jsx';

import Background from './Background.jsx'

init(process.env.REACT_APP_EMAILJS_USER_ID);

const Main = () => {
    const [background, setBackground] = useState(null)
    const { isAdmin } = useAuth()
    const [admin, setAdmin] = useState(false)
    const [benefits, setBenefits] = useState()
    const [news, setNews] = useState()

  return (
    <>
       <Background image={background} setImage={setBackground} >
            <ScrollToTop>
                <Switch>
                    {/* Public routes */}
                    <Route path="/login" component={Login}/>
                    <Route path="/forgot-password" component={ForgotPassword}/>
                    {/* Admin routes */}
                    <AdminRoute path="/news/new" isAdmin={isAdmin}>
                        <CreateArticle collection={"News"}/>
                    </AdminRoute>
                    <AdminRoute path="/news/:id/edit" isAdmin={isAdmin}>
                        <NewsArticleEdit collection={"News"}/>
                    </AdminRoute>
                    <AdminRoute path="/benefits/new" isAdmin={isAdmin}>
                        <CreateArticle collection={"Benefits"}/>
                    </AdminRoute>
                    <AdminRoute path="/benefits/:id/edit" isAdmin={isAdmin}>
                        <NewsArticleEdit collection={"Benefits"}/>
                    </AdminRoute>
                    <AdminRoute path="/cssct/new" isAdmin={isAdmin}>
                        <CreateCssct collection={"Cssct"}/>
                    </AdminRoute>
                    <AdminRoute path="/members/new" isAdmin={isAdmin}>
                        <CreateMember/>
                    </AdminRoute>
                    <AdminRoute path="/quotation/edit" isAdmin={isAdmin}>
                        <UpdateQuotation/>
                    </AdminRoute>
                    <AdminRoute path="/background/edit" isAdmin={isAdmin}>
                        <UpdateBackground image={background} setImage={setBackground}/>
                    </AdminRoute>
                    {/* Private routes */}
                    <PrivateRoute exact path="/">
                        <Content admin={admin} setAdmin={setAdmin} isAdmin={isAdmin} benefits={benefits} setBenefits={setBenefits} news={news} setNews={setNews} />
                    </PrivateRoute>
                    <PrivateRoute exact path="/#news">
                        <Content admin={admin} setAdmin={setAdmin} isAdmin={isAdmin} benefits={benefits} setBenefits={setBenefits} news={news} setNews={setNews} scrollTo={"news"} />
                    </PrivateRoute>
                    <PrivateRoute exact path="/#benefits">
                        <Content admin={admin} setAdmin={setAdmin} isAdmin={isAdmin} benefits={benefits} setBenefits={setBenefits} news={news} setNews={setNews} scrollTo={"benefits"} />
                    </PrivateRoute>
                    <PrivateRoute path="/news/:id">
                        <NewsArticleDetail admin={isAdmin} collection={"News"}/>
                    </PrivateRoute>
                    <PrivateRoute path="/benefits/:id">
                        <NewsArticleDetail admin={isAdmin} collection={"Benefits"}/>
                    </PrivateRoute>
                    <Route component={Error404}/>
                </Switch>
            </ScrollToTop>
        </Background>
  </>


    
  );
}

export default Main;
