import coloredStar from "./../assets/images/star_red.png";
import notColoredStar from "./../assets/images/star_gray.png";
import "./../scss/Stars.scss";

const starsArray = [1, 2, 3, 4, 5];

const ColoredStar = () => <img src={coloredStar} className="stars" alt="PinkStar" />;

const NotColoredStar = () => <img src={notColoredStar} className="stars" alt="GreyStar" />;

const Star = ({ index, rating }) =>
  index < rating ? <ColoredStar key={index} /> : <NotColoredStar key={index} />;

export default function Stars({ rating }) {
    return (
        <div className="logement-stars">
            {
            starsArray.map((index) => <Star index={index} rating={rating} />)
            }
        </div>
    )
}