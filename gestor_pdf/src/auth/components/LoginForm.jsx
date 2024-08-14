import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export const LoginForm = () => {

    const user = useSelector((state) => state.auth)

    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = handleSubmit((data) => {
        console.log(data)
    })

    return (
        <>


            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label className="fw-bold mb-1">Email</label>
                    <input
                        {...register("email",
                            {
                                required: {
                                    value: true,
                                    message: "El email es requerido"
                                },
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                    message: "El email ingresado no es valido"
                                }
                            })}
                        type="email"
                        className="form-control"
                        placeholder="email@gmail.com"
                    />
                    {errors.email && <span className='text-danger'>{errors.email.message}</span>}
                </div>
                <div className="mb-3">
                    <label className="fw-bold mb-1">Contraseña</label>
                    <input
                        {...register("password",
                            {
                                required: {
                                    value: true,
                                    message: 'La contraseña es requerida'
                                }
                            })}
                        type="password"
                        className="form-control"
                        placeholder="tu contraseña" />
                    {errors.password && <span className='text-danger'>{errors.password.message}</span>}
                </div>
                <div className='d-flex flex-column mt-4'>
                    <button className='btn btn-outline-danger'>Enviar</button>
                </div>


            </form>
            <div className='mt-2'>
                <h5>¿No tienes cuenta?</h5>
            </div>

            <Link to='/auth/register'>Registrarse</Link>

        </>
    )
}
