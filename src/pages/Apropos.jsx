import collapsesData from "./../data/collapses.json";
import Banner from "./../components/Banner.jsx";
import Collapse from "./../components/Collapse.jsx";
import Footer from "./../components/Footer.jsx";
import Header from "./../components/Header.jsx";

export default function Apropos() {

  return (
    <>
      <Header />
      <main className="main">
        <Banner text="" className="banner bannerstyleabout" />
        <section className="collapses-container">
          {collapsesData.map((collapse) => (
            <Collapse title={collapse.title} key={collapse.title}>
              <p>{collapse.content}</p>
            </Collapse>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}

