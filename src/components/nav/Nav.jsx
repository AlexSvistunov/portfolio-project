import "./Nav.scss";

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <a className="nav__link" href="">
            about
          </a>
        </li>

        <li className="nav__item">
          <a className="nav__link" href="">
            projects
          </a>
        </li>

        <li className="nav__item">
          <a className="nav__link" href="">
            experience
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
