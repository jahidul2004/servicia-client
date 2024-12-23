import Footer from "../common/Footer";
import NavBar from "../common/NavBar";

const MainLayout = () => {
    return (
        <div>
            {/* Navbar start */}
            <NavBar></NavBar>
            {/* Navbar end */}

            {/* Footer start */}
            <Footer></Footer>
            {/* Footer end */}
        </div>
    );
};

export default MainLayout;
