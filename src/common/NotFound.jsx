const NotFound = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="text-center">
                <h1 className="text-8xl font-bold text-[#357ef0]">404</h1>
                <p className="text-2xl mt-4 text-gray-700">
                    Oops! Page not found.
                </p>
                <p className="text-lg mt-2 text-gray-500">
                    Sorry, the page you're looking for doesn't exist.
                </p>
                <div className="mt-6">
                    <a
                        href="/"
                        className="inline-block px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
                    >
                        Go back to Home
                    </a>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
