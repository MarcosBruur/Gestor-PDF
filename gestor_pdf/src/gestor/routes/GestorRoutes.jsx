import { Routes, Route, Navigate } from 'react-router-dom'
import { HomePage } from '../pages/HomePage'
import { useSelector } from 'react-redux'

export const GestorRoutes = () => {
    const {isAuthenticated} = useSelector(state => state.auth)

    if (!isAuthenticated){
        return (
            <Navigate to="/auth/login"/>
        )
    }
    return (
        <>
            <Routes>
            <Route path='/home' element={<HomePage />} />
            </Routes>
            <Navigate to="/home"/>
        </>
        
    )
}
