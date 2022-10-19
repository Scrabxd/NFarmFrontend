import { Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { DashboardRoutes } from "../dashboard/routes/DashboardRoutes"
import { LandingRoutes } from "../landing/routes/LandingRoutes"

export const AppRouter = () => {
    return (
        
        <Routes>
            
            {/* Cualquier ruta que no sea /login, desplegar rutas del landing */}
            <Route path="/*" element={ <LandingRoutes /> } />

            <Route path="/auth/*" element={ <AuthRoutes /> } />

            <Route path="/dash/*" element={ <DashboardRoutes /> } />

        </Routes>

    )
}

