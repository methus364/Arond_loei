import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <NavLink to={"/"} className="navbar-brand" >
                        Around Loei
                    </NavLink>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to={"/"} className="nav-link active" aria-current="page">
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={"/booking"} className="nav-link active" aria-current="page">
                                    Booking
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={"/report"} className="nav-link active" aria-current="page">
                                    Report
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={"/saw"} className="nav-link active" aria-current="page">
                                    Bill
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={"/profile"} className="nav-link active" aria-current="page">
                                    Profile
                                </NavLink>
                            </li>
                        </ul>
                        <NavLink to={"/login"}>
                            <button className="btn btn-outline-success" type="submit">
                                LOGIN
                            </button>
                        </NavLink>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;