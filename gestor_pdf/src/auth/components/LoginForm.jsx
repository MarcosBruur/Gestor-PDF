import { useForm } from 'react-hook-form'
import { useDispatch} from 'react-redux'
import { get_cookie, loginUser } from '../../store'
import { useEffect } from 'react'



export const LoginForm = () => {


    const { register, handleSubmit, formState: { errors } } = useForm()
    

    const dispatch = useDispatch()

    const onSubmit = handleSubmit((data) => {
        const userData = {
            email: data.email,
            password: data.password
        }
       
        dispatch(loginUser(userData))
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

        </>
    )
}
