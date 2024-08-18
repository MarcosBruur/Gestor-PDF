import { Link } from "react-router-dom"
import { LoginForm } from "../components"


export const LoginPage = () => {


    return (
        <>
            <div className="container h-100">
                <div className="row align-items-center h-100">
                    <div className="col-12 col-md-6 offset-md-3 col-lg-4 offset-lg-4 text-white">
                        <h3 className="Inicio de sesion">
                            <LoginForm />
                        </h3>
                        <div className='mt-2'>
                            <h5>¿No tienes cuenta?</h5>
                            <h4><Link to='/auth/register'>Registrarse</Link></h4>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
