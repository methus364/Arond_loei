import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Room from '../page/admin/Room'
import Problem from '../page/admin/Problem'
import Report from '../page/admin/Report'
import Bill from '../page/admin/Bill'
import Home from '../page/Home'
import Booking from '../page/Booking'
import Login from '../page/Login'
import Reportproblem from '../page/Reportproblem'
import LayoutAdmin from '../Layout/LayoutAdmin'
import Chaech from '../page/admin/Chaech'
import BookingAdmin from '../page/admin/BookingAdmin'
import Sawbill from '../page/Sawbill'

const router = createBrowserRouter([
    {
        path: '/admin',
        element: <LayoutAdmin/>,
        children: [
            { index: true, element: <Room/> },
            { path:"problem",element: <Problem/>},
            { path:"report",element: <Report/>},
            { path:"bill",element: <Bill/>},
            { path:"check",element: <Chaech/>},
            { path:"book",element: <BookingAdmin/>},
        ]
    },
    {
        path: '/',
        children: [
            { index: true, element: <Home/> },
            { path:"booking",element: <Booking/>},
            { path:"login",element: <Login/>},
            { path:"report",element: <Reportproblem/>},
            { path:"saw",element: <Sawbill/>},
        ]
    },
])

const Approutes = () => {
  return (
    <div>
         <RouterProvider router={router} />
    </div>
  )
}

export default Approutes
