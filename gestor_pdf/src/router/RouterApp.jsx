import { Routes, Route, Navigate } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { GestorRoutes } from "../gestor/routes/GestorRoutes"

export const RouterApp = () => {
    return (
        <>
            <Routes>
                <Route path="/auth/*" element={<AuthRoutes />} />
                <Route path="*" element={<GestorRoutes />} />
            </Routes>
        </>
    )
}
