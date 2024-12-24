import FeaturedService from "../featuredService/FeaturedService";
import Banner from "./Banner";

const Home = () => {
    return (
        <div>
            {/* Banner start */}
            <Banner></Banner>
            {/* Banner end */}

            {/* Featured services */}
            <FeaturedService></FeaturedService>
            {/* Featured services end */}
        </div>
    );
};

export default Home;
