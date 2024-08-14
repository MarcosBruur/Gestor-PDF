import { Link, NavLink } from "react-router-dom"


export const Navbar = () => {


    return (
        <>
            <div className="container-fluid text-white bg-light">
                <div className="row">

                    <div className="col-6 text-start">
                        <div className="container">
                            <div className="row d-flex justify-content-start">
                                <div className="col-auto p-2">

                                    <button className="btn btn-danger"><h4>Inicio</h4></button>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-6 text-end">
                        <div className="container">
                            <div className="row d-flex justify-content-end">
                                <div className="col-auto p-2">

                                    <button className="btn btn-danger">
                                        <h4><i className="bi bi-cart"></i></h4>
                                    </button>

                                </div>
                                <div className="col-auto p-2">

                                    <Link to="/auth/login">
                                        <button className="btn btn-danger">
                                            <h4><i className="bi bi-box-arrow-right"></i></h4>
                                        </button>
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}
