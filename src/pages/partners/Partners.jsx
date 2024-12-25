import { Link } from "react-router-dom";

const Partners = () => {
    return (
        <div className="mx-4 my-10 mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-center py-10 text-[#357ef0]">
                Meet Our Partners <br />
                ---------------------------
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="flex flex-col items-center gap-2 p-4 bg-[#357df017]">
                    <div className="h-[150px] w-full">
                        <Link target="_blank" to={"https://trucklagbe.com/"}>
                            <img
                                className="w-full h-full hover:filter hover:grayscale cursor-pointer"
                                src="https://i.ibb.co.com/wLKFwmW/trucklagbe-logo.jpg"
                                alt=""
                            />
                        </Link>
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold py-2">Truck Lagbe</h1>
                        <p className="font-semibold">
                            Truck Lagbe is the logistics backbone for a lot of
                            Bangladeshi small and large businesses. Some of our
                            clients are enjoying upto 17% reduction in their
                            transportation costs.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-2 p-4 bg-[#357df017]">
                    <div className="h-[150px] w-full">
                        <Link target="_blank" to={"https://bcs.org.bd/"}>
                            <img
                                className="w-full h-full hover:filter hover:grayscale cursor-pointer"
                                src="https://i.ibb.co.com/gtVhXTM/545010741.jpg"
                                alt=""
                            />
                        </Link>
                    </div>
                    <div className="h-[150px] w-full">
                        <h1 className="text-2xl font-bold">
                            Bangladesh Computer Samity
                        </h1>
                        <p className="font-semibold">
                            BCS Computer City IDB, the largest IT market in
                            Bangladesh! If you're a tech enthusiast,
                            entrepreneur, or simply someone in search of the
                            latest.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-2 p-4 bg-[#357df017]">
                    <div className="h-[150px] w-full">
                        <Link target="_blank" to={"https://daraz.com/"}>
                            <img
                                className="w-full h-full hover:filter hover:grayscale cursor-pointer"
                                src="https://i.ibb.co.com/9bmKnD2/Daraz-New-Logo.png"
                                alt=""
                            />
                        </Link>
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold">Daraz BD</h1>
                        <p className="font-semibold">
                            Daraz.com.bd is best online shopping store in
                            Bangladesh that features 10+ million products at
                            affordable prices. As bangaldesh's online shopping
                            is growing rapidly, daraz.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-2 p-4 bg-[#357df017]">
                    <div className="h-[150px] w-full">
                        <Link target="_blank" to={"https://waltonbd.com/"}>
                            <img
                                className="w-full h-full hover:filter hover:grayscale cursor-pointer"
                                src="https://i.ibb.co.com/pZHyCm7/1636857441.jpg"
                                alt=""
                            />
                        </Link>
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold">Walton</h1>
                        <p className="font-semibold">
                            Walton Plaza is the largest selling and distribution
                            network for Walton products around the country.
                            Walton Plaza began its business in 2003.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Partners;
