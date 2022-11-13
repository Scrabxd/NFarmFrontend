import { Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { DashboardRoutes } from "../dashboard/routes/DashboardRoutes"
import { LandingRoutes } from "../landing/routes/LandingRoutes"
import { PrivateRoute } from "./PrivateRoute"

export const AppRouter = () => {
    return (
        
        <Routes>
            
            {/* Cualquier ruta que no sea /login, desplegar rutas del landing */}
            <Route path="/*" element={ <LandingRoutes /> } />

            <Route path="/auth/*" element={ <AuthRoutes /> } />

            {/* dashboard routes private */}

            {/* <Route path="/dash/*" element={ <DashboardRoutes /> } /> */}
            <Route path="/dash/*" element= {
                <PrivateRoute>
                    {/* PrivateRoutes receives as children DashboardRoutes */}
                    <DashboardRoutes /> 
                </PrivateRoute>
            } />

        </Routes>

    )
}

