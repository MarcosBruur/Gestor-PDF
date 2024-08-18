import { Routes, Route, Navigate } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { GestorRoutes } from "../gestor/routes/GestorRoutes"
import { useSelector } from "react-redux"

export const RouterApp = () => {
    const user_authenticated = useSelector((state) => state.auth.isAuthenticated)
    return (
        <>
            <Routes>
                <Route path="/auth/*" element={<AuthRoutes />} />
                <Route path="/gestor/*" element={<GestorRoutes />} />
            </Routes>
            {(user_authenticated) ? <Navigate to='/gestor/home' /> : <Navigate to='/auth/login' />}
        </>
    )
}
