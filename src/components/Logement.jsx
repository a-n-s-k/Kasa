import { useParams, Navigate } from "react-router-dom";
import Slide from "./../components/Slide.jsx";
import Tags from "./../components/Tags.jsx";
import Description from "./Description.jsx";
import Host from "./../components/Host.jsx";
import Location from "./../components/Location.jsx";
import Stars from "./../components/Stars.jsx";
import ItemsData from "./../data/logements.json";
import "./../scss/Logement.scss";

export default function Logement () {
  const { ficheId } = useParams();
  const ficheHabitat = ItemsData.find((item) => item.id === ficheId);

  return (  
  <>
    {ficheHabitat ? (
      <div>
        <Slide slides={ficheHabitat.pictures} />
          <div className="logement-content">
            <div className="title-location-tags">
              <Location title={ficheHabitat.title} location={ficheHabitat.location}/>
              <Tags tags={ficheHabitat.tags} />
            </div>
            <div className="host-rates">
              <Host name={ficheHabitat.host.name} picture={ficheHabitat.host.picture} />
              <div className="logement-rates">
                <Stars rating={ficheHabitat.rating} />
              </div>
            </div>
          </div>
          <div className="collapses-logement">
            <Description description={ficheHabitat.description} equipments= {ficheHabitat.equipments} />
          </div>
        </div>
      ) : (
        <Navigate replace to="/erreur404" />
      )}
  </>
  );
}
