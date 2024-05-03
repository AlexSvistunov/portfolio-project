import "./Header.scss";
import Nav from "../nav/Nav";
import Links from "../links/Links";
import ThemeSwitcher from "../theme-switcher/ThemeSwitcher";

const Header = () => {
  return (
    <header className="header">
      <div className="container header__container">
        <div className="header__wrapper">
          <div className="header__block">
            <Nav />
            <Links />
          </div>

          <div className="header__ui">
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
