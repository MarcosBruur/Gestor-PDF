import { createAsyncThunk } from "@reduxjs/toolkit"
import { addUser, getAllUsers } from "../api/users.api"

/*export const ValidarUsuario = async (email, password) => {
    const resp = await getAllUsers()
    resp.map((user) => {
        if (email === user.email && password === user.password) {
            return user
        } else {
            return false
        }
    })
}
*/

export const ValidarUsuario = createAsyncThunk(
    'auth/ValidarUsuario',
    async ({ email, password }, thunkAPI) => {
        console.log(email, password)

        const resp = await getAllUsers(); // Obtener la lista de usuarios
        const usuarioEncontrado = resp.find(user => user.email === email && user.password === password);
        /*resp.map((user) => {
            if (email === user.email && password === user.password) {
                console.log(user.email, password, user)
                return user
            } else {
                return false
            }
        })*/
        if (usuarioEncontrado) {
            return usuarioEncontrado
        } else {
            return thunkAPI.rejectWithValue('Credenciales incorrectas');
        }
    }
)
export const AgregarUsuario = async (email, password) => {
    // 1 = contraseñas no coinciden
    // 2 = no se pudo crear usuario, (axios error)
    // 3 = usuario creado 
    const resp = await addUser({ email, password })
    if (!resp) return false
}
