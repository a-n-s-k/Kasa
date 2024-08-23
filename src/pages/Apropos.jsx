import collapsesData from "./../data/collapses.json";
import Banner from "./../components/Banner.jsx";
import Collapse from "./../components/Collapse.jsx";
import Footer from "./../components/Footer.jsx";
import Header from "./../components/Header.jsx";

export default function Apropos() {

  const listAbout = collapsesData.map((item, index) => (
    <Collapse key={index} title={item.title} children={item.content} />
));

  return (
    <>
      <Header />
      <main className="main">
        <Banner text="" className="banner-about bannerstyleabout" />
          {listAbout}
      </main>
      <Footer />
    </>
  );
}



