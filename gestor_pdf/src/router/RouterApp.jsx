import { Routes, Route } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"

export const RouterApp = () => {
    return (
        <Routes>
            <Route path="/auth/*" element={<AuthRoutes />} />
        </Routes>
    )
}
