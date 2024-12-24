import FeaturedServiceCard from "./FeaturedServiceCard";

const FeaturedService = () => {
    return (
        <div className="mx-4">
            <h1 className="text-3xl font-bold text-center py-4 text-[#357ef0]">Featured Services!</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <FeaturedServiceCard></FeaturedServiceCard>
            </div>
        </div>
    );
};

export default FeaturedService;