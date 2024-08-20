import Collapse from "./../components/Collapse/Collapse.jsx";
import Host from "./../components/Host/Host.jsx";
import Slide from "./../components/Slide/Slide.jsx";
import Tags from "./../components/Tags/Tags.jsx";
import "./../pages/Logements/Logement.scss";

export default function Fiche({item}) {

  const {
    pictures,
    rating,
    tags,
    description,
    equipments,
    title,
    location,
    host: { name, picture },
  } = item;

console.log(title);
  const [firstName, lastName] = name.split(" ");

  return (
      <main className="housing-main">
        <Slide images={pictures} />
        <section className="housing-header">
          <div className="housing-info">
            <h1 className="housing-title">{title}</h1>
            <p className="housing-location">{location}</p>
            <Tags tags={tags} />
          </div>
          <Host rating={rating} firstName={firstName} lastName={lastName} picture={picture} />
        </section>
        <section className="housing-collapse">
          <Collapse title="Description">
            <p>{description}</p>
          </Collapse>
          <Collapse title="Équipements">
            <ul className="equipments-content">
              {equipments.map((equipment, index) => {
                return <li key={index}>{equipment}</li>;
              })}
            </ul>
          </Collapse>
        </section>
      </main>
  );
}

