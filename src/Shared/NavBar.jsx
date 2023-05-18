import {  NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="navbar flex flex-col md:flex-row  justify-between bg-base-300">
            <div className="">
                <a className="btn btn-ghost normal-case text-xl">Safi islam</a>
            </div>
            <div className="flex flex-col md:flex-row gap-5" >
                <NavLink
                    to="/"
                    className={({ isActive}) =>
                        isActive ? "text-blue-500 font-bold" : "font-bold"
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to="/blog"
                    className={({ isActive}) =>
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
                            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;