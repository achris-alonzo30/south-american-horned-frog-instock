import "./WarehouseInventory.scss";

import { Link } from "react-router-dom";

import sortIcon from "../../assets/icons/sort-24px.svg";
import editIcon from "../../assets/icons/edit_indigo-24px.svg";
import trashIcon from "../../assets/icons/delete_outline-24px.svg";
import chevronRight from "../../assets/icons/chevron_right-24px.svg";

export const WarehouseInventory = ({ warehouseInventory }) => {
  return (
    <table className="warehouse-list-table">
      <thead className="warehouse-list-table__header">
        <tr className="warehouse-list-table__header--row">
          <th className="warehouse-list-table__header--cells">
            <div className="warehouse-list-table__header--content">
              INVENTORY ITEM
              <img
                src={sortIcon}
                className="warehouse-list-table__header--icon"
                alt="Two Arrows Point Up and Down"
              />
            </div>
          </th>
          <th className="warehouse-list-table__header--cells">
            <div className="warehouse-list-table__header--content">
              CATEGORY
              <img
                src={sortIcon}
                className="warehouse-list-table__header--icon"
                alt="Two Arrows Point Up and Down"
              />
            </div>
          </th>
          <th className="warehouse-list-table__header--cells">
            <div className="warehouse-list-table__header--content">
              STATUS
              <img
                src={sortIcon}
                className="warehouse-list-table__header--icon"
                alt="Two Arrows Point Up and Down"
              />
            </div>
          </th>
          <th className="warehouse-list-table__header--cells">
            <div className="warehouse-list-table__header--content">
              QUANTITY
              <img
                src={sortIcon}
                className="warehouse-list-table__header--icon"
                alt="Two Arrows Point Up and Down"
              />
            </div>
          </th>
          <th className="warehouse-list-table__header--end">
            <div className="warehouse-list-table__header--content ">ACTIONS</div>
          </th>
        </tr>
      </thead>
      {warehouseInventory.map(
        ({ id, item_name, category, status, quantity }) => (
          <tbody key={id} className="warehouse-list-table__body">
            <tr className="warehouse-list-table__body--row">
              <td className="warehouse-list-table__data--cells table__data--inventory-item">
                <h4 className="warehouse-list-table__data--header table__data--hidden ">
                  INVENTORY ITEM
                </h4>{" "}
                <Link to={`/inventory/${id}`} className="warehouse-list-table__data--link">
                  {item_name}
                  <img src={chevronRight} alt="Arrow Point To Right" className="arrow-animation" />
                </Link>
              </td>
              <td className="warehouse-list-table__data--cells table__data--category">
                <h2 className="warehouse-list-table__data--header table__data--hidden">
                  CATEGORY
                </h2>
                <p className="warehouse-list-table__data--content">{category}</p>
              </td>
              <td className="warehouse-list-table__data--cells table__data--status">
                <h2 className="warehouse-list-table__data--header table__data--hidden">
                  STATUS
                </h2>
                <div className="warehouse-list-table__data--stock">
                  <p
                    className={`table__data--content ${
                      status === "In Stock"
                        ? "warehouse-list-table__data--stock--in"
                        : "warehouse-list-table__data--stock--out"
                    }`}
                  >
                    {status.toUpperCase()}
                  </p>
                </div>
              </td>

              <td className="warehouse-list-table__data--cells table__data--qty">
                <h2 className="warehouse-list-table__data--header table__data--hidden">
                  QUANTITY
                </h2>

                <p className="warehouse-list-table__data--content">{quantity}</p>
              </td>
              <td className="warehouse-list-table__data--actions">
                <img
                  src={trashIcon}
                  alt="Garbage Red Color Icon"
                  className="warehouse-list-table__content--delete"
                />
                <Link to={`/inventory/${id}`}><img
                  src={editIcon}
                  alt="Pencil Blue Color Icon"
                  className="warehouse-list-table__content--edit"
                /></Link>
              </td>
            </tr>
          </tbody>
        )
      )}
    </table>
  );
}


