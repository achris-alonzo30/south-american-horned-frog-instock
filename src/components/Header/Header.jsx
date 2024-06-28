import "./Header.scss";

import { Link, useLocation } from "react-router-dom";

function Header() {
  const { pathname } = useLocation();

  console.log(pathname);
  return (
    <header className="header">
      <div className="header__content">
      <Link to="/"><img
          src="/src/assets/logo/InStock-Logo.svg"
          alt="InStock-Logo"
          className="header__logo"
        /></Link>
        <div className="header__buttons">
          <Link
            to="/"
            className={`header__button header__button--link header__button--warehouses ${
              pathname === "/" ? "header__button--active" : ""
            }`}
          >
            Warehouses
          </Link>
          <Link
            to="/inventory"
            className={`header__button header__button--link header__button--inventory  ${
              pathname !== "/" ? "header__button--active" : ""
            }`}
          >
            Inventory
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
