import { Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { LandingRoutes } from "../landing/routes/LandingRoutes"

export const AppRouter = () => {
    return (
        
        <Routes>
            
            <Route path="/login" element={ <AuthRoutes /> } />

            {/* Cualquier ruta que no sea /login, desplegar rutas del landing */}
            <Route path="/*" element={ <LandingRoutes /> } />

        </Routes>

    )
}

