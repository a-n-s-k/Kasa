import "./../scss/Description.scss";
import Collapse from "./Collapse.jsx";

export default function Description ({ description, equipments}) {
  
  /* Équipements */
  const equipements = equipments.map((equipment, index) => {
    return (
      <ul key={index}>
        <li>{equipment}</li>
      </ul>
    );
  });

  return (
    <>
        <div className="collapse-description">
            <Collapse title="Description">
                <p className="description-content">{description}</p>
            </Collapse>
        </div>
        <div className="collapse-equipement">
            <Collapse title="Equipement">
                <div className="equipement-content">{equipements}</div>
            </Collapse>
        </div>
    </>  
  );
}