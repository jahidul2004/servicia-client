import { useLoaderData } from "react-router-dom";
import FeaturedServiceCard from "../featuredService/FeaturedServiceCard";
import { Helmet } from "react-helmet";

const Services = () => {
    const data = useLoaderData();

    console.log(data);
    return (
        <div className="mx-4">
            <Helmet>
                <title>Servicia | Services</title>
            </Helmet>
            <div className="flex flex-col items-center mb-5">
                <h1 className="text-3xl font-bold text-center text-[#357ef0] py-4">
                    All Services <br /> --------------------------
                </h1>

                <label className="input input-bordered border-[#357ef0] flex items-center gap-2">
                    <input type="text" className="grow" placeholder="Search" />
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
                {data.map((service) => (
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
