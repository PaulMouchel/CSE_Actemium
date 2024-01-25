import { PropsWithChildren } from 'react'
import { Route, Redirect } from  "react-router-dom";
import { useAuth } from '../contexts/AuthContext'

const PrivateRoute = ({ children, ...rest }: PropsWithChildren<Record<string, any>>) => {
    const { currentUser } = useAuth()

    return (
        <Route
        {...rest}
        render={
            () => (
            currentUser
                ? (
                children
                ) : (
                <Redirect
                    to={{
                    pathname: '/login'
                    }}
                />
                )
            )
        }
        />
    );
}

export default PrivateRoute;