import { Navigate, Route, Routes } from "react-router-dom"
import { NavbarMenu } from "../components/navbar/NavbarMenu"
import { FAQPage } from "../page/FAQPage"
import { LandingPage } from "../page/LandingPage"

export const LandingRoutes = () => {
    return (

        <>
            <NavbarMenu />
        
            <Routes>

                <Route path="/questions" element={ <FAQPage /> }/>

                <Route path="/*" element={ <LandingPage /> } />

            </Routes>
        
        </>
        

    )
}
