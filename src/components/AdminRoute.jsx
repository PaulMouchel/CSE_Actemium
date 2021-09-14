import React from 'react'
import { Route, Redirect } from  "react-router-dom";
import PrivateRoute from './PrivateRoute';

const AdminRoute = ({ children, isAdmin, ...rest }) => {

    return (
        <PrivateRoute>
            <Route
            {...rest}
            render={
                () => (
                    isAdmin
                    ? (
                    children
                    ) : (
                    <Redirect
                        to={{
                        pathname: '/'
                        }}
                    />
                    )
                )
            }
            />
        </PrivateRoute>
    );
}

export default AdminRoute;