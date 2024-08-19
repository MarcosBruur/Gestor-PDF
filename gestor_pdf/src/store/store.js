import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../auth/store/authSlice'
import gestorReducer from '../gestor/store/gestorSlice'


export const store = configureStore({
    reducer: {
        auth: authReducer,
        gestor: gestorReducer,
    }
})