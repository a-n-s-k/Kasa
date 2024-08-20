import { useParams, Navigate } from "react-router-dom";
import Slide from "./../components/Slide.jsx";
import Tags from "./../components/Tags.jsx";
import Collapse from "./../components/Collapse.jsx";
import Host from "./../components/Host.jsx";
import Stars from "./../components/Stars.jsx";
import ItemsData from "./../data/logements.json";
import "./../scss/Logement.scss";

export default function Logement () {
  /* Récupère la bonne fiche */
  const { ficheId } = useParams();
  const ficheHabitat = ItemsData.find((item) => item.id === ficheId);

  /* Équipements */
  const equipements = ficheHabitat.equipments.map((equipment, i) => {
    return (
      <ul key={i}>
        <li>{equipment}</li>
      </ul>
    );
  });

  return (
     
  <>
      {ficheHabitat ? (
        <div className="logement-main">
          {/* <Slide slides={ficheHabitat.pictures} /> */}
          <section>
            <div className="logement-header">
              <Slide slides={ficheHabitat.pictures} />
            </div>
            <div className="title-localisation-host">
              <div className="title-localisation">
                <div className="logement-title">
                  {ficheHabitat.title}
                </div>
                <div className="logement-localisation">
                  {ficheHabitat.location}
                </div>
              </div>
              <div className="logement-host">
                  <Host name={ficheHabitat.host.name} picture={ficheHabitat.host.picture} />
              </div>
          
            </div>

            <div className="logement-tags-rates">
              <div className="logement-tags">
                  <Tags tags={ficheHabitat.tags} />
              </div>
              <div className="logement-rates">
                  <Stars score={ficheHabitat.rating} />
              </div>
            </div>
          </section>




          <section className="collapses-logement">
            <div className="collapse-logement">
                <Collapse title="Description">
                  <p>{ficheHabitat.description}</p>
                </Collapse>
            </div>
            <div className="collapse-equipement">
                <Collapse title="Equipement">
                  <p>{equipements}</p>
                </Collapse>
            </div>
        </section>
        </div>
      ) : (
        <Navigate replace to="/erreur404" />
      )}

  </>
  );
}
