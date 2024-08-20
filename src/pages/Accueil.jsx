import Banner from "./../components/Banner.jsx";
import Footer from "./../components/Footer.jsx";
import Header from "./../components/Header.jsx";
import ItemsData from "./../data/logements.json";
import Card from "./../components/Card.jsx";
import "./../scss/Accueil.scss";

export default function Accueil() {
  return (
    <>
      <Header />
      <main className="main">
        <Banner className="banner bannerstyle" text="Chez vous, partout et ailleurs" />
        <section className="cards-container">
          {ItemsData.map((item) => (
              <Card key={item.id} item={item} />
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
