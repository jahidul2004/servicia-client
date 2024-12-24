import StarRatings from "react-star-ratings";

const ReviewsCard = ({ rating, name, photoURL, reviewText, postedDate }) => {
    return (
        <div className="bg-[#357df015] border-l-8 border-[#357ef0] p-4 relative">
            <div>
                <div className="w-[50px] h-[50px] rounded-full border-2 border-[#357ef0] p-1">
                    <img className="rounded-full" src={photoURL} alt="" />
                </div>
                <h1 className="text-xl font-bold">{name}</h1>
            </div>
            <div>
                <p className="font-semibold my-2">{reviewText}</p>
            </div>
            <div>
                <StarRatings
                    rating={rating}
                    starRatedColor="#357ef0"
                    numberOfStars={5}
                    name="rating"
                    starDimension="30px"
                    starSpacing="5px"
                />
            </div>
            <p className="absolute bottom-2 right-2 font-bold">{postedDate?postedDate:""}</p>
        </div>
    );
};

export default ReviewsCard;
