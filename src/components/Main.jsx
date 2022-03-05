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
import Admins from '../pages/Admins.jsx';
import Error404 from '../pages/Error404.jsx';
import ScrollToTop from './ScrollToTop.jsx';
import { init } from 'emailjs-com';
import { useAuth } from '../contexts/AuthContext'
import PrivateRoute from './PrivateRoute.jsx';
import AdminRoute from './AdminRoute.jsx';

import Background from './Background.jsx'
import useFirestore from '../hooks/useFirestore'
import { AnimatePresence } from 'framer-motion'
import { updateOrders } from '../functions/updateOrders';

init(process.env.REACT_APP_EMAILJS_USER_ID);

const Main = () => {
    const [background, setBackground] = useState(null)
    const { isAdmin, currentUser } = useAuth()
    const [admin, setAdmin] = useState(false)

    const [ news, setNews ] = useState()
    const [ benefits, setBenefits ] = useState()

    const team = useFirestore('Team');
    const updateBenefitsOrders = (exeptionId) => {
        updateOrders(benefits.docs, "Benefits", exeptionId)
    }

  return (
    <>
       <Background image={background} setImage={setBackground} currentUser={currentUser} >
            <ScrollToTop>
                <AnimatePresence>
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
                        <CreateArticle collection={"Benefits"} length={benefits?.docs?.length}/>
                    </AdminRoute>
                    <AdminRoute path="/benefits/:id/edit" isAdmin={isAdmin}>
                        <NewsArticleEdit collection={"Benefits"}/>
                    </AdminRoute>
                    <AdminRoute path="/cssct/new" isAdmin={isAdmin}>
                        <CreateCssct collection={"Cssct"}/>
                    </AdminRoute>
                    <AdminRoute path="/members/new" isAdmin={isAdmin}>
                        <CreateMember teamLength={team?.docs?.length}/>
                    </AdminRoute>
                    <AdminRoute path="/quotation/edit" isAdmin={isAdmin}>
                        <UpdateQuotation/>
                    </AdminRoute>
                    <AdminRoute path="/background/edit" isAdmin={isAdmin}>
                        <UpdateBackground image={background} setImage={setBackground}/>
                    </AdminRoute>
                    <AdminRoute path="/users/edit" isAdmin={isAdmin}>
                        <Admins/>
                    </AdminRoute>
                    {/* Private routes */}
                    <PrivateRoute exact path="/">
                        <Content {...{admin, setAdmin, isAdmin, setNews, setBenefits, team}} />
                    </PrivateRoute>
                    <PrivateRoute path="/news/:id">
                        <NewsArticleDetail admin={isAdmin} docs={news?.docs} collection={"News"}/>
                    </PrivateRoute>
                    <PrivateRoute path="/benefits/:id">
                        <NewsArticleDetail admin={isAdmin} docs={benefits?.docs} collection={"Benefits"} updateBenefitsOrders={updateBenefitsOrders}/>
                    </PrivateRoute>
                    <Route component={Error404}/>
                </Switch>
                </AnimatePresence>
            </ScrollToTop>
        </Background>
  </>
  
  );
}

export default Main;
