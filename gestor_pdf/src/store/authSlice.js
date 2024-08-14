import { createSlice } from '@reduxjs/toolkit'
import { AgregarUsuario, ValidarUsuario } from './Thunks';



const initialState = {
    email: '',
    password: ''

}


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginUser: (state, action) => {
            const { email, password } = action.payload;
            if (!ValidarUsuario(email, password)) {
                return
            }
            state.email = email;
            state.password = password;
        },
        registerUser: (state, action) => {
            const { email, password } = action.payload;
            AgregarUsuario(email, password)
        }
    }
})


export const { loginUser, registerUser } = authSlice.actions

export default authSlice.reducer