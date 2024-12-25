import axios from "axios";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/authContext/AuthContext";
import Swal from "sweetalert2";
import StarRatings from "react-star-ratings";
import { Helmet } from "react-helmet";

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [myReviews, setMyReviews] = useState([]);
    const [selectedReview, setSelectedReview] = useState(null);
    const [editedReview, setEditedReview] = useState("");
    const [editedRating, setEditedRating] = useState(0);

    useEffect(() => {
        axios
            .get(`http://localhost:3000/myReviews/${user.email}`)
            .then((res) => {
                setMyReviews(res.data);
            });
    }, [user.email]);

    const handleDeleteReview = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this review!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                axios
                    .delete(
                        `http://localhost:3000/deleteReview/${user.email}/${id}`
                    )
                    .then((res) => {
                        setMyReviews((prevReviews) =>
                            prevReviews.filter((review) => review.id !== id)
                        );
                        Swal.fire({
                            title: "Success!",
                            text: "Review deleted successfully",
                            icon: "success",
                            confirmButtonText: "Close",
                            customClass: {
                                confirmButton: "bg-[#357ef0] text-white",
                            },
                        });
                    })
                    .catch((error) => {
                        Swal.fire({
                            title: "Error!",
                            text: error.message,
                            icon: "error",
                            confirmButtonText: "Close",
                            customClass: {
                                confirmButton: "bg-error text-white",
                            },
                        });
                    });
            }
        });
    };

    const handleEditReview = () => {
        axios
            .put(`http://localhost:3000/updateReview/${selectedReview._id}`, {
                review: editedReview,
                rating: editedRating,
            })
            .then((res) => {
                setMyReviews((prevReviews) =>
                    prevReviews.map((review) =>
                        review._id === selectedReview._id
                            ? {
                                  ...review,
                                  review: editedReview,
                                  rating: editedRating,
                              }
                            : review
                    )
                );
                setSelectedReview(null);
                setEditedReview("");
                setEditedRating(0);
                Swal.fire({
                    title: "Success!",
                    text: "Review updated successfully",
                    icon: "success",
                    confirmButtonText: "Close",
                    customClass: {
                        confirmButton: "bg-[#357ef0] text-white",
                    },
                });
            })
            .catch((error) => {
                Swal.fire({
                    title: "Error!",
                    text: error.message,
                    icon: "error",
                    confirmButtonText: "Close",
                    customClass: {
                        confirmButton: "bg-error text-white",
                    },
                });
            });
    };

    return (
        <div className="mx-4">
            <Helmet>
                <title>Servicia|My Reviews</title>
            </Helmet>
            <h1 className="text-3xl font-bold text-center py-10 text-[#357ef0]">
                My Reviews!
                <br />
                --------------------------
            </h1>

            <div className="flex flex-col gap-2">
                {myReviews.map((review) => (
                    <div
                        key={review._id}
                        className="bg-[#357df017] p-8 my-4 flex flex-col md:flex-row gap-4 justify-center items-center"
                    >
                        <div className="w-full md:w-1/3">
                            <p className="font-semibold">{review.postedDate}</p>
                            <h3 className="text-xl font-bold">
                                {review.serviceTitle}
                            </h3>
                            <p className="font-semibold">{review.review}</p>
                        </div>
                        <div className="w-full md:w-1/3">
                            <StarRatings
                                rating={review.rating}
                                starRatedColor="#357ef0"
                                numberOfStars={5}
                                name="rating"
                                starDimension="30px"
                                starSpacing="5px"
                            />
                        </div>
                        <div className="flex items-center gap-4 mt-2 w-full md:w-1/3">
                            <button
                                onClick={() => {
                                    setSelectedReview(review);
                                    setEditedReview(review.review);
                                    setEditedRating(review.rating);
                                }}
                                className="btn bg-[#357ef0] text-white"
                            >
                                Edit Review
                            </button>
                            <button
                                onClick={() => handleDeleteReview(review.id)}
                                className="btn btn-error text-white"
                            >
                                Delete Review
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal start from here */}
            {selectedReview && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-8 rounded-lg w-96">
                        <h2 className="text-xl font-bold mb-4">
                            Edit Your Review
                        </h2>
                        <textarea
                            value={editedReview}
                            onChange={(e) => setEditedReview(e.target.value)}
                            className="textarea textarea-bordered w-full h-32 mb-4"
                        ></textarea>
                        <div className="mb-4">
                            <h3 className="text-lg font-semibold mb-2">
                                Edit Rating:
                            </h3>
                            <StarRatings
                                rating={editedRating}
                                starRatedColor="#ffd700"
                                changeRating={(newRating) =>
                                    setEditedRating(newRating)
                                }
                                numberOfStars={5}
                                name="rating"
                                starDimension="30px"
                                starSpacing="5px"
                            />
                        </div>
                        <div className="flex justify-end gap-4">
                            <button
                                onClick={() => {
                                    setSelectedReview(null);
                                    setEditedReview("");
                                    setEditedRating(0);
                                }}
                                className="btn btn-error text-white"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleEditReview}
                                className="btn bg-[#357ef0] text-white"
                            >
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyReviews;
