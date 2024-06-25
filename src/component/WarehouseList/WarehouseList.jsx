import "./WarehouseList.scss";

import { Link } from "react-router-dom";

import editIcon from "../../assets/icons/edit-24px.svg";
import searchIcon from "../../assets/icons/search-24px.svg";
import trashIcon from "../../assets/icons/delete_outline-24px.svg";
import chevronRight from "../../assets/icons/chevron_right-24px.svg";
import sortIcon from "../../assets/icons/sort-24px.svg";

export const WarehouseList = () => {
  return (
    <main className="card">
      <section className="card__header">
        <h1 className="card__header--title">Warehouses</h1>

        <aside className="card__header--search">
          <div className="card__header--searchBar">
            <input
              type="text"
              placeholder="Search..."
              className="card__header--input"
            />
            <img
              src={searchIcon}
              alt="Magnifying Glass Icon"
              className="card__header--icon"
            />
          </div>
          <button className="card__header--searchButton">
            <span>+</span>
            Add New Warehouse
          </button>
        </aside>
      </section>

      <table className="table">
        <thead className="table__header">
          <tr className="table__header--row">
            <th className="table__header--cells">
              <div className="table__header--content">
                WAREHOUSE
                <img
                  src={sortIcon}
                  className="table__header--icon"
                  alt="Two Arrows Point Up and Down"
                />
              </div>
            </th>
            <th className="table__header--cells">
              <div className="table__header--content">
                ADDRESS
                <img
                  src={sortIcon}
                  className="table__header--icon"
                  alt="Two Arrows Point Up and Down"
                />
              </div>
            </th>
            <th className="table__header--cells">
              <div className="table__header--content">
                CONTACT NAME
                <img
                  src={sortIcon}
                  className="table__header--icon"
                  alt="Two Arrows Point Up and Down"
                />
              </div>
            </th>
            <th className="table__header--cells">
              <div className="table__header--content">
                CONTACT INFORMATION
                <img
                  src={sortIcon}
                  className="table__header--icon"
                  alt="Two Arrows Point Up and Down"
                />
              </div>
            </th>
            <th className="table__header--end">
              <div className="table__header--content ">ACTIONS</div>
            </th>
          </tr>
        </thead>

        <tbody className="table__body">
          <tr className="table__body--row">
            <td className="table__data--cells table__data--location">
              <h4 className="table__data--header table__data--hidden ">
                WAREHOUSE
              </h4>
              <Link to="/" className="table__data--link">
                Manhattan
                <img src={chevronRight} alt="Arrow Point To Right" />
              </Link>
            </td>
            <td className="table__data--cells table__data--name">
              <h2 className="table__data--header table__data--hidden">
                CONTACT NAME
              </h2>
              <p className="table__data--content">Parmin Aujla</p>
            </td>
            <td className="table__data--cells table__data--address">
              <h2 className="table__data--header table__data--hidden">
                ADDRESS
              </h2>
              <p className="table__data--content table__data--breakpoint">
                503 Broadway New York, USA
              </p>
            </td>
            <td className="table__data--cells table__data--contact">
              <h2 className="table__data--header table__data--hidden">
                CONTACT INFORMATION
              </h2>
              <p className="table__data--content">+1 (629) 555-0129</p>
              <a
                href="mailto:paujla@instock.com"
                className="table__data--content"
              >
                paujla@instock.com
              </a>
            </td>
            <td className="table__data--actions">
              <img
                src={trashIcon}
                alt="Garbage Red Color Icon"
                className="table__content--delete"
              />
              <img
                src={editIcon}
                alt="Garbage Red Color Icon"
                className="table__content--edit"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  );
};
