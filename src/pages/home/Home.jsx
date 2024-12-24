import { Helmet } from "react-helmet";
import FeaturedService from "../featuredService/FeaturedService";
import Banner from "./Banner";
import Partners from "../partners/Partners";
import HomeStat from "../homeStat/HomeStat";
import LatestBlog from "../latestBlog/LatestBlog";
import NewsLetter from "../newsLetter/NewsLetter";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Servicia|Home</title>
            </Helmet>
            {/* Banner start */}
            <Banner></Banner>
            {/* Banner end */}

            {/* Featured services */}
            <FeaturedService></FeaturedService>
            {/* Featured services end */}

            {/* Partners section start */}
            <Partners></Partners>
            {/* Partners section end */}

            {/* Home stat */}
            <HomeStat></HomeStat>
            {/* Home stat end */}

            {/* Latest Blog section start */}
            <LatestBlog></LatestBlog>
            {/* Latest Blog section end */}

            {/* Newsletter */}
            <NewsLetter></NewsLetter>
            {/* Newsletter end */}
        </div>
    );
};

export default Home;
