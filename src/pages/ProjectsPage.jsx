import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Projects from "../components/projects/Projects";
import Tools from "../components/tools/Tools";

const ProjectsPage = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Projects/>
      </main>

      <Footer />
    </>
  );
};

export default ProjectsPage;
