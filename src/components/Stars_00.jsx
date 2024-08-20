import coloredStar from "./../assets/images/star_red.png";
import notColoredStar from "./../assets/images/star_gray.png";
import "./../scss/Stars.scss";

// creation array de 5 elements de valeurs undefined
const starArray = Array(5).fill();

const FilledStar = () => <img src={coloredStar} className="stars" alt="filled-star" />;

const EmptyStar = () => <img src={notColoredStar} className="stars" alt="empty-star" />;

const Star = ({ index, rating }) =>
  index < rating ? <FilledStar key={index} /> : <EmptyStar key={index} />;

export default function Stars({ rating }) {
  return starArray.map((_, index) => <Star key={index} index={index} rating={rating} />);
}