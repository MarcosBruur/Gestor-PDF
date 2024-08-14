import { Routes, Route } from 'react-router-dom'
import { HomePage } from '../pages/HomePage'

export const GestorRoutes = () => {
    return (
        <Routes>
            <Route path='/home' element={<HomePage />} />
        </Routes>
    )
}
