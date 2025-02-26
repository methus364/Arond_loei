import { NavLink } from "react-router-dom";

const Formlogin = () => {
    return (
        <>
            <div className="container-fluid d-flex align-items-center justify-content-center bg-dark" style={{ height: "100vh" }}>
                <div className="bg-white d-flex flex-column align-items-center justify-content-center" style={{ height: "65vh", width: "55vh" }}>
                    <div>
                        <h1>LOGIN</h1>
                    </div>
                    <div>
                        <form action="">
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label">
                                    Username
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="username"
                                    name="username"
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    name="password"
                                    required
                                />
                            </div>
                            <NavLink to="/admin">
                                <button type="submit" className="btn btn-primary w-100 mt-2">
                                    Login
                                </button>
                            </NavLink>
                        </form>
                        <div className="text-center mt-3">
                            <p>Don't have an account?</p>
                            <NavLink to="/register">
                                <button className="btn btn-secondary w-100">
                                    Register
                                </button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Formlogin;
