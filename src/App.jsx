import React from 'react';
import styles from "./App.module.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Accueil from "./pages/Accueil.jsx";
import Apropos from "./pages/Apropos.jsx";
import Erreur404 from "./pages/Erreur404.jsx";
import Fichelogement from "./pages/Fichelogement.jsx";

export default function App () {

  return (
    <div className={styles.container}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/apropos" element={<Apropos />} />
          <Route path="/logement/:ficheId" element={<Fichelogement />}/>
          <Route path="*" element={<Erreur404 /> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}