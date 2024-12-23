import { FaServicestack } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { IoIosLogIn } from "react-icons/io";
import { MdAppRegistration } from "react-icons/md";
import { VscPreview } from "react-icons/vsc";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    const links = (
        <>
            <li>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive
                            ? "bg-[#357ef0] text-white"
                            : "bg-transparent text-black"
                    }
                >
                    <GoHome />
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/services"
                    className={({ isActive }) =>
                        isActive
                            ? "bg-[#357ef0] text-white"
                            : "bg-transparent text-black"
                    }
                >
                    <VscPreview />
                    Services
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/register"
                    className={({ isActive }) =>
                        isActive
                            ? "bg-[#357ef0] text-white"
                            : "bg-transparent text-black"
                    }
                >
                    <MdAppRegistration />
                    Register
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/login"
                    className={({ isActive }) =>
                        isActive
                            ? "bg-[#357ef0] text-white"
                            : "bg-transparent text-black"
                    }
                >
                    <IoIosLogIn />
                    Login
                </NavLink>
            </li>
        </>
    );
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                    >
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-3xl font-bold text-[#357ef0]">
                    <FaServicestack />
                    Servicia
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">{links}</ul>
            </div>
            <div className="navbar-end">
                <a className="btn bg-[#357ef0] text-white">Login</a>
            </div>
        </div>
    );
};

export default NavBar;
