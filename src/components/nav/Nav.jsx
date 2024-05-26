import { NavLink } from "react-router-dom";
import "./Nav.scss";

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav__link nav__link--active" : "nav__link"
            }
            to={"/"}
          >
            about
          </NavLink>
        </li>

        <li className="nav__item">
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav__link nav__link--active" : "nav__link"
            }
            to={"/projects"}
          >
            projects
          </NavLink>
        </li>

        <li className="nav__item">
          <NavLink className="nav__link" to={"/experience"}>
            experience
          </NavLink>
        </li>

        {/* <li className="nav__item">
          <NavLink className="nav__link" to={"/faq"}>
           faq
          </NavLink>
        </li> */}
      </ul>
    </nav>
  );
};

export default Nav;
