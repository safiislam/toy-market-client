import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { FaUserCircle } from "react-icons/fa";

const NavBar = () => {
    const { user ,logOut} = useContext(AuthContext)
    console.log
    const handleLogOut=()=>{
        logOut()
        .then(()=>{})
        .then(err=>{
            console.log(err)
        })
    }
    return (
        <div className="navbar flex flex-col md:flex-row  justify-between bg-base-300">
            <div className="">
                <a className="btn btn-ghost normal-case text-xl">Safi islam</a>
            </div>
            <div className="flex flex-col md:flex-row gap-5" >
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? "text-blue-500 font-bold" : "font-bold"
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to="/allToy"
                    className={({ isActive }) =>
                        isActive ? "text-blue-500 font-bold" : "font-bold"
                    }
                >
                    All Toy
                </NavLink>
                <NavLink
                    to="/addToy"
                    className={({ isActive }) =>
                        isActive ? "text-blue-500 font-bold" : " font-bold"
                    }
                >
                    Add toy
                </NavLink>
                <NavLink
                    to="/myToy"
                    className={({ isActive }) =>
                        isActive ? "text-blue-500 font-bold" : " font-bold"
                    }
                >
                    My toy
                </NavLink>
                <NavLink
                    to="/blog"
                    className={({ isActive }) =>
                        isActive ? "text-blue-500 font-bold" : " font-bold"
                    }
                >
                    blog
                </NavLink>

            </div>

            <div className="flex-none gap-2">

                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            {user ? <img title={user?.displayName} src={user?.photoURL} /> : <FaUserCircle className="w-[40px] h-full " /> }
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <li>{user && <>Email : {user?.email}</>}</li>
                        <li>
                            <Link className="justify-between">
                                Profile
                            </Link>
                        </li>

                        <li>{
                            !user ? <li><Link to='/login'>login</Link></li> : <li onClick={handleLogOut} >LogOut</li>
                        }</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;