import { createAsyncThunk } from "@reduxjs/toolkit"
import { register,login, logout, getcookie } from "../../api/users.api"




export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async (userData, thunkAPI) => {

        try{
            const resp = await login(userData) 
            
            return {resp,userData}
        }catch(e){
            return thunkAPI.rejectWithValue('Credenciales incorrectas')
        }
    }
)
export const registerUser = createAsyncThunk(
    'auth/registerUser',
    async (userData) => {
    
        const resp = await register(userData)
        if (!resp) return false
    }
)

export const logoutUser = createAsyncThunk(
    'auth/logoutUser',
    async (thunkAPI) =>{
        try{
            const resp = await logout()
            return resp
        }catch(e){
            return thunkAPI.rejectWithValue('Credenciales incorrectas')
        }
    }
)

export const get_cookie = createAsyncThunk(
    'auth/get_cookie',
    async(thunkAPI) =>{
        try{
            const resp = await getcookie()
            return resp
        }catch(error){
            return thunkAPI.rejectWithValue('No hay user')
        }
    }
)

