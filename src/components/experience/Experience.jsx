import { useEffect } from "react";
import "./Experience.scss";

const Experience = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="experience">
      <div className="container">
        <ul className="experience__list">
          <li className="experience__item experience-item">
            <div className="experience-item__info">
              <h3 className="experience-item__post">
                Front-end Software Engineer
              </h3>
              <span className="experience-item__type">Contract</span>
              <div className="experience-item__date">
                <span>Jan 2020</span>
                <span>Present</span>
              </div>

              <div className="experience-item__location">
                Manaus, AM - Brazil
              </div>
            </div>
            <div className="experience-item__text">
              <header className="experience-item__header">
                <span className="experience-item__name">Company Name</span>
              </header>

              <div className="experience-item__texts">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
          </li>

          {/* <li className="experience__item experience-item">
            <div className="experience-item__info">
              <h3 className="experience-item__post">
                Front-end Software Engineer
              </h3>
              <span className="experience-item__type">Contract</span>
              <div className="experience-item__date">
                <span>Jan 2020</span>
                <span>Present</span>
              </div>

              <div className="experience-item__location">
                Manaus, AM - Brazil
              </div>
            </div>
            <div className="experience-item__text">
              <header className="experience-item__header">
                <span className="experience-item__name">Company Name</span>
              </header>

              <div className="experience-item__texts">
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
          </li> */}

          <li className="experience__item experience-item">
            <div className="experience-item__info">
              <h3 className="experience-item__post">
                Front-end Software Engineer
              </h3>
              <span className="experience-item__type">Contract</span>
              <div className="experience-item__date">
                <span>Jan 2020</span>
                <span>Present</span>
              </div>

              <div className="experience-item__location">
                Manaus, AM - Brazil
              </div>
            </div>
            <div className="experience-item__text">
              <header className="experience-item__header">
                <span className="experience-item__name">Company Name</span>
              </header>

              <div className="experience-item__texts">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
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

export default Experience;
