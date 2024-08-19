import { createAsyncThunk } from "@reduxjs/toolkit"
import { addUser, getAllUsers } from "../../api/users.api"



export const ValidarUsuario = createAsyncThunk(
    'auth/ValidarUsuario',
    async ({ email, password }, thunkAPI) => {
        console.log(email, password)

        const resp = await getAllUsers(); // Obtener la lista de usuarios
        const usuarioEncontrado = resp.find(user => user.email === email && user.password === password);

        if (usuarioEncontrado) {
            return usuarioEncontrado
        } else {
            return thunkAPI.rejectWithValue('Credenciales incorrectas');
        }
    }
)
export const AgregarUsuario = async (email, password) => {

    const resp = await addUser({ email, password })
    if (!resp) return false
}
