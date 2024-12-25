import { BsThreads } from "react-icons/bs";
import { FaFacebook, FaGithub, FaServicestack } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer bg-[#357df017] footer-center p-10">
            <aside>
                <FaServicestack className="text-5xl text-[#357ef0]" />
                <p className="font-bold text-lg">
                    <span className="text-2xl">Servicia</span>
                    <br />A service review platform
                </p>
                <p>
                    Copyright © {new Date().getFullYear()} - All right reserved
                    by Servicia
                </p>
                <div className="flex gap-4 mt-4 text-2xl text-[#357ef0]">
                    <Link to={"/"}>
                        <FaFacebook />
                    </Link>
                    <Link to={"/"}>
                        <FaGithub />
                    </Link>
                    <Link to={"/"}>
                        <BsThreads />
                    </Link>
                </div>
            </aside>
        </footer>
    );
};

export default Footer;
