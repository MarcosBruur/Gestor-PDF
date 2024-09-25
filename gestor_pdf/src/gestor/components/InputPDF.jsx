import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { addInCart } from '../store/gestorSlice'
import { AgregarArchivo } from '../store/Thunks'
import { addFile } from '../../api/files.api'


export const InputPDF = () => {

    const { register, handleSubmit } = useForm()
    const userEmail = useSelector(state => state.auth.email)
    const dispatch = useDispatch()


    const onSubmit = handleSubmit(async (data) => {
        const formData = new FormData()
        formData.append('file',data.file[0])
        formData.append('user',userEmail)
        dispatch(AgregarArchivo(formData))

    })
        

    return (
        <>
            <div className="container mt-5 text-center">
                <div className="row d-flex justify-content-center">
                    <div className="col-5">
                        <form className='formulario' onSubmit={onSubmit}>
                            <label className="formulario__texto mb-2 text-dark">Ingresar archivo</label>
                            <input
                                type="file"
                                className="form-control"
                                {...register("file")}
                            />
                            <button type='submit' className='btn btn-danger boton mt-3'>Aceptar</button>
                        </form>
                    </div>
                </div>
            </div>

        </>

    )
}
