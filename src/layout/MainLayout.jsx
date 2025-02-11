import { Outlet } from "react-router-dom";
import Footer from "../common/Footer";
import NavBar from "../common/NavBar";

const MainLayout = () => {
    return (
        <div className="dark:bg-[#0a1728] dark:text-white">
            {/* Navbar start */}
            <NavBar></NavBar>
            {/* Navbar end */}

            {/* Outlet start */}
            <Outlet></Outlet>
            {/* Outlet end */}

            {/* Footer start */}
            <Footer></Footer>
            {/* Footer end */}
        </div>
    );
};

export default MainLayout;
