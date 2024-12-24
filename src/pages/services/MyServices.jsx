import { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/authContext/AuthContext";
import axios from "axios";

const MyServices = () => {
    const { user } = useContext(AuthContext);
    const [myServices, setMyServices] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost:3000/services/${user?.email}`)
            .then((res) => {
                setMyServices(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        <div className="mx-4">
            <div className="flex flex-col items-center py-10">
                <h1 className="text-3xl font-bold text-center mb-4 text-[#357ef0]">
                    My services!
                </h1>
                <label className="input input-bordered border-[#357ef0] flex items-center gap-2">
                    <input type="text" className="grow" placeholder="Search keyword" />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70"
                    >
                        <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd"
                        />
                    </svg>
                </label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {myServices.map((service) => (
                    <div className="border-2 rounded-lg p-4" key={service._id}>
                        <div className="h-[300px]">
                            <img
                                className="w-full h-full rounded-lg object-cover"
                                src={service.serviceImage}
                                alt=""
                            />
                        </div>
                        <div className="mt-2">
                            <h1 className="text-2xl font-bold text-[#357ef0]">
                                {service.serviceTitle}
                            </h1>
                            <p className="py-2 font-semibold">{service.description}</p>
                            <p className="font-bold text-[#357ef0]">Price: {service.price}</p>
                        </div>
                        <div className="flex gap-2 mt-4">
                            <button className="btn bg-[#357ef0] text-white">Update Service</button>
                            <button className="btn bg-[#357ef0] text-white">Delete Service</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyServices;
