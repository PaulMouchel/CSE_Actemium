import { PropsWithChildren } from 'react'
import { Route, Redirect } from  "react-router-dom";
import PrivateRoute from './PrivateRoute';

type Props = {
    isAdmin: boolean
} & Record<string, any>

const AdminRoute = ({ children, isAdmin, ...rest }: PropsWithChildren<Props>) => {

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