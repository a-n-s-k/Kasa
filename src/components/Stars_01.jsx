import coloredStar from "./../assets/images/star_red.png";
import notColoredStar from "./../assets/images/star_gray.png";
import "./../scss/Stars.scss";


export default function Stars ({rating}) {



    const ratingTab = rating;



    return(
      <div className="logement-stars">
 {
            ratingTab.map((rate) => rate ? (
                    <img className="stars" key={rate} src={coloredStar} alt="Evalué" />
                ) : (
                    <img className="stars" key={rate} src={notColoredStar} alt="Non évalué" />
                )
            )
            
        }
      </div>
    )
}