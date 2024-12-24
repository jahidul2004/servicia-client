import { Link } from "react-router-dom";

const FeaturedServiceCard = ({
    serviceImage,
    serviceTitle,
    description,
    price,
    id,
}) => {
    return (
        <div className="border-2 rounded-lg p-4">
            <div className="bg-[#f1f1f1] p-2 rounded-lg h-[250px]">
                <img
                    className="rounded-lg w-full h-full object-cover"
                    src={serviceImage}
                    alt=""
                />
            </div>
            <div className="mt-4">
                <h1 className="text-2xl font-bold text-[#357ef0]">{serviceTitle}</h1>
                <p className="font-semibold my-2">{description}</p>
                <p className="font-bold">Price: {price} $</p>
                <Link
                    to={`/serviceDetails/${id}`}
                    className="btn bg-[#357ef0] text-white mt-4"
                >
                    See Details
                </Link>
            </div>
        </div>
    );
};

export default FeaturedServiceCard;
