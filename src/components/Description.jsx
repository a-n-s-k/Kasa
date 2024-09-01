import "./../scss/Description.scss";
import Collapse from "./Collapse.jsx";

export default function Description ({description, equipments}) {
  
  return (
    <>
    <div className="description-equipements">

        <div className="collapses-container">
            <Collapse title="Description">
              <p> {description}</p>
            </Collapse>
        </div>

        <div className="collapses-container">
          <Collapse title="Equipement">
            {equipments.map((equipment, index) => {
              return ( <ul key={index}>
                  <li>{equipment}</li>
                </ul>);
            })}
          </Collapse>      
        </div>

      </div>
    </>  
  );
}