import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import FeaturedServiceCard from "../featuredService/FeaturedServiceCard";
import { Helmet } from "react-helmet";

const Services = () => {
    const data = useLoaderData();
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedSortOrder, setSelectedSortOrder] = useState("");
    const [filteredServices, setFilteredServices] = useState(data);

    const handleSearchChange = (event) => {
        const term = event.target.value;
        setSearchTerm(term);
        filterServices(term, selectedCategory, selectedSortOrder);
    };

    const handleCategoryChange = (event) => {
        const category = event.target.value;
        setSelectedCategory(category);
        filterServices(searchTerm, category, selectedSortOrder);
    };

    const handleSortChange = (event) => {
        const sortOrder = event.target.value;
        setSelectedSortOrder(sortOrder);
        filterServices(searchTerm, selectedCategory, sortOrder);
    };

    const filterServices = (term, category, sortOrder) => {
        let filteredData = data.filter((service) => {
            const matchesTerm =
                service.serviceTitle
                    .toLowerCase()
                    .includes(term.toLowerCase()) ||
                service.description
                    .toLowerCase()
                    .includes(term.toLowerCase()) ||
                service.category.toLowerCase().includes(term.toLowerCase());

            const matchesCategory = category
                ? service.category.toLowerCase() === category.toLowerCase()
                : true;

            return matchesTerm && matchesCategory;
        });

        // Sorting logic
        if (sortOrder) {
            filteredData = filteredData.sort((a, b) => {
                if (sortOrder === "asc") {
                    return a.price - b.price;
                } else if (sortOrder === "desc") {
                    return b.price - a.price;
                }
                return 0;
            });
        }

        setFilteredServices(filteredData);
    };

    return (
        <div className="mx-4 my-10">
            <Helmet>
                <title>Servicia | Services</title>
            </Helmet>
            <h1 className="text-3xl font-bold text-center text-[#357ef0] py-4">
                All Services <br /> --------------------------
            </h1>
            <div className="flex flex-col md:flex-row items-center justify-center mb-5 gap-4 md:gap-8">
                <div className="flex gap-4 flex-col md:flex-row w-full md:w-auto">
                    <label className="dark:bg-[#0f203a] input input-bordered border-[#357ef0] flex items-center gap-2 w-full md:w-auto">
                        <input
                            type="text"
                            className="grow"
                            placeholder="Search by title, description, or category"
                            value={searchTerm}
                            onChange={handleSearchChange}
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

                    <select
                        className="dark:bg-[#0f203a] select select-bordered border-[#357ef0] w-full md:w-auto"
                        value={selectedCategory}
                        onChange={handleCategoryChange}
                    >
                        <option value="">Select Category</option>
                        <option value="IT">IT</option>
                        <option value="Food">Food</option>
                        <option value="Transport">Transport</option>
                        <option value="Others">Others</option>
                    </select>

                    {/* Added sort dropdown */}
                    <select
                        className="dark:bg-[#0f203a] select select-bordered border-[#357ef0] w-full md:w-auto"
                        value={selectedSortOrder}
                        onChange={handleSortChange}
                    >
                        <option value="">Sort by Price</option>
                        <option value="asc">Price: Low to High</option>
                        <option value="desc">Price: High to Low</option>
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {filteredServices.map((service) => (
                    <FeaturedServiceCard
                        id={service._id}
                        price={service.price}
                        description={service.description}
                        serviceTitle={service.serviceTitle}
                        serviceImage={service.serviceImage}
                        key={service._id}
                    ></FeaturedServiceCard>
                ))}
            </div>
        </div>
    );
};

export default Services;
