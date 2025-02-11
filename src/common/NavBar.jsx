import { useState, useEffect, useContext } from "react";
import { FaServicestack } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { IoIosLogIn } from "react-icons/io";
import {
    MdAppRegistration,
    MdAssignmentAdd,
    MdOutlineDarkMode,
    MdOutlineDesignServices,
    MdOutlineReviews,
} from "react-icons/md";
import { VscPreview } from "react-icons/vsc";
import { Link, NavLink, useLocation } from "react-router-dom";
import AuthContext from "../context/authContext/AuthContext";
import Swal from "sweetalert2";
import { CiLight } from "react-icons/ci";
import userIco from "../assets/user.png";

const NavBar = () => {
    const { user, signOutUser } = useContext(AuthContext);
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem("theme") === "dark"
    );

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                fetch("https://servicia-server.vercel.app/logout", {
                    method: "POST",
                    credentials: "include",
                })
                    .then((res) => {
                        if (res.ok) {
                            console.log("Cookie cleared successfully");
                        }
                    })
                    .catch((err) => {
                        console.error("Error clearing cookies:", err);
                    });

                Swal.fire({
                    title: "Success!",
                    text: "User signed out successfully",
                    icon: "success",
                    confirmButtonText: "Close",
                    customClass: {
                        confirmButton: "bg-[#357ef0] text-white",
                    },
                });
            })
            .catch((error) => {
                console.error("Sign-out error:", error);
                Swal.fire({
                    title: "Error!",
                    text: error.message,
                    icon: "error",
                    confirmButtonText: "Close",
                    customClass: {
                        confirmButton: "bg-error text-white",
                    },
                });
            });
    };

    const links = (
        <>
            <li>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive
                            ? "bg-[#357ef0] text-white"
                            : "bg-transparent dark:text-white"
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
                            : "bg-transparent dark:text-white"
                    }
                >
                    <VscPreview />
                    Services
                </NavLink>
            </li>
            {user ? (
                <>
                    <li>
                        <NavLink
                            to="/addService"
                            className={({ isActive }) =>
                                isActive
                                    ? "bg-[#357ef0] text-white"
                                    : "bg-transparent dark:text-white"
                            }
                        >
                            <MdAssignmentAdd />
                            Add Service
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={`/myServices/${user.email}`}
                            className={({ isActive }) =>
                                isActive
                                    ? "bg-[#357ef0] text-white"
                                    : "bg-transparent dark:text-white"
                            }
                        >
                            <MdOutlineDesignServices />
                            My Services
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={`/myReviews/${user.email}`}
                            className={({ isActive }) =>
                                isActive
                                    ? "bg-[#357ef0] text-white"
                                    : "bg-transparent dark:text-white"
                            }
                        >
                            <MdOutlineReviews />
                            My Reviews
                        </NavLink>
                    </li>
                </>
            ) : (
                <>
                    <li>
                        <NavLink
                            to="/login"
                            className={({ isActive }) =>
                                isActive
                                    ? "bg-[#357ef0] text-white"
                                    : "bg-transparent dark:text-white"
                            }
                        >
                            <IoIosLogIn />
                            Login
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/register"
                            className={({ isActive }) =>
                                isActive
                                    ? "bg-[#357ef0] text-white"
                                    : "bg-transparent dark:text-white"
                            }
                        >
                            <MdAppRegistration />
                            Register
                        </NavLink>
                    </li>
                </>
            )}
        </>
    );

    return (
        <div className="shadow-lg navbar sticky top-0 z-50 bg-base-100 dark:bg-gray-900 dark:text-white">
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
                        className="menu menu-sm dropdown-content bg-base-100 dark:bg-gray-800 rounded-box z-[1] mt-3 w-52 p-2 shadow"
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
            <div className="navbar-end flex items-center gap-3">
                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="btn btn-circle bg-gray-200 dark:bg-gray-700"
                >
                    {darkMode ? (
                        <CiLight size={24} />
                    ) : (
                        <MdOutlineDarkMode size={24} />
                    )}
                </button>
                {user ? (
                    <div className="flex gap-2">
                        <div
                            title={user.displayName ? user.displayName : ""}
                            className="w-[50px] h-[50px] rounded-full border-2 border-[#357ef0] p-[4px]"
                        >
                            <img
                                className="w-full h-full rounded-full"
                                src={user.photoURL ? user.photoURL : userIco}
                                alt="User Icon"
                            />
                        </div>
                        <button
                            onClick={handleSignOut}
                            className="btn btn-error text-white"
                        >
                            Log Out
                        </button>
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default NavBar;
