import Swal from "sweetalert2";

const NewsLetter = () => {
    const handleSubscribe = (e) => {
        e.preventDefault();
        const form = e.target;
        Swal.fire({
            title: "Success!",
            text: "Subscribed successfully",
            icon: "success",
            confirmButtonText: "Close",
            customClass: {
                confirmButton: "bg-[#357ef0] text-white",
            },
        });
        form.reset();
    };
    return (
        <div className="max-w-4xl mx-auto py-10 px-4">
            <div className="bg-white dark:bg-[#0f203a] dark:text-white p-8 rounded-lg shadow-md">
                <h2 className="text-3xl font-bold text-center mb-4 text-[#357ef0]">
                    Subscribe to our Newsletter
                </h2>
                <p className="text-center mb-6">
                    Stay updated with the latest news and offers.
                </p>

                <form
                    onSubmit={handleSubscribe}
                    className="flex flex-col items-center"
                >
                    <input
                        name="email"
                        type="email"
                        className=" dark:bg-[#0a1728] dark:border-none w-full max-w-md p-3 mb-4 border border-gray-300 rounded-xl"
                        placeholder="Enter your email"
                        required
                    />
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    >
                        Subscribe
                    </button>
                </form>
            </div>
        </div>
    );
};

export default NewsLetter;
