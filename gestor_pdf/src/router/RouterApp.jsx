import { Routes, Route } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { GestorRoutes } from "../gestor/routes/GestorRoutes"

export const RouterApp = () => {
    return (
        <Routes>
            <Route path="/auth/*" element={<AuthRoutes />} />
            <Route path="/gestor/*" element={<GestorRoutes />} />
        </Routes>
    )
}
