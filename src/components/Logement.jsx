import { useParams, Navigate } from "react-router-dom";
import Slide from "./../components/Slide.jsx";
import Tags from "./../components/Tags.jsx";
import Description from "./Description.jsx";
import Equipements from "./Equipements.jsx";
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
      <div className="logement-main">
        <section>
            <Slide slides={ficheHabitat.pictures} />
          <div className="title-location-host">
            <Location title={ficheHabitat.title} location={ficheHabitat.location}/>
            <Host name={ficheHabitat.host.name} picture={ficheHabitat.host.picture} />
          </div>
          <div className="tags-rates">
                <Tags tags={ficheHabitat.tags} />
            <div className="logement-rates">
                <Stars rating={ficheHabitat.rating} />
            </div>
          </div>
        </section>
        <section className="description-equipements">
          <Description description={ficheHabitat.description} />
          <Equipements equipments= {ficheHabitat.equipments} />
        </section>
      </div>
    ) : (
      <Navigate replace to="/erreur404" />
    )}
</>
  );
}
