import "./Header.scss";

import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const { pathname } = useLocation();

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
              pathname.includes("warehouse") ? "header__button--active" : ""
            }`}
          >
            Warehouses
          </Link>
          <Link
            to="/inventory"
            className={`header__button header__button--link header__button--inventory  ${
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
