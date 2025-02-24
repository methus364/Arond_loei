import { Outlet } from "react-router-dom"
import Mainmune from "../component/admin/Mainmune"

const LayoutAdmin = () => {
    return (
        <>
            <div className="d-flex vh-100">
                <Mainmune/>
                <div className="d-flex flex-column flex-grow-1">
                    <main className="flex-grow-1 p-3 bg-light overflow-auto">
                        <Outlet />
                    </main>
                </div>
            </div>
            </>
            )  
}
export default LayoutAdmin
