import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../auth/store/authSlice'


export const store = configureStore({
    reducer: {
        auth: authReducer,
    }
})