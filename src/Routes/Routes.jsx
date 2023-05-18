import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../Layout/MainLayout";
import Login from "../pages/Login";
import Registaion from "../pages/Registaion";
import Blog from "../pages/Blog";

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
            }
        ]
    }

])

export default router