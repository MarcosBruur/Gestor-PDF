import { Routes, Route, Navigate } from "react-router-dom"
import { LoginPage } from "../pages/LoginPage"
import { RegisterPage } from "../pages/RegisterPage"
import { useSelector } from "react-redux"

export const AuthRoutes = () => {
    const {isAuthenticated} = useSelector(state => state.auth)

    if (isAuthenticated){
        return (
            <Navigate to="/home"/>
        )
        
    }

    return (
        
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
        </Routes>
    )
}
