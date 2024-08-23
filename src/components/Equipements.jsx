import "./../scss/Equipements.scss";
import Collapse from "./Collapse.jsx";


export default function Description ({ equipments}) {
  
  const equipements = equipments.map((equipment, index) => {
    return (
      <ul key={index}>
        <li>{equipment}</li>
      </ul>
    );
  });

  return (
        <div className="collapse-equipement">
            <Collapse title="Equipement">
                <div className="equipement-content">{equipements}</div>
            </Collapse>
        </div> 
  );
}





