import React from 'react';
import "./../scss/Accueil.scss";
import Banner from "./../components/Banner.jsx";
import Footer from "./../components/Footer.jsx";
import Header from "./../components/Header.jsx";
import ItemsData from "./../data/logements.json";
import Card from "./../components/Card.jsx";


export default function Accueil() {
  return (
    <>
      <Header />
      <main className="main">
        <Banner bannerStyle="banner bannerstyle" text="Chez vous, partout et ailleurs" />
        <section className="cards-container">
          {ItemsData.map((item) => (
              <Card key={item.id} coverImage={item.cover} title={item.title} itemId={item.id} />
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
