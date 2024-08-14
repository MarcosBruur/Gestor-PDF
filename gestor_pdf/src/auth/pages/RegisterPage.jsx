import { useEffect } from "react"
import { RegisterForm } from "../components"
import { getAllUsers } from '../../api/users.api'

export const RegisterPage = () => {

    useEffect(() => {
        async function loadUsers() {
            const resp = await getAllUsers()
            console.log(resp.data[0].email)
        }
        loadUsers()
    }, [])


    return (
        <>
            <div className='bg-dark vh-100'>
                <div className="container h-100">
                    <div className="row align-items-center h-100">
                        <div className="col-12 col-md-6 offset-md-3 col-lg-4 offset-lg-4 text-white">
                            <h3 className="Inicio de sesion">
                                <RegisterForm />
                            </h3>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
