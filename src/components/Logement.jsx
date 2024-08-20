import { useParams, Navigate } from "react-router-dom";
import Slide from "./../components/Slide.jsx";
import Tags from "./../components/Tags.jsx";
//import Collapse from "./../components/Collapse.jsx";
import Description from "./Description.jsx";
import Host from "./../components/Host.jsx";
import Location from "./../components/Location.jsx";
import Stars from "./../components/Stars.jsx";
import ItemsData from "./../data/logements.json";
import "./../scss/Logement.scss";

export default function Logement () {
  /* Récupère la bonne fiche */
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
          <section className="collapses-logement">
            <Description description={ficheHabitat.description} equipments= {ficheHabitat.equipments} />
          </section>
        </div>
      ) : (
        <Navigate replace to="/erreur404" />
      )}
  </>
  );
}
