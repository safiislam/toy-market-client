import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../Layout/MainLayout";
import Login from "../pages/Login";
import Registaion from "../pages/Registaion";
import Blog from "../pages/Blog";
import AddToys from "../pages/AddToys";
import MyToys from "../pages/MyToys";
import UpdateToy from "../pages/UpdateToy";
import AllToys from "../pages/AllToys";
import ViewDetail from "../pages/ViewDetail";
// import PrivetRoute from "./PrivetRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Registaion />
            },
            {
                path: '/blog',
                element: <Blog />
            }, {
                path: '/addToy',
                element: <AddToys />
            },
            {
                path: '/myToy',
                // element: <PrivetRoute><MyToys /></PrivetRoute>,
                element:<MyToys />

            },
            {
                path:'/allToy',
                element: <AllToys />,
                loader : ()=> fetch('http://localhost:5000/alltoy')
            },
            {
                path:'detail/:id',
                element: <ViewDetail />,
                loader: ({params})=> fetch(`http://localhost:5000/toy/${params.id}`)
            },
            {
                path:'/update/:id',
                element: <UpdateToy />,
                loader:({params})=> fetch(`http://localhost:5000/toy/${params.id}`)
            }
        ]
    }

])

export default router