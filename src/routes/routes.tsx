import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import Home from "../pages/Home";
import Dashboard from "../components/Dashboard/Dashboard";
import Supplices from "../components/Dashboard/Supplices";
import CreateSupply from "../components/Dashboard/CreateSupply";
import DashboardLyout from "../components/layout/DashboardLyout";
import AllReliefs from "../components/Home/reliefs/AllReliefs";
import ReliefDetails from "../components/Home/reliefs/ReliefDetails";
import UpdateReliefForm from "../components/Dashboard/UpdateReliefForm";
import ProtecedRoute from "../components/layout/ProtecedRoute";


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: ([
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/relief-goods',
                element: <AllReliefs />
            },
            {
                path: '/relief-goods/:id',
                element: <ReliefDetails />,
                loader: ({params}) => fetch(`https://relief-server.vercel.app/api/v1/relief-goods/${params.id}`)
                
            },
            
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/login',
                element: <Login />
            },
        ])
    },
    {
        path: '/dashboard',
        element:<ProtecedRoute>  <DashboardLyout /> </ProtecedRoute>,
        children: ([
            {
                index: true,
                element: <Dashboard /> 
            },
            {
                path: 'supplies',
                element: <Supplices />
            },
            {
                path: 'create-supply',
                element: <CreateSupply />
            },
            {
                path: 'update-supply/:id',
                element: <UpdateReliefForm />,
                loader: ({params}) => fetch(`https://relief-server.vercel.app/api/v1/relief-goods/${params.id}`)
                
            },
        ])
    }

])


export default router