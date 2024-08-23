import "./../scss/Stars.scss";
import coloredStar from "./../assets/images/star_red.png";
import notColoredStar from "./../assets/images/star_gray.png";


export default function Stars({ rating }) {

    const starsArray = [1, 2, 3, 4, 5];

    const ColoredStar = () => <img src={coloredStar} className="stars" alt="PinkStar" />;
    const NotColoredStar = () => <img src={notColoredStar} className="stars" alt="GreyStar" />;

    const Star = ({ rating, index }) => index < rating ? <ColoredStar key={index} /> : <NotColoredStar key={index} />;

    return (
        <div className="logement-stars">
            {starsArray.map((index) => <Star key={index} index={index} rating={rating} />)}
        </div>
    )
}