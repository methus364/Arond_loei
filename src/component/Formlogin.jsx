import { NavLink } from "react-router-dom"

const Formlogin = () => {
    return (
        <>
            <div className="container-fluid  d-flex align-items-center justify-content-center bg-dark d-flex" style={{ height: "100vh" }}>
                <div className="bg-white d-flex flex-column  align-items-center justify-content-center " style={{ height: "65vh", width: "55vh" }}>
                    <div>
                        <h1>LOGIN</h1>
                    </div>
                    <div>
                        <form action="">
                            <div className="">
                                <label htmlFor="requestDate" className="form-label">
                                    username
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="requestDate"
                                    name="requestDate"
                                // value={}
                                // onChange={}
                                />
                            </div>
                            <div className="">
                                <label htmlFor="requestDate" className="form-label">
                                    Password
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="requestDate"
                                    name="requestDate"
                                // value={}
                                // onChange={}
                                />
                            </div>
                            <NavLink to={'/admin'}>
                                <button type="submit" className="btn btn-primary mt-2">
                                    Login
                                </button>
                            </NavLink>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Formlogin
