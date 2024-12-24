import { Link } from "react-router-dom";

const Partners = () => {
    return (
        <div className="mx-4">
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
                <Link target="_blank" to={"https://akijmotors.com/"}>
                    <img
                        className="w-full hover:filter hover:grayscale cursor-pointer"
                        src="https://i.ibb.co.com/QfKwZp4/download.png"
                        alt=""
                    />
                </Link>
                <Link target="_blank" to={"https://www.bsti.gov.bd/"}>
                    <img
                        className="w-full hover:filter hover:grayscale cursor-pointer"
                        src="https://i.ibb.co.com/p0NDgY6/download.jpg"
                        alt=""
                    />
                </Link>
            </div>
        </div>
    );
};

export default Partners;
