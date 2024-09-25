import { createSlice } from "@reduxjs/toolkit";
import { AgregarArchivo } from "./Thunks";


const initialState = {
    in_cart: 0,
    is_sending: false
}


export const gestorSlice = createSlice({
    name: 'gestor',
    initialState,
    reducers: {
        addInCart: (state) => {
            state.in_cart++;
        },
        removeCart: (state) => {
            state.in_cart--;
        }

    },
    extraReducers: (builder) => {
        builder
            .addCase(AgregarArchivo.pending, (state) => {
                state.is_sending = true;
            })
            .addCase(AgregarArchivo.fulfilled, (state,action) => {
                if(action.payload){
                    state.in_cart++;
                }
                state.is_sending = false;
            })
            .addCase(AgregarArchivo.rejected, (state) => {
                state.is_sending = false;
            })
    }
})

export const { addInCart, removeCart } = gestorSlice.actions;
export default gestorSlice.reducer