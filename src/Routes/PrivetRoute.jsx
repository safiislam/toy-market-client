
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivetRoute = ({children}) => {
    const {user,loader} = useContext(AuthContext)
    if(loader){
        return <progress className="progress w-56"></progress>
    }
    if(user){
        return children
    }
    return <Navigate to='/login' />
};

export default PrivetRoute;