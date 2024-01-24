import { useState } from 'react'
import { Switch, Route } from  "react-router-dom";
import Content from '../pages/Content.js'
import Login from '../pages/Login'
import ForgotPassword from '../pages/ForgotPassword'
import CreateArticle from '../pages/CreateArticle'
import CreateCssct from '../pages/CreateCssct'
import NewsArticleDetail from '../pages/NewsArticleDetail'
import NewsArticleEdit from '../pages/NewsArticleEdit'
import UpdateQuotation from '../pages/UpdateQuotation'
import UpdateBackground from '../pages/UpdateBackground'
import CreateMember from '../pages/CreateMember'
import Admins from '../pages/Admins.js';
import Error404 from '../pages/Error404';
import ScrollToTop from './ScrollToTop';
import { useUser } from '../contexts/UserContext.js'
import PrivateRoute from './PrivateRoute';
import AdminRoute from './AdminRoute';
import Background from './Background'
import { AnimatePresence } from 'framer-motion'
import DefaultBackground from './DefaultBackground'

const Main = () => {
    const [ background, setBackground ] = useState<string | null>(null)
    const { isAdmin } = useUser()
    const [ admin, setAdmin ] = useState(false)

  return (
    <>
        <DefaultBackground>
            <Background image={background} setImage={setBackground}>
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
                        <AdminRoute path="/users/edit" isAdmin={isAdmin}>
                            <Admins/>
                        </AdminRoute>
                        {/* Private routes */}
                        <PrivateRoute exact path="/">
                            <Content {...{admin, setAdmin, isAdmin}} />
                        </PrivateRoute>
                        <PrivateRoute path="/news/:id">
                            <NewsArticleDetail admin={isAdmin} collection={"News"}/>
                        </PrivateRoute>
                        <PrivateRoute path="/benefits/:id">
                            <NewsArticleDetail admin={isAdmin} collection={"Benefits"}/>
                        </PrivateRoute>
                        <Route component={Error404}/>
                    </Switch>
                    </AnimatePresence>
                </ScrollToTop>
            </Background>
        </DefaultBackground>
  </>
  
  );
}

export default Main;
