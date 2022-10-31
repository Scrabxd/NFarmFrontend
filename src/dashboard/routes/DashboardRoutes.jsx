import { Navigate, Route, Routes } from "react-router-dom"
import { UploadCowPage } from "../page/UploadCowPage"
import { UploadRanchPage } from "../page/UploadRanchPage"
import { YourCawsPage } from "../page/YourCawsPage"

export const DashboardRoutes = () => {
    return (
        
        <>

            <Routes>

                <Route path="/upload-cow" element={ <UploadCowPage /> }/>

                <Route path="/cattle" element={ <YourCawsPage /> }/>

                <Route path="/upload-ranch" element={ <UploadRanchPage /> } />

                <Route path="/*" element={ <Navigate to="/dash/cattle" /> } />

            </Routes>
        </>


    )
}
