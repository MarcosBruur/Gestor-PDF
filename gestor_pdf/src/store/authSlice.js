import { createSlice } from '@reduxjs/toolkit'
import { AgregarUsuario, ValidarUsuario } from './Thunks';



const initialState = {
    email: '',
    password: '',
    user_name: '',
    is_loading: false,
    error: null,
    isAuthenticated: false,
}


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        registerUser: (state, action) => {
            const { email, password } = action.payload;
            AgregarUsuario(email, password)
        },
        loginUser: (state, action) => {
            const { email, password } = action.payload;
            console.log(ValidarUsuario(email, password))
            if (!ValidarUsuario(email, password)) {
                return
            }
            state.email = email;
            state.password = password;
        },
        logoutUser: (state) => {
            state.user_name = '';
            state.email = '';
            state.password = '';
            state.isAuthenticated = false;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(ValidarUsuario.pending, (state) => {
                state.is_loading = true;
                state.error = null;
                state.isAuthenticated = false;
            })
            .addCase(ValidarUsuario.fulfilled, (state, action) => {
                const { email, password, user_name } = action.payload;
                state.is_loading = false;
                state.user_name = user_name;
                state.email = email;
                state.password = password;
                state.isAuthenticated = true;
            })
            .addCase(ValidarUsuario.rejected, (state) => {
                state.is_loading = false;
                state.isAuthenticated = false;
            })
    }
})


export const { loginUser, registerUser, logoutUser } = authSlice.actions

export default authSlice.reducer