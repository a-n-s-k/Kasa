import "./../scss/Location.scss";

export default function Locate ({ title, location }) {
  return (
    <div className="title-location">
      <div className="logement-title">
        {title}
      </div>
      <div className="logement-location">
        {location}
      </div>
    </div>
  
  );
}