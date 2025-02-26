import axios from "axios";
import { useContext } from "react";
import Swal from "sweetalert2";
import AuthContext from "../../context/authContext/AuthContext";
import { Helmet } from "react-helmet";

const AddService = () => {
    const { user } = useContext(AuthContext);

    const handleAddService = (event) => {
        event.preventDefault();

        const form = event.target;

        const serviceImage = form.serviceImage.value;
        const serviceTitle = form.serviceTitle.value;
        const companyName = form.companyName.value;
        const websiteURL = form.websiteURL.value;
        const category = form.category.value;
        const price = form.price.value;
        const description = form.description.value;
        const serviceCreator = user?.email;
        const addedDate = new Date().toLocaleDateString();

        const newService = {
            serviceImage,
            serviceTitle,
            companyName,
            websiteURL,
            category,
            price,
            description,
            serviceCreator,
            addedDate,
        };

        axios
            .post("https://servicia-server.vercel.app/addService", newService)
            .then((response) => {
                form.reset();

                if (response.data.acknowledged) {
                    Swal.fire({
                        title: "Success!",
                        text: "Service added successfully!",
                        icon: "success",
                        confirmButtonText: "Close",
                        customClass: {
                            confirmButton: "btn bg-[#357ef0] text-white",
                        },
                    });
                }
            })
            .catch((error) => {
                console.error(error);
                Swal.fire({
                    title: "Error!",
                    text: "Failed to add service!",
                    icon: "error",
                    confirmButtonText: "Close",
                    customClass: {
                        confirmButton: "btn btn-error text-white",
                    },
                });
            });
    };
    return (
        <div className="dark:bg-[#0f203a] card bg-base-100 w-full max-w-2xl shrink-0 shadow-2xl mx-auto my-10">
            <Helmet>
                <title>Servicia|Add Service</title>
            </Helmet>
            <h1 className="text-3xl font-bold text-center py-4 text-[#357ef0]">
                Add a service!
            </h1>
            <form
                onSubmit={handleAddService}
                className="card-body grid grid-cols-1 md:grid-cols-2"
            >
                <div className="form-control">
                    <label className="label">
                        <span className="label-text dark:text-white">
                            Service Image
                        </span>
                    </label>
                    <input
                        name="serviceImage"
                        type="url"
                        placeholder="Enter image URL"
                        className="input input-bordered dark:bg-[#0a1728]"
                        required
                    />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text dark:text-white">
                            Service Title
                        </span>
                    </label>
                    <input
                        name="serviceTitle"
                        type="text"
                        placeholder="Enter service title"
                        className="input input-bordered dark:bg-[#0a1728]"
                        required
                    />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text dark:text-white">
                            Company Name
                        </span>
                    </label>
                    <input
                        name="companyName"
                        type="text"
                        placeholder="Enter company name"
                        className="input input-bordered dark:bg-[#0a1728]"
                        required
                    />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text dark:text-white">
                            Website
                        </span>
                    </label>
                    <input
                        name="websiteURL"
                        type="url"
                        placeholder="Enter website URL"
                        className="input input-bordered dark:bg-[#0a1728]"
                        required
                    />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text dark:text-white">
                            Category
                        </span>
                    </label>
                    <select
                        name="category"
                        className="select select-bordered dark:bg-[#0a1728]"
                        required
                    >
                        <option value="">Select Category</option>
                        <option value="IT">IT</option>
                        <option value="Food">Food</option>
                        <option value="Transport">Transport</option>
                        <option value="Others">Others</option>
                    </select>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text dark:text-white">
                            Price
                        </span>
                    </label>
                    <input
                        name="price"
                        type="number"
                        placeholder="Enter price"
                        className="input input-bordered dark:bg-[#0a1728]"
                        required
                    />
                </div>

                <div className="form-control md:col-span-2">
                    <label className="label">
                        <span className="label-text dark:text-white">
                            Description
                        </span>
                    </label>
                    <textarea
                        name="description"
                        placeholder="Enter Description"
                        className="textarea textarea-bordered dark:bg-[#0a1728]"
                        rows={4}
                        required
                    ></textarea>
                </div>

                <div className="form-control mt-6 md:col-span-2">
                    <button className="btn border-none shadow-none bg-[#357ef0] text-white">
                        Add Now
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddService;
