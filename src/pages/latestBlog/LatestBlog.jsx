import { Link } from "react-router-dom";

const LatestBlog = () => {
    return (
        <div className="mx-4">
            <h1 className="text-3xl md:text-4xl font-bold text-center text-[#357ef0]">
                Latest Blogs <br />
                -------------------------
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-10">
                <div className="bg-[#f1f1f1] dark:bg-[#0f203a] dark:text-white p-4">
                    <img
                        className="w-full h-[200px] object-cover"
                        src="https://i.ibb.co.com/sWzLQ6T/Tesla-Logo-Hero.webp"
                        alt=""
                    />
                    <h1 className="text-xl font-bold my-2">
                        Colaborate with Tesla
                    </h1>
                    <p className="text-sm text-gray-600">
                        We are happy to announce that we are now collaborating
                        with Tesla. We are now providing Tesla's services in our
                        platform.
                    </p>
                    <Link
                        to={"https://www.tesla.com/blog"}
                        className="border-none shadow-none btn bg-[#357ef0] text-white mt-2 rounded-none"
                    >
                        Read More
                    </Link>
                </div>
                <div className="bg-[#f1f1f1] dark:bg-[#0f203a] dark:text-white p-4">
                    <img
                        className="w-full h-[200px] object-cover"
                        src="https://i.ibb.co.com/8cZ4F0J/Walton1465127503.webp"
                        alt=""
                    />
                    <h1 className="text-xl font-bold my-2">
                        Walton Contest with Servicia
                    </h1>
                    <p className="text-sm text-gray-600">
                        Walton is now providing a contest with Servicia.
                        Participate in the contest and win exciting prizes from
                        Walton.
                    </p>
                    <Link
                        to={"https://waltonplaza.com.bd/about-us"}
                        className="border-none shadow-none btn bg-[#357ef0] text-white mt-2 rounded-none"
                    >
                        Read More
                    </Link>
                </div>
                <div className="bg-[#f1f1f1] dark:bg-[#0f203a] dark:text-white p-4">
                    <img
                        className="w-full h-[200px] object-cover"
                        src="https://i.ibb.co.com/0Mtnwpv/download.jpg"
                        alt=""
                    />
                    <h1 className="text-xl font-bold my-2">
                        Truck Lagbe Top Reviews
                    </h1>
                    <p className="text-sm text-gray-600">
                        Truck Lagbe is top rated service provider in our
                        platform. We are happy to announce that now
                        collaborating with Truck Lagbe.
                    </p>
                    <Link
                        to={"https://blog.trucklagbe.com/bn"}
                        className="border-none shadow-none btn bg-[#357ef0] text-white mt-2 rounded-none"
                    >
                        Read More
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LatestBlog;
