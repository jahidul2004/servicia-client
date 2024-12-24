import axios from "axios";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/authContext/AuthContext";

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [myReviews, setMyReviews] = useState([]);

    console.log(myReviews);
    useEffect(() => {
        axios
            .get(`http://localhost:3000/myReviews/${user.email}`)
            .then((res) => {
                setMyReviews(res.data);
            });
    }, []);
    return (
        <div className="mx-4">
            <h1 className="text-3xl font-bold text-center py-10">
                My Reviews!
            </h1>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {myReviews.map((review) => (
                    <div
                        key={review._id}
                        className="bg-gray-100 border-l-8 border-[#357ef0] p-4 my-4"
                    >
                        <p className="font-semibold">{review.postedDate}</p>
                        <h3 className="text-xl font-bold">
                            {review.serviceTitle}
                        </h3>
                        <p>{review.review}</p>
                        <div className="flex items-center gap-4 mt-2">
                            <button className="btn bg-[#357ef0] text-white">
                                Edit Review
                            </button>
                            <button className="btn btn-error text-white">
                                Delete Review
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyReviews;
