import { Route, Routes } from "react-router-dom"
import { YourCawsPage } from "../page/YourCawsPage"

export const DashboardRoutes = () => {
    return (
        
        <>

            <Routes>

                <Route path="/*" element={ <YourCawsPage /> } />

            </Routes>
        </>


    )
}
