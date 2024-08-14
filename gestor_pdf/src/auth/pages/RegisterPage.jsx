import { RegisterForm } from "../components"
import { Link } from "react-router-dom"

export const RegisterPage = () => {

    return (
        <>
            <div className="container h-100">
                <div className="row align-items-center h-100">
                    <div className="col-12 col-md-6 offset-md-3 col-lg-4 offset-lg-4 text-white">
                        <h3 className="Inicio de sesion">
                            <RegisterForm />
                        </h3>
                        <div className='mt-2'>
                            <h5>¿Ya tienes cuenta?</h5>
                            <h4><Link to='/auth/login'>Iniciar Sesion</Link></h4>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
