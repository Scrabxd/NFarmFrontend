import { Navigate, Route, Routes } from "react-router-dom"
import { DashboardRoutes } from "../../dashboard/routes/DashboardRoutes"
import { LoginPage } from "../page/LoginPage"
import { SigninPage } from "../page/SigninPage"

export const AuthRoutes = () => {

    return (
        
        <>

            <Routes>

                <Route path="/register" element={ <SigninPage /> }/>

                <Route path="/login" element={ <LoginPage /> } />

                <Route path="/dash"  element={ <DashboardRoutes /> } />

                <Route path="/*" element={ <Navigate to="/login"/> } />

            </Routes>

        </>

    )
}
