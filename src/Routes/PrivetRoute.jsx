
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivetRoute = ({children}) => {
    const  location = useLocation();
    const {user,loader} = useContext(AuthContext)
    if(loader){
        return <progress className="progress w-56"></progress>
    }
    if(user){
        return children
    }
    return <Navigate to='/login' state={{ from: location }} replace />
};

export default PrivetRoute;