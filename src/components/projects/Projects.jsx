import Project from "../project/Project";
import "./Projects.scss";

const Projects = () => {
  return (
    <section className="projects">
      <div className="container">
        <h1 className="projects__title">Projects</h1>
        <div className="projects__list">
          <Project
            title="Dproxy"
            descr="A website of mobile proxy"
            demo="https://alexsvistunov.github.io/dproxy/"
            source="https://github.com/AlexSvistunov/dproxy"
          />

          <Project
            title="Dproxy v2.0"
            descr="A website of mobile proxy (re-design version)"
            demo="https://dproxy.co/ru/"
            source="https://github.com/AlexSvistunov/dproxy-v2"
          />

          <Project
            title="HabitHUB"
            descr="A task app for everyday usage with a calendar"
            demo="https://github.com/AlexSvistunov/task-daily-app-full-w-backend"
            source="https://github.com/AlexSvistunov/task-daily-app-full-w-backend"
          />

          <Project
            title="Alias app"
            descr="Alias game"
            demo="https://alias-app-five.vercel.app/"
            source="https://github.com/AlexSvistunov/alias-app"
          />

          <Project
            title="MastersHUB"
            descr="An online-service for finding a master/studio/service, making appointments, client management "
            demo="https://masters-hub.vercel.app/"
            source="https://github.com/AlexSvistunov/masters-hub"
          />

          <Project
            title="Portfolio project"
            descr="The portfolio website that you're on right now"
            demo="https://alex-svistunov.vercel.app/"
            source="https://github.com/AlexSvistunov/portfolio-project"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
