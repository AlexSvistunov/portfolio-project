import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import Footer from "../components/footer/Footer";
import Tools from "../components/tools/Tools";

const MainPage = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Hero />
        <Tools/>
      </main>
        
        {/* languages */}
      <Footer />
    </>
  );
};

export default MainPage;
