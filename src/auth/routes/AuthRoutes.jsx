import { Route, Routes } from "react-router-dom"
import { Dashboard } from "../page/Dashboard"
import { LoginPage } from "../page/LoginPage"

export const AuthRoutes = () => {

    return (
        
        <>

            <Routes>

                {/* <Route path="/dash" element={ <Dashboard /> } /> */}

                <Route path="/*" element={ <Dashboard /> } />

            </Routes>

        </>

    )
}
