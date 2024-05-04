import "./Projects.scss";

const Projects = () => {
  return (
    <section className="projects">
      <div className="container">
        <ul className="projects__list">
          <li className="projects__item project-item">
            <div className="project-item__info">
              <h3 className="project-item__post">
                Front-end Software Engineer
              </h3>
              <span className="project-item__type">Contract</span>
              <div className="project-item__date">
                <span>Jan 2020</span>
                <span>Present</span>
              </div>

              <div className="project-item__location">Manaus, AM - Brazil</div>
            </div>
            <div className="project-item__text">
              <header className="project-item__header">
                <span className="project-item__name">Company Name</span>
              </header>

              <div className="project-item__texts">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>

                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>
          </li>

          <li className="projects__item project-item">
            <div className="project-item__info">
              <h3 className="project-item__post">
                Front-end Software Engineer
              </h3>
              <span className="project-item__type">Contract</span>
              <div className="project-item__date">
                <span>Jan 2020</span>
                <span>Present</span>
              </div>

              <div className="project-item__location">Manaus, AM - Brazil</div>
            </div>
            <div className="project-item__text">
              <header className="project-item__header">
                <span className="project-item__name">Company Name</span>
              </header>

              <div className="project-item__texts">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>

                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

// отдельный компонент item

export default Projects;
