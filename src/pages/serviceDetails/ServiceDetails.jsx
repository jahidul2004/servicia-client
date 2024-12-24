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
import { IoDocumentTextOutline } from "react-icons/io5";
import { LuBadgeDollarSign } from "react-icons/lu";

const ServiceDetails = () => {
    const data = useLoaderData();

    const { user } = useContext(AuthContext);

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3000/reviews/${data._id}`).then((res) => {
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

        const newReview = {
            id,
            email,
            name,
            photoURL,
            rating,
            review,
        };

        axios
            .post("http://localhost:3000/addReview", newReview)
            .then((res) => {
                console.log(res.data);
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
        <div className="mx-4 border-2 p-4 rounded-lg">
            <div className="flex flex-col md:flex-row gap-4">
                <div className="md:w-1/2 w-full h-[480px] rounded-lg">
                    <img
                        className="w-full h-full rounded-lg object-cover"
                        src={serviceImage}
                        alt=""
                    />
                </div>
                <div className="md:w-1/2 w-full">
                    <div className="rounded-lg flex flex-col md:flex-row gap-2">
                        <div className="bg-[#f1f1f1a1] rounded-lg p-4 w-full md:w-[60%]">
                            <p className="font-bold flex items-center gap-2">
                                <TbCategory />
                                Category: {category}
                            </p>
                            <h1 className="text-3xl font-bold flex items-center gap-2">
                                <GrServicePlay />
                                {serviceTitle}
                            </h1>
                            <p className="font-semibold py-2">{description}</p>
                            <p className="font-bold flex items-center gap-2">
                                <LuBadgeDollarSign />
                                Price: {price} $
                            </p>
                        </div>
                        <div className="bg-[#f1f1f1a1] rounded-lg p-4 w-full md:w-[40%]">
                            <h1 className="text-xl font-bold mb-2">
                                Company Information
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
                        </div>
                    </div>
                    <div className="bg-[#f1f1f1a1] rounded-lg p-4 mt-4">
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
                                className="textarea textarea-bordered bg-transparent"
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

            <div className="bg-[#f1f1f1a1] rounded-lg p-4 mt-4">
                <h1 className="text-2xl font-bold">Reviews of this service</h1>
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
                    {reviews.map((review) => (
                        <ReviewsCard
                            name={review.name}
                            photoURL={review.photoURL}
                            reviewText={review.review}
                            rating={review.rating}
                            key={review._id}
                        ></ReviewsCard>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;
