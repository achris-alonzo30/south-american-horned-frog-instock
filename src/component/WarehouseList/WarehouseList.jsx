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
          
        </aside>
      </section>

      
    </main>
  );
};
