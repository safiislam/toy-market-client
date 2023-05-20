import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../Layout/MainLayout";
import Login from "../pages/Login";
import Registaion from "../pages/Registaion";
import Blog from "../pages/Blog";
import AddToys from "../pages/AddToys";
import MyToys from "../pages/MyToys";

const router = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout />,
        children:[
            {
                path:'/',
                element: <Home />
            },
            {
                path:'/login',
                element:<Login /> 
            },
            {
                path:'/register',
                element: <Registaion />
            },
            {
                path:'/blog',
                element: <Blog />
            },{
                path:'/addToy',
                element: <AddToys />
            },
            {
                path:'/myToy',
                element:<MyToys />
            }
        ]
    }

])

export default router