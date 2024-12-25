import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { RiHomeOfficeLine } from "react-icons/ri";
import { TbCategory, TbWorldWww } from "react-icons/tb";
import { Link, useLoaderData } from "react-router-dom";
import StarRatings from "react-star-ratings";
import AuthContext from "../../context/authContext/AuthContext";
import ReviewsCard from "../reviews/ReviewsCard";
import Swal from "sweetalert2";
import { GrServicePlay } from "react-icons/gr";
import { LuBadgeDollarSign } from "react-icons/lu";
import { Helmet } from "react-helmet";

const ServiceDetails = () => {
    const data = useLoaderData();

    const { user } = useContext(AuthContext);

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        axios.get(`https://servicia-server.vercel.app/reviews/${data._id}`).then((res) => {
            setReviews(res.data);
        });
    }, []);

    const {
        serviceImage,
        serviceTitle,
        description,
        price,
        category,
        companyName,
        websiteURL,
        addedDate,
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

        const email = user?.email;
        const name = user?.displayName;
        const photoURL = user?.photoURL;
        const id = data._id;
        const postedDate = new Date().toLocaleDateString();

        const newReview = {
            id,
            email,
            name,
            photoURL,
            rating,
            review,
            postedDate,
            serviceTitle,
        };

        axios
            .post("https://servicia-server.vercel.app/addReview", newReview, {
                withCredentials: true,
            })
            .then((res) => {
                setReviews((prevReviews) => [newReview, ...prevReviews]);

                Swal.fire({
                    title: "Success!",
                    text: "Review added successfully!",
                    icon: "success",
                    confirmButtonText: "Close",
                    customClass: {
                        confirmButton: "btn bg-[#357ef0] text-white",
                    },
                });
                setReview("");
                setRating(0);
            })
            .catch((err) => {
                console.log(err);
                Swal.fire({
                    title: "Error!",
                    text: "Something went wrong!",
                    icon: "error",
                    confirmButtonText: "Close",
                    customClass: {
                        confirmButton: "btn bg-[#357ef0] text-white",
                    },
                });
            });
    };

    return (
        <div className="mx-4 p-4 rounded-lg">
            <Helmet>
                <title>Servicia | {serviceTitle}</title>
            </Helmet>
            <div className="gap-4">
                <div className="h-[480px] rounded-lg mb-5">
                    <img
                        className="w-full h-full rounded-lg object-cover border-2 border-[#357ef0]"
                        src={serviceImage}
                        alt=""
                    />
                </div>
                <div>
                    <div className="rounded-lg flex flex-col md:flex-row gap-2">
                        <div className="bg-[#357df017] rounded-lg p-4 w-full md:w-[60%] relative">
                            <p className="font-bold flex items-center gap-2">
                                <TbCategory />
                                Category: {category}
                            </p>
                            <h1 className="text-3xl text-[#357ef0] font-bold flex items-center gap-2">
                                <GrServicePlay />
                                {serviceTitle}
                            </h1>
                            <p className="font-semibold py-2">{description}</p>
                            <p className="font-bold text-xl text-[#357ef0] flex items-center gap-2">
                                <LuBadgeDollarSign />
                                Price: {price} $
                            </p>
                            <h1 className="font-bold text-xl mt-3 mb-1 text-[#357ef0]">
                                Company Info
                            </h1>
                            <h1 className="text-xl font-bold flex items-center gap-2">
                                <RiHomeOfficeLine />
                                {companyName}
                            </h1>
                            <p className="font-semibold flex items-center gap-2">
                                <TbWorldWww />
                                <Link
                                    target="_blank"
                                    className="hover:text-[#357ef0]"
                                    to={websiteURL}
                                >
                                    {websiteURL}
                                </Link>
                            </p>

                            <p className="absolute right-2 bottom-2 font-semibold">
                                Added Date:{addedDate && addedDate}
                            </p>
                        </div>
                        <div className="w-full md:w-[40%] bg-[#357df017] rounded-lg p-4">
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
                                        starEmptyColor="#f6cb69"
                                    />
                                </div>
                                <textarea
                                    value={review}
                                    onChange={(e) => setReview(e.target.value)}
                                    className="textarea bg-[#357df017]"
                                    name="review"
                                    placeholder="Write a review"
                                    required
                                ></textarea>
                                <button
                                    type="submit"
                                    className="btn bg-[#357ef0] text-white border-none"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#357df017] rounded-lg p-4 mt-4">
                <div className="flex justify-between items-center">
                    <h1 className="text-xl md:text-2xl font-bold">
                        Reviews of this service
                    </h1>
                    <div className="bg-[#357ef0] text-white p-2 rounded-lg">
                        <h1 className="md:text-xl font-bold">
                            Review Count:{" "}
                            {reviews.length === 0 ? 0 : reviews.length}
                        </h1>
                    </div>
                </div>
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
                    {reviews.map((review) => (
                        <ReviewsCard
                            name={review.name}
                            photoURL={review.photoURL}
                            reviewText={review.review}
                            rating={review.rating}
                            postedDate={review.postedDate}
                            key={review._id}
                        ></ReviewsCard>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;
