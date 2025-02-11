import { useContext, useEffect } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import AuthContext from "../../context/authContext/AuthContext";
import Swal from "sweetalert2";
import axios from "axios";

const Register = () => {
    const { registerUser, setUser, updateUserProfile, googleLogin } =
        useContext(AuthContext);

    const validatePassword = (password) => {
        const uppercase = /[A-Z]/;
        const lowercase = /[a-z]/;
        const minLength = /.{6,}/;

        if (!uppercase.test(password)) {
            return "Password must contain at least one uppercase letter.";
        }
        if (!lowercase.test(password)) {
            return "Password must contain at least one lowercase letter.";
        }
        if (!minLength.test(password)) {
            return "Password must be at least 6 characters long.";
        }
        return null;
    };

    const handleRegister = (event) => {
        event.preventDefault();

        const form = event.target;
        const photoURL = form.photoURL.value;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        // Validate password using regex
        const passwordError = validatePassword(password);
        if (passwordError) {
            Swal.fire({
                title: "Error!",
                text: passwordError,
                icon: "error",
                confirmButtonText: "Close",
                customClass: {
                    confirmButton: "bg-error text-white",
                },
            });
            return;
        }

        registerUser(email, password)
            .then((user) => {
                updateUserProfile({
                    displayName: name,
                    photoURL: photoURL,
                });
                setUser(user);
                if (user) {
                    Swal.fire({
                        title: "Success!",
                        text: "Account created successfully",
                        icon: "success",
                        confirmButtonText: "Close",
                        customClass: {
                            confirmButton: "bg-[#357ef0] text-white",
                        },
                    });
                    form.reset();

                    axios
                        .post("https://servicia-server.vercel.app/addUser", {
                            email,
                            name,
                            photoURL,
                            password,
                        })
                        .then((res) => {
                            // console.log(res.data);
                        });

                    axios
                        .post(
                            "https://servicia-server.vercel.app/jwt",
                            {
                                user: { email: email },
                            },
                            {
                                withCredentials: true,
                            }
                        )
                        .then((res) => {
                            // console.log(res.data);
                        });
                }
                window.location.href = "/";
            })
            .catch((error) => {
                console.log(error);
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

    return (
        <div className="card bg-base-100 dark:bg-[#0f203a] w-full max-w-sm shrink-0 shadow-2xl mx-auto my-10">
            <h1 className="text-3xl font-bold text-center py-4 text-[#357ef0]">
                Register
            </h1>
            <form onSubmit={handleRegister} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text dark:text-white">Photo URL</span>
                    </label>
                    <input
                        name="photoURL"
                        type="url"
                        placeholder="Enter Photo URL"
                        className="input input-bordered dark:bg-[#0a1728]"
                        required
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text dark:text-white">Name</span>
                    </label>
                    <input
                        name="name"
                        type="text"
                        placeholder="Enter Your Name"
                        className="input input-bordered dark:bg-[#0a1728]"
                        required
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text dark:text-white">Email</span>
                    </label>
                    <input
                        name="email"
                        type="email"
                        placeholder="email"
                        className="input input-bordered dark:bg-[#0a1728]"
                        required
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text dark:text-white">Password</span>
                    </label>
                    <input
                        name="password"
                        type="password"
                        placeholder="password"
                        className="input input-bordered dark:bg-[#0a1728]"
                        required
                    />
                </div>
                <div className="form-control mt-6">
                    <button className="border-none shadow-none btn bg-[#357ef0] text-white">
                        Register
                    </button>
                </div>
                <div>
                    <p>
                        Have an account? please{" "}
                        <Link
                            className="font-semibold hover:text-[#357ef0]"
                            to={"/login"}
                        >
                            Login
                        </Link>{" "}
                    </p>
                </div>
                <p className="text-center text-[#357ef0] font-bold py-2">
                    ----------Or----------
                </p>
                <div>
                    <button
                        onClick={() => {
                            googleLogin()
                                .then((user) => {
                                    setUser(user);

                                    if (user) {
                                        Swal.fire({
                                            title: "Success!",
                                            text: "Logged in successfully",
                                            icon: "success",
                                            confirmButtonText: "Close",
                                            customClass: {
                                                confirmButton:
                                                    "bg-[#357ef0] text-white",
                                            },
                                        });
                                    }
                                    axios
                                        .post(
                                            "https://servicia-server.vercel.app/addUser",
                                            {
                                                email: user.user.email,
                                                name: user.user.displayName,
                                                photoURL: user.user.photoURL,
                                                password: "google",
                                            }
                                        )
                                        .then((res) => {
                                            // console.log(res.data);
                                        });

                                    axios
                                        .post(
                                            "https://servicia-server.vercel.app/jwt",
                                            {
                                                user: {
                                                    email: user.user.email,
                                                },
                                            },
                                            {
                                                withCredentials: true,
                                            }
                                        )
                                        .then((res) => {
                                            // console.log(res.data);
                                        });
                                    window.location.href = "/";
                                })
                                .catch((error) => {
                                    console.log(error);
                                    Swal.fire({
                                        title: "Error!",
                                        text: error.message,
                                        icon: "error",
                                        confirmButtonText: "Close",
                                        customClass: {
                                            confirmButton:
                                                "bg-error text-white",
                                        },
                                    });
                                });
                        }}
                        type="button"
                        className="btn border-none shadow-none w-full bg-[#357ef0] text-white"
                    >
                        <FaGoogle />
                        Login With Google
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Register;
