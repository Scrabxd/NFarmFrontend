import { Route, Router, Routes } from "react-router-dom"
import { LoginPage } from "../auth/page/LoginPage"
import { LandingPage } from "../landing/page/LandingPage"
import { LandingRoutes } from "../landing/routes/LandingRoutes"

export const AppRouter = () => {
    return (
        
        <Routes>
            
            <Route path="/login" element={ <LoginPage /> } />

            {/* Cualquier ruta que no sea /login, desplegar rutas del landing */}
            <Route path="/*" element={ <LandingRoutes /> } />

        </Routes>

    )
}

