import { Navigate, Route, Routes } from "react-router-dom"
import { UploadCowPage } from "../page/UploadCowPage"
import { UploadRanchPage } from "../page/UploadRanchPage"
import { UploadRestaurantPage } from "../page/UploadRestaurantPage"
import { YourCowsPage } from "../page/YourCowsPage"
import { YourCowsPageRestaurant } from "../page/YourCowsPageRestaurant"

export const DashboardRoutes = () => {
    return (
        
        <>

            <Routes>

                <Route path="/upload-cow" element={ <UploadCowPage /> }/>

                <Route path="/cattle" element={ <YourCowsPage /> }/>

                <Route path="/cattle-restaurant" element={ <YourCowsPageRestaurant /> }/>

                <Route path="/upload-ranch" element={ <UploadRanchPage /> } />

                <Route path="/upload-restaurant" element={ <UploadRestaurantPage /> } />

                <Route path="/*" element={ <Navigate to="/dash/cattle" /> } />

            </Routes>
        </>


    )
}
