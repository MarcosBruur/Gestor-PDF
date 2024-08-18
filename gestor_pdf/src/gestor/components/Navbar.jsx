import { useDispatch } from "react-redux"
import { logoutUser } from "../../store"


export const Navbar = () => {
    const dispatch = useDispatch()
    const logout = () => {
        dispatch(logoutUser())
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light text-black">
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item m-2">
                            <button className="btn btn-danger"><h4>Inicio</h4></button>

                        </li>
                        <li className="nav-item">
                            <button onClick={logout} className="btn btn-danger">
                                <h4>Salir</h4>
                            </button>
                        </li>
                        <li className="nav-item">

                        </li>
                        <li className="nav-item">

                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
