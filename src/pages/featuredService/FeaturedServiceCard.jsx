import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const FeaturedServiceCard = ({
    serviceImage,
    serviceTitle,
    description,
    price,
    id,
}) => {
    return (
        <div className="bg-[#357df017] rounded-lg p-4">
            <div className="rounded-lg h-[250px] overflow-hidden">
                <motion.img
                    className="rounded-lg w-full h-full object-cover"
                    src={serviceImage}
                    alt=""
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                />
            </div>
            <div className="mt-4">
                <h1 className="text-2xl font-bold text-[#357ef0]">
                    {serviceTitle}
                </h1>
                <p className="font-semibold my-2">{description}</p>
                <p className="font-bold">Price: {price} $</p>
                <Link
                    to={`/serviceDetails/${id}`}
                    className="btn bg-[#357ef0] border-none shadow-none text-white mt-4"
                >
                    See Details
                </Link>
            </div>
        </div>
    );
};

export default FeaturedServiceCard;
