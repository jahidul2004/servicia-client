const AddService = () => {
    return (
        <div className="card bg-base-100 w-full max-w-2xl shrink-0 shadow-2xl mx-auto my-10">
            <h1 className="text-3xl font-bold text-center py-4 text-[#357ef0]">
                Add a service!
            </h1>
            <form className="card-body grid grid-cols-2">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Service Image</span>
                    </label>
                    <input
                        type="url"
                        placeholder="Enter image URL"
                        className="input input-bordered"
                        required
                    />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Service Title</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Enter service title"
                        className="input input-bordered"
                        required
                    />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Company Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Enter company name"
                        className="input input-bordered"
                        required
                    />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Website</span>
                    </label>
                    <input
                        type="url"
                        placeholder="Enter website URL"
                        className="input input-bordered"
                        required
                    />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Category</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Enter category"
                        className="input input-bordered"
                        required
                    />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input
                        type="number"
                        placeholder="Enter price"
                        className="input input-bordered"
                        required
                    />
                </div>

                <div className="form-control md:col-span-2">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea
                        placeholder="Enter Description"
                        className="textarea textarea-bordered"
                        rows={4}
                        required
                    ></textarea>
                </div>

                <div className="form-control mt-6 md:col-span-2">
                    <button className="btn bg-[#357ef0] text-white">
                        Add Now
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddService;
