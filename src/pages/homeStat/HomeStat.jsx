const HomeStat = () => {
    return (
        <div className="bg-[#357ef0] p-4 py-10 flex flex-col md:flex-row justify-center md:justify-around text-white text-center gap-4 my-10">
            <div className="w-[180px] h-[180px] rounded-full border flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold">510+</h1>
                <p className="font-semibold text-xl">users</p>
            </div>
            <div className="w-[180px] h-[180px] rounded-full border flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold">5120+</h1>
                <p className="font-semibold text-xl">services</p>
            </div>
            <div className="w-[180px] h-[180px] rounded-full border flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold">310+</h1>
                <p className="font-semibold text-xl">reviews</p>
            </div>
        </div>
    );
};

export default HomeStat;
