import "./Header.scss";

import { NavLink, Link, useLocation } from "react-router-dom";

function Header() {
  const { pathname } = useLocation();

  console.log(pathname);
  return (
    <header className="header">
      <div className="header__content">
      <NavLink to="/"><img
          src="/src/assets/logo/InStock-Logo.svg"
          alt="InStock-Logo"
          className="header__logo"
        /></NavLink>
        <div className="header__buttons">
          <Link
            to="/"
            className={`header__button header__button--link ${
              pathname === "/" || pathname.includes("warehouse") ? "header__button--active" : ""
            }`}
          >
            Warehouses
          </Link>
          <Link
            to="/inventory"
            className={`header__button header__button--link  ${
              pathname.includes("inventory") ? "header__button--active" : ""
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
