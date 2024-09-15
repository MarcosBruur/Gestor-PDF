import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { addInCart } from '../store/gestorSlice'
import { AgregarArchivo } from '../store/Thunks'


export const InputPDF = () => {

    const { register, handleSubmit } = useForm()

    const dispatch = useDispatch()


    const onSubmit = handleSubmit((data) => {

        const formData = new FormData()
        formData.append('pdf_file', data.file[0])
        fetch('http://localhost:8000/users/api/v1/files/', {
            method: 'POST',
            body: formData,
        })
            .then(response => {
                if (!response.ok) {
                    return response.text().then(text => { throw new Error(text) });
                }
                return response.json();
            })
            .then(result => console.log(result))
            .catch(error => console.error('Error:', error));
    }
        //dispatch(AgregarArchivo(formData))
    )
    return (
        <>
            <div className="container mt-5 text-center">
                <div className="row d-flex justify-content-center">
                    <div className="col-5">
                        <form onSubmit={onSubmit}>
                            <label className="mb-2 fw-bold">Ingresar archivo</label>
                            <input
                                type="file"
                                className="form-control"
                                {...register("file")}
                            />
                            <button type='submit' className='btn btn-lg btn-danger mt-3'>Aceptar</button>
                        </form>
                    </div>
                </div>
            </div>

        </>

    )
}
