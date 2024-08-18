import { useDispatch } from "react-redux"
import { logoutUser } from "../../store"


export const Navbar = () => {
    const dispatch = useDispatch()
    const logout = () => {
        dispatch(logoutUser())
    }
    return (
        <>
            <div className="container-fluid text-white bg-light">
                <div className="row">


                    <li className="nav-item">
                        <button onClick={logout} className="btn btn-danger">
                            <h4>Salir</h4>
                        </button>
                    </li>


                </div>
            </div >



            <div className="col-6 text-end">
                <div className="container">
                    <div className="row d-flex justify-content-end">
                        <div className="col-auto p-2">

                            <button className="btn btn-danger">
                                <h4><i className="bi bi-cart"></i></h4>
                            </button>

                        </div>
                        <div className="col-auto p-2">



                        </div>
                    </div>
                </div>
            </div>




        </>
    )
}
