import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { RiHomeOfficeLine } from "react-icons/ri";
import { TbWorldWww } from "react-icons/tb";
import { useLoaderData } from "react-router-dom";
import StarRatings from "react-star-ratings";

const ServiceDetails = () => {
    const data = useLoaderData();
    const {
        serviceImage,
        serviceTitle,
        description,
        price,
        category,
        companyName,
        websiteURL,
    } = data;

    const [rating, setRating] = useState(0);
    const [review, setReview] = useState("");

    // Handle rating change
    const changeRating = (newRating) => {
        setRating(newRating);
    };

    // Handle review submission
    const handleReview = (e) => {
        e.preventDefault();
        console.log("Review Submitted");
        console.log("Rating:", rating);
        console.log("Review Text:", review);
    };

    return (
        <div className="mx-4">
            <div className="border-2 flex flex-col md:flex-row gap-4 p-4 rounded-lg">
                <div className="md:w-1/2 w-full h-[480px] border-2 rounded-lg">
                    <img
                        className="w-full h-full rounded-lg object-cover p-2"
                        src={serviceImage}
                        alt=""
                    />
                </div>
                <div className="md:w-1/2 w-full">
                    <div className="rounded-lg flex flex-col md:flex-row gap-2">
                        <div className="border-2 rounded-lg p-4 w-full md:w-[60%]">
                            <p className="font-bold">Category: {category}</p>
                            <h1 className="text-2xl font-bold">
                                {serviceTitle}
                            </h1>
                            <p className="font-semibold py-2">{description}</p>
                            <p className="font-bold">Price: {price} $</p>
                        </div>
                        <div className="border-2 rounded-lg p-4 w-full md:w-[40%]">
                            <h1 className="text-xl font-bold flex items-center gap-2">
                                <RiHomeOfficeLine />
                                {companyName}
                            </h1>
                            <p className="font-semibold flex items-center gap-2">
                                <TbWorldWww />
                                {websiteURL}
                            </p>
                        </div>
                    </div>
                    <div className="border-2 rounded-lg p-4 mt-4">
                        <form
                            onSubmit={handleReview}
                            className="flex flex-col gap-4"
                        >
                            <h1 className="text-xl font-bold flex items-center gap-2">
                                <FaStar />
                                Review for this service
                            </h1>
                            <div>
                                <StarRatings
                                    rating={rating}
                                    starRatedColor="#357ef0"
                                    changeRating={changeRating}
                                    numberOfStars={5}
                                    name="rating"
                                    starDimension="30px"
                                    starSpacing="5px"
                                />
                            </div>
                            <textarea
                                value={review}
                                onChange={(e) => setReview(e.target.value)}
                                className="textarea textarea-bordered"
                                name="review"
                                placeholder="Write a review"
                            ></textarea>
                            <button
                                type="submit"
                                className="btn bg-[#357ef0] text-white"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;
