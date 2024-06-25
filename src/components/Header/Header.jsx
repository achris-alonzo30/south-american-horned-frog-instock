import "./Header.scss";

function Header() {
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
          <button className="header__button header__button--inventory">
            Inventory
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
