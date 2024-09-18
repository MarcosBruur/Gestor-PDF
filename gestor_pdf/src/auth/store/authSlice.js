import { createSlice } from '@reduxjs/toolkit'
import { loginUser,registerUser,logoutUser, get_cookie } from './Thunks';




const initialState = {
    email: '',
    user_name:'',
    is_loading: false,
    error: null,
    isAuthenticated: false,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.is_loading = true;
                state.error = null;
                state.isAuthenticated = false;
            })
            .addCase(loginUser.fulfilled, (state, action) => {   
                if (!action.payload){
                    state.isAuthenticated = false;
                    state.is_loading = false;
                    state.error = 'email o contraseña incorrectos'
                    return
                }
                const {email,name} = action.payload
                state.user_name = name;
                state.email =email;
                state.is_loading = false;
                state.isAuthenticated = true;
                        
            })
            .addCase(loginUser.rejected, (state) => {
                state.is_loading = false;
                state.isAuthenticated = false;
                state.error = null
                
            })
            .addCase(registerUser.pending,(state)=>{
                state.is_loading = true;
                state.error = null;
                state.isAuthenticated = false;
            })
            .addCase(registerUser.fulfilled,(state) =>{
                state.is_loading = false;
                state.error = null
            })
            .addCase(registerUser.rejected,(state) =>{
                state.is_loading = false;
                state.isAuthenticated = false;
                state.error = null
            })
            .addCase(logoutUser.pending,(state)=>{
                state.is_loading = true;
                state.error = null;
                state.isAuthenticated = true;
            })
            .addCase(logoutUser.fulfilled,(state)=>{
                state.is_loading = false;
                state.error = null;
                state.isAuthenticated = false;
                state.user_name = '';
                state.email = '';
                state.password = '';
            })
            .addCase(logoutUser.rejected,(state)=>{
                state.is_loading = false;
                state.error = null;
                state.isAuthenticated = false;
            })
            .addCase(get_cookie.pending,(state)=>{
                state.is_loading = true;
                state.error = null;
                state.isAuthenticated = false;
            })
            .addCase(get_cookie.fulfilled,(state,action)=>{
                if(action.payload){
                    const {name = '',email = ''} = action.payload
                    state.user_name = name
                    state.email = email
                    state.isAuthenticated = true
                    state.error = false
                }
                

            })
            .addCase(get_cookie.rejected,() =>{
                console.log('fallo al traer user en cookie')
            })
    }
})


//export const { logoutUser } = authSlice.actions

export default authSlice.reducer