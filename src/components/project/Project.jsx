const Project = ({title, descr, demo, source}) => {
  return (
    <div className="projects__list-item project-item">
      <a className="project-item__website" href="">
        {title}
      </a>
      <p className="project-item__descr">{descr}</p>

      <div className="project-item__links">
        <a
          href={demo}
          className="project-item__link"
          target="_blank"
        >
          Demo
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            style={{
              width: "18px",
              height: "18px",
              fill: "currentcolor",
            }}
          >
            <g data-name="Layer 2">
              <g data-name="external-link">
                <rect width="30" height="30" opacity="0"></rect>
                <path d="M20 11a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1z"></path>
                <path d="M16 5h1.58l-6.29 6.28a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L19 6.42V8a1 1 0 0 0 1 1 1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-4a1 1 0 0 0 0 2z"></path>
              </g>
            </g>
          </svg>
        </a>
        <a
          href={source}
          className="project-item__link"
          target="_blank"
        >
          Source
        </a>
      </div>
    </div>
  );
};

export default Project;
