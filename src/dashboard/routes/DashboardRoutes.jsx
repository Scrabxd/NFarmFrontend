import { Route, Routes } from "react-router-dom"
import { SidebarMenu } from "../components/sidebar/SidebarMenu"
import { YourCawsPage } from "../page/YourCawsPage"

export const DashboardRoutes = () => {
    return (
        
        <>
        
            <SidebarMenu />

            <Routes>

                <Route path="/*" element={ <YourCawsPage /> } />

            </Routes>
        </>


    )
}
