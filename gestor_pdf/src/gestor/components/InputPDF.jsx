import { useForm } from 'react-hook-form'



export const InputPDF = () => {

    const { register, handleSubmit } = useForm()




    const onSubmit = handleSubmit((data) => {

    })
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
