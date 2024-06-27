import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Tools from "../components/tools/Tools";
import Experience from "../components/experience/Experience";

const ExperiencePage = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Experience/>
      </main>

      <Footer />
    </>
  );
};

export default ExperiencePage;
