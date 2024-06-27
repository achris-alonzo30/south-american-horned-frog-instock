import "./Header.scss";

import { Link, useLocation } from "react-router-dom";

function Header() {
<<<<<<< HEAD
  const {pathname} = useLocation();

=======
  const { pathname } = useLocation();

  console.log(pathname);
>>>>>>> develop
  return (
    <header className="header">
      <div className="header__content">
        <img
          src="/src/assets/logo/InStock-Logo.svg"
          alt="InStock-Logo"
          className="header__logo"
        />
        <div className="header__buttons">
<<<<<<< HEAD
          <Link to="/" className={`header__button header__button--link ${pathname === "/" ? "header__button--active" : ""}`}>
            Warehouses
          </Link>
          <Link to="/inventory" className={`header__button header__button--link  ${pathname !== "/" ? "header__button--active" : ""}`}>
=======
          <Link
            to="/"
            className={`header__button header__button--link ${
              pathname === "/" ? "header__button--active" : ""
            }`}
          >
            Warehouses
          </Link>
          <Link
            to="/inventory"
            className={`header__button header__button--link  ${
              pathname !== "/" ? "header__button--active" : ""
            }`}
          >
>>>>>>> develop
            Inventory
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;

// import "./Header.scss";
// import { Link } from "react-router-dom";

// function Header() {
//   let active = false;

//   // const onClickHandler = () => {
//   //   active = !active;
//   //   console.log(active);
//   // };

//   return (
//     <header className="header">
//       <div className="header__content">
//         <img
//           src="/src/assets/logo/InStock-Logo.svg"
//           alt="InStock-Logo"
//           className="header__logo"
//         />
//         <div className="header__buttons">
//           <button className="header__button header__button--warehouses header__button--active">
//             Warehouses
//           </button>
//           <Link
//             to="/inventory"
//             className={`header__button header__button--inventory ${
//               active ? "header__button--active" : ""
//             }`}
//           >
//             Inventory
//           </Link>
//           {/* <button onClick={onClickHandler}>Inventory</button> */}
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Header;
