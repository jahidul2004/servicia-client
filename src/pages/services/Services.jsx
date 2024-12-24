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
            <h1 className="text-3xl font-bold text-center text-[#357ef0] py-4">
                All Services <br /> --------------------------
            </h1>

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
