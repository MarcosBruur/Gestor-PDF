import { addUser, getAllUsers } from "../api/users.api"

export const ValidarUsuario = async (email, password) => {
    const resp = await getAllUsers()
    resp.map((user) => {

        if (email !== user.email && password !== user.password) {
            return false
        }
        return true
    })
}

export const AgregarUsuario = async (email, password) => {
    // 1 = contraseñas no coinciden
    // 2 = no se pudo crear usuario, (axios error)
    // 3 = usuario creado 
    const resp = await addUser({ email, password })
    if (!resp) return false
}
