import { useDispatch } from "react-redux"
import { logoutUser } from "../../store"
import { useSelector } from "react-redux"

export const Navbar = () => {
    const dispatch = useDispatch()
    const user_name = useSelector((state) => state.auth.user_name)

    const logout = () => {
        dispatch(logoutUser())
    }
    return (
        <>
            <div className="container-fluid text-white bg-light">
                <div className="row d-flex justify-content-between text-black p-3">
                    <div className="col-auto">
                        <button className="btn btn-danger">
                            <h4>Inicio</h4>
                        </button>
                    </div>
                    <div className="col-auto">
                        <div className="row">
                            <div className="col">
                                <div className="p-2">
                                    <h4>{user_name}</h4>
                                </div>
                            </div>
                            <div className="col">
                                <button className="btn btn-danger">
                                    <h4>
                                        <i className="bi bi-cart"></i>
                                    </h4>
                                </button>
                            </div>
                            <div className="col">
                                <button onClick={logout} className="btn btn-danger">
                                    <h4>
                                        <i className="bi bi-arrow-bar-left"></i>
                                    </h4>
                                </button>

                            </div>
                        </div>

                    </div>


                </div >

            </div>
        </>
    )
}
/*<button onClick={logout} className="btn btn-danger">
                <h4>Salir</h4>
            </button>*/