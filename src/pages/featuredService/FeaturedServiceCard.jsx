const FeaturedServiceCard = () => {
    return (
        <div className="border-2 rounded-lg p-4">
            <div className="bg-[#f1f1f1] p-2 rounded-lg">
                <img
                    className="rounded-lg"
                    src="https://i.ibb.co.com/Gp5csvM/8-FC6545-D865-C150668-D5-A2-A02-C13-C732.webp"
                    alt=""
                />
            </div>
            <div className="mt-4">
                <h1 className="text-2xl font-bold">Title Here</h1>
                <p className="font-semibold my-2">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Optio, quisquam.
                </p>
                <p className="font-bold">Price: 5000 $</p>
                <button className="btn bg-[#357ef0] text-white mt-4">
                    See Details
                </button>
            </div>
        </div>
    );
};

export default FeaturedServiceCard;
