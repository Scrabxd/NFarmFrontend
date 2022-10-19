import { Navigate, Route, Routes } from "react-router-dom"
import { YourCawsPage } from "../page/YourCawsPage"

export const DashboardRoutes = () => {
    return (
        
        <>

            <Routes>

                <Route path="/cattle" element={ <YourCawsPage /> }/>

                <Route path="/*" element={ <Navigate to="/cattle" /> } />

            </Routes>
        </>


    )
}
