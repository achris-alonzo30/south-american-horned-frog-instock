import "./Header.scss";
import { Link } from "react-router-dom";

function Header() {
  let active = false;

  const onClickHandler = () => {
    active = !active;
    console.log(active);
  };

  return (
    <header className="header">
      <div className="header__content">
        <img
          src="/src/assets/logo/InStock-Logo.svg"
          alt="InStock-Logo"
          className="header__logo"
        />
        <div className="header__buttons">
          <button className="header__button header__button--warehouses header__button--active">
            Warehouses
          </button>
          <Link to="/inventory">
            <button
              className={`header__button header__button--inventory ${
                active ? "header__button--active" : ""
              }`}
              // "header__button header__button--inventory "
              onClick={onClickHandler}
            >
              Inventory
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
