import { useEffect, useState } from "react";
import FeaturedServiceCard from "./FeaturedServiceCard";
import { use } from "react";
import axios from "axios";

const FeaturedService = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        axios.get("https://servicia-server.vercel.app/services?limit=6").then((res) => {
            setServices(res.data);
        });
    }, []);
    return (
        <div className="mx-4 dark:bg-[#0a1728] dark:text-white">
            <h1 className="text-3xl md:text-4xl font-bold text-center py-10 text-[#357ef0]">
                Featured Services!
                <br />
                -----------------------------------
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {services.map((service) => (
                    <FeaturedServiceCard
                        key={service._id}
                        serviceImage={service.serviceImage}
                        serviceTitle={service.serviceTitle}
                        description={service.description}
                        price={service.price}
                        id={service._id}
                    ></FeaturedServiceCard>
                ))}
            </div>
        </div>
    );
};

export default FeaturedService;
