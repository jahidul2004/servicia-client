import { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/authContext/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";

const MyServices = () => {
    const { user } = useContext(AuthContext);
    const [myServices, setMyServices] = useState([]);
    const [searchKeyword, setSearchKeyword] = useState("");
    const [selectedService, setSelectedService] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        axios
            .get(`http://localhost:3000/services/${user?.email}`)
            .then((res) => {
                setMyServices(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [user?.email]);

    // Filter services based on the search keyword
    const filteredServices = myServices.filter((service) =>
        service.serviceTitle.toLowerCase().includes(searchKeyword.toLowerCase())
    );

    const handleUpdateService = (service) => {
        setSelectedService(service);
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setSelectedService(null);
        setIsModalOpen(false);
    };

    const handleUpdateSubmit = (e) => {
        e.preventDefault();
        const {
            _id,
            serviceTitle,
            description,
            price,
            category,
            companyName,
            websiteURL,
        } = selectedService;

        axios
            .put(`http://localhost:3000/updateService/${_id}`, {
                serviceTitle,
                description,
                price,
                category,
                companyName,
                websiteURL,
            })
            .then((res) => {
                console.log(res.data);
                setMyServices((prevServices) =>
                    prevServices.map((service) =>
                        service._id === _id
                            ? { ...service, ...selectedService }
                            : service
                    )
                );
                Swal.fire({
                    title: "Success!",
                    text: "Service updated successfully!",
                    icon: "success",
                    confirmButtonText: "Close",
                    customClass: {
                        confirmButton: "btn bg-[#357ef0] text-white",
                    },
                });
                handleModalClose();
            })
            .catch((err) => {
                console.log(err);
                Swal.fire({
                    title: "Error!",
                    text: "Failed to update the service.",
                    icon: "error",
                });
            });
    };

    const handleDeleteService = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, keep it",
            customClass: {
                confirmButton: "btn btn-error text-white",
                cancelButton: "btn bg-[#357ef0] text-white",
            },
        }).then((result) => {
            if (result.isConfirmed) {
                axios
                    .delete(`http://localhost:3000/deleteService/${id}`)
                    .then((res) => {
                        console.log(res.data);
                        setMyServices((prevServices) =>
                            prevServices.filter((service) => service._id !== id)
                        );
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your service has been deleted.",
                            icon: "success",
                            customClass: {
                                confirmButton: "btn bg-[#357ef0] text-white",
                            },
                        });
                    })
                    .catch((err) => {
                        console.log(err);
                        Swal.fire({
                            title: "Error!",
                            text: "Failed to delete the service.",
                            icon: "error",
                        });
                    });
            }
        });
    };

    return (
        <div className="mx-4">
            <div className="flex flex-col items-center py-10">
                <h1 className="text-3xl font-bold text-center mb-4 text-[#357ef0]">
                    My Services!
                    <br />
                    --------------------------
                </h1>
                <label className="input input-bordered border-[#357ef0] flex items-center gap-2">
                    <input
                        type="text"
                        className="grow"
                        placeholder="Search keyword"
                        value={searchKeyword}
                        onChange={(e) => setSearchKeyword(e.target.value)}
                    />
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
                {filteredServices.map((service) => (
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
                            <p className="py-2 font-semibold">
                                {service.description}
                            </p>
                            <p className="font-bold text-[#357ef0]">
                                Price: {service.price}
                            </p>
                        </div>
                        <div className="flex gap-2 mt-4">
                            <button
                                onClick={() => handleUpdateService(service)}
                                className="btn bg-[#357ef0] text-white"
                            >
                                Update Service
                            </button>
                            <button
                                onClick={() => handleDeleteService(service._id)}
                                className="btn bg-[#357ef0] text-white"
                            >
                                Delete Service
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="max-h-[100vh] fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white rounded-lg p-6 w-[90%] md:w-[600px]">
                        <h2 className="text-2xl font-bold mb-4">
                            Update Service
                        </h2>
                        <form
                            className="grid grid-cols-1 md:grid-cols-2 gap-4"
                            onSubmit={handleUpdateSubmit}
                        >
                            <div className="mb-4">
                                <label className="block font-semibold mb-1">
                                    Image URL
                                </label>
                                <input
                                    type="text"
                                    value={selectedService.serviceImage}
                                    onChange={(e) =>
                                        setSelectedService({
                                            ...selectedService,
                                            serviceImage: e.target.value,
                                        })
                                    }
                                    className="input input-bordered w-full"
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block font-semibold mb-1">
                                    Category
                                </label>
                                <input
                                    type="text"
                                    value={selectedService.category}
                                    onChange={(e) =>
                                        setSelectedService({
                                            ...selectedService,
                                            category: e.target.value,
                                        })
                                    }
                                    className="input input-bordered w-full"
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block font-semibold mb-1">
                                    Service Title
                                </label>
                                <input
                                    type="text"
                                    value={selectedService.serviceTitle}
                                    onChange={(e) =>
                                        setSelectedService({
                                            ...selectedService,
                                            serviceTitle: e.target.value,
                                        })
                                    }
                                    className="input input-bordered w-full"
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block font-semibold mb-1">
                                    Price
                                </label>
                                <input
                                    type="number"
                                    value={selectedService.price}
                                    onChange={(e) =>
                                        setSelectedService({
                                            ...selectedService,
                                            price: e.target.value,
                                        })
                                    }
                                    className="input input-bordered w-full"
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block font-semibold mb-1">
                                    Company Name
                                </label>
                                <input
                                    type="text"
                                    value={selectedService.companyName}
                                    onChange={(e) =>
                                        setSelectedService({
                                            ...selectedService,
                                            companyName: e.target.value,
                                        })
                                    }
                                    className="input input-bordered w-full"
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block font-semibold mb-1">
                                    Website URL
                                </label>
                                <input
                                    type="text"
                                    value={selectedService.websiteURL}
                                    onChange={(e) =>
                                        setSelectedService({
                                            ...selectedService,
                                            websiteURL: e.target.value,
                                        })
                                    }
                                    className="input input-bordered w-full"
                                />
                            </div>

                            <div className="md:col-span-2">
                                <label className="block font-semibold mb-1">
                                    Description
                                </label>
                                <textarea
                                    value={selectedService.description}
                                    onChange={(e) =>
                                        setSelectedService({
                                            ...selectedService,
                                            description: e.target.value,
                                        })
                                    }
                                    className="textarea textarea-bordered w-full"
                                ></textarea>
                            </div>
                            <div className="flex gap-2">
                                <button
                                    type="button"
                                    onClick={handleModalClose}
                                    className="btn btn-error text-white"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="btn bg-[#357ef0] text-white"
                                >
                                    Save Changes
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyServices;
