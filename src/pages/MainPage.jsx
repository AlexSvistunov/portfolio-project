import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import Footer from "../components/footer/Footer";

const MainPage = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Hero />
      </main>

      <Footer />
    </>
  );
};

export default MainPage;
