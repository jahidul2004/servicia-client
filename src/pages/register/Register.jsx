import { useContext, useEffect } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import AuthContext from "../../context/authContext/AuthContext";
import Swal from "sweetalert2";
import axios from "axios";

const Register = () => {
    const { registerUser, setUser, updateUserProfile, googleLogin } =
        useContext(AuthContext);

    const handleRegister = (event) => {
        event.preventDefault();

        const form = event.target;

        const photoURL = form.photoURL.value;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

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
                        .post("http://localhost:3000/addUser", {
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
                            "http://localhost:3000/jwt",
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
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto my-10">
            <h1 className="text-3xl font-bold text-center py-4 text-[#357ef0]">
                Register
            </h1>
            <form onSubmit={handleRegister} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input
                        name="photoURL"
                        type="url"
                        placeholder="Enter Photo URL"
                        className="input input-bordered"
                        required
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        name="name"
                        type="text"
                        placeholder="Enter Your Name"
                        className="input input-bordered"
                        required
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        name="email"
                        type="email"
                        placeholder="email"
                        className="input input-bordered"
                        required
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input
                        name="password"
                        type="password"
                        placeholder="password"
                        className="input input-bordered"
                        required
                    />
                </div>
                <div className="form-control mt-6">
                    <button className="btn bg-[#357ef0] text-white">
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
                                        .post("http://localhost:3000/addUser", {
                                            email: user.user.email,
                                            name: user.user.displayName,
                                            photoURL: user.user.photoURL,
                                            password: "google",
                                        })
                                        .then((res) => {
                                            // console.log(res.data);
                                        });

                                    axios
                                        .post(
                                            "http://localhost:3000/jwt",
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
                        className="btn w-full bg-[#357ef0] text-white"
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
