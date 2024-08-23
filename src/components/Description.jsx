import "./../scss/Description.scss";
import Collapse from "./Collapse.jsx";

export default function Description ({description}) {
  


  return (
        <div className="collapse-description">
            <Collapse title="Description">
                <p className="description-content">{description}</p>
            </Collapse>
        </div>

  );
}