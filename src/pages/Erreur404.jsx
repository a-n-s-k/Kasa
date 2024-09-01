import "./../scss/Erreur.scss";
import { Link } from "react-router-dom";
import Header from "./../components/Header.jsx";
import Footer from "./../components/Footer.jsx";


export default function Erreur404 () {
  return (
    <>
      <Header />
      <main className="main">
        <div className="error-container">
          <div className="error-title">
            <h1 >404</h1>
          </div>
          <p className="error-msg"> Oups! La page que vous demandez n'existe pas.</p>
        </div>
        <div className="back-link">
          <Link to="/">
            Retourner sur la page d'accueil
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}


