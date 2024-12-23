import React from "react";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto my-10">
            <h1 className="text-3xl font-bold text-center py-4 text-[#357ef0]">
                Login
            </h1>
            <form className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
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
                        type="password"
                        placeholder="password"
                        className="input input-bordered"
                        required
                    />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">
                            Forgot password?
                        </a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn bg-[#357ef0] text-white">
                        Login
                    </button>
                </div>
                <div>
                    <p>
                        Not register yet? please{" "}
                        <Link
                            className="font-semibold hover:text-[#357ef0]"
                            to={"/register"}
                        >
                            Register
                        </Link>{" "}
                        first.
                    </p>
                </div>
                <p className="text-center text-[#357ef0] font-bold py-2">
                    ----------Or----------
                </p>
                <div>
                    <button
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

export default Login;
