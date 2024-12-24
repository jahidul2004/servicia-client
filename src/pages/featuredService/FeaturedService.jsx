import { useEffect, useState } from "react";
import FeaturedServiceCard from "./FeaturedServiceCard";
import { use } from "react";
import axios from "axios";

const FeaturedService = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/services?limit=6").then((res) => {
            setServices(res.data);
        });
    }, []);
    return (
        <div className="mx-4">
            <h1 className="text-3xl font-bold text-center py-4 text-[#357ef0]">
                Featured Services!
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {services.map((service) => (
                    <FeaturedServiceCard
                        key={service._id}
                        serviceImage={service.serviceImage}
                        serviceTitle={service.serviceTitle}
                        description={service.description}
                        price={service.price}
                    ></FeaturedServiceCard>
                ))}
            </div>
        </div>
    );
};

export default FeaturedService;
