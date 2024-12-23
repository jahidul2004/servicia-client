import { FaServicestack } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer footer-center p-10">
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
            </aside>
        </footer>
    );
};

export default Footer;
