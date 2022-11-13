import { Navigate } from "react-router-dom"

export const PrivateRoute = ({ children }) => {

    // get the token, if the user is logged
    const loggedUserToken = localStorage.getItem( 'token' )

    // if the user is logged we return the children which is the route
    // if not, we redirect the user to the login screen
    return ( loggedUserToken )
        ? children
        : <Navigate to="/auth/login" />
}
