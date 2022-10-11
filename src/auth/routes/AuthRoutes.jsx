import { Route, Routes } from "react-router-dom"
import { DashboardRoutes } from "../../dashboard/routes/DashboardRoutes"
import { LoginPage } from "../page/LoginPage"

export const AuthRoutes = () => {

    return (
        
        <>

            <Routes>

                <Route path="/*" element={ <LoginPage /> } />

            </Routes>

        </>

    )
}
