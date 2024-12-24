import { Link } from "react-router-dom";

const Partners = () => {
    return (
        <div className="mx-4 my-10 mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-center py-10 text-[#357ef0]">
                Meet Our Partners <br />
                ---------------------------
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-4 justify-center items-center gap-4">
                <Link target="_blank" to={"https://trucklagbe.com/"}>
                    <img
                        className="w-full hover:filter hover:grayscale cursor-pointer"
                        src="https://i.ibb.co.com/Z1HYgNg/download.png"
                        alt=""
                    />
                </Link>
                <Link target="_blank" to={"https://bcs.org.bd/"}>
                    <img
                        className="w-full hover:filter hover:grayscale cursor-pointer"
                        src="https://i.ibb.co.com/ZGXscPY/download.png"
                        alt=""
                    />
                </Link>
                <Link target="_blank" to={"https://daraz.com/"}>
                    <img
                        className="w-full hover:filter hover:grayscale cursor-pointer"
                        src="https://i.ibb.co.com/TLvpTLb/download.png"
                        alt=""
                    />
                </Link>
                <Link target="_blank" to={"https://waltonbd.com/"}>
                    <img
                        className="w-full hover:filter hover:grayscale cursor-pointer"
                        src="https://i.ibb.co.com/sHRnggg/audd4z9mrhsgjf7o7wi7.webp"
                        alt=""
                    />
                </Link>
            </div>
        </div>
    );
};

export default Partners;
