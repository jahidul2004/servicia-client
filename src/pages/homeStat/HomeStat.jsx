import axios from "axios";
import { useEffect, useState } from "react";

const HomeStat = () => {
    const [count, setCount] = useState({});

    useEffect(() => {
        axios.get("http://localhost:3000/countData").then((res) => {
            setCount(res.data);
        });
    }, []);

    return (
        <div className="bg-[#357ef0] p-4 py-10 flex flex-col md:flex-row justify-center md:justify-around text-white text-center gap-4 my-10">
            <div className="w-[180px] h-[180px] rounded-full border-2 flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold">{count.userCount}</h1>
                <p className="font-semibold text-xl">users</p>
            </div>
            <div className="w-[180px] h-[180px] rounded-full border-2 flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold">{count.serviceCount}</h1>
                <p className="font-semibold text-xl">services</p>
            </div>
            <div className="w-[180px] h-[180px] rounded-full border-2 flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold">{count.reviewCount}</h1>
                <p className="font-semibold text-xl">reviews</p>
            </div>
        </div>
    );
};

export default HomeStat;
