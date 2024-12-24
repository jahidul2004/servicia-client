import StarRatings from "react-star-ratings";

const ReviewsCard = ({ rating, name, photoURL, reviewText }) => {
    return (
        <div className="bg-[#dbf1fc] border-l-8 border-[#357ef0] p-4">
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
        </div>
    );
};

export default ReviewsCard;
