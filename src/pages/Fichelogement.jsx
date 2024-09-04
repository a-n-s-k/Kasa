import React from 'react';
import { useParams } from "react-router-dom";
import Footer from "./../components/Footer.jsx";
import Header from "./../components/Header.jsx";
import Logement from "./../components/Logement.jsx";
import Erreur404 from "./../pages/Erreur404.jsx";
import ItemsData from "./../data/logements.json";



export default function Fichelogement () {
    const { ficheId } = useParams();
    const ficheHabitat = ItemsData.find((item) => item.id === ficheId);

    if (!ficheHabitat) {
      return <Erreur404 />;
    }

  return (
    <>
        <Header />
        <main className="main">
            <section className="logement-main">
                  <Logement />
            </section>
        </main>
        <Footer />
    </>
  );
}