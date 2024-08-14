import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { registerUser } from '../../store'



export const RegisterForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()

    const dispatch = useDispatch()

    const onSubmit = handleSubmit((data) => {

        if (data.password !== data.repeat_password) return
        dispatch(registerUser({
            email: data.email,
            password: data.password
        }))
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
                                    message: "El email no es valido"
                                }
                            }


                        )}
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
                <div className="mb-3">
                    <label className="fw-bold mb-1">Repetir Contraseña</label>
                    <input
                        {...register("repeat_password",
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
                    <button className='btn btn-outline-danger'>Registrarse</button>
                </div>

            </form>

        </>
    )
}
