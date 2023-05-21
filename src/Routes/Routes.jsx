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
import PrivetRoute from "./PrivetRoute";
import ErrorPage from "../pages/ErrorPage";
// import PrivetRoute from "./PrivetRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement:<ErrorPage /> ,
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
                element: <PrivetRoute> <AddToys /></PrivetRoute>
            },
            {
                path: '/myToy',
                element: <PrivetRoute><MyToys /></PrivetRoute>,
                // element:<MyToys />

            },
            {
                path:'/allToy',
                element: <PrivetRoute><AllToys/></PrivetRoute>,
                loader : ()=> fetch('https://b7a11-toy-marketplace-server-side-safiislam.vercel.app/alltoy')
            },
            {
                path:'detail/:id',
                element:<PrivetRoute> <ViewDetail /></PrivetRoute>,
                loader: ({params})=> fetch(`https://b7a11-toy-marketplace-server-side-safiislam.vercel.app/toy/${params.id}`)
            },
            {
                path:'/update/:id',
                element:<PrivetRoute> <UpdateToy /></PrivetRoute>,
                loader:({params})=> fetch(`https://b7a11-toy-marketplace-server-side-safiislam.vercel.app/toy/${params.id}`)
            }
        ]
    }

])

export default router