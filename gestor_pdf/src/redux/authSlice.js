import { createSlice } from '@reduxjs/toolkit'


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
            state.email = email;
            state.password = password;
        }
    }
})


export const { loginUser } = authSlice.actions

export default authSlice.reducer