import "./WarehouseInventory.scss";

import { Link } from "react-router-dom";

import sortIcon from "../../assets/icons/sort-24px.svg";
import editIcon from "../../assets/icons/edit_indigo-24px.svg";
import trashIcon from "../../assets/icons/delete_outline-24px.svg";
import chevronRight from "../../assets/icons/chevron_right-24px.svg";

export const WarehouseInventory = ({ warehouseInventory }) => {
  return (
    <table className="warehouse-inventory-table">
      <thead className="warehouse-inventory-table__header">
        <tr className="warehouse-inventory-table__header--row">
          <th className="warehouse-inventory-table__header--cells">
            <div className="warehouse-inventory-table__header--flex">
              INVENTORY ITEM
              <img
                src={sortIcon}
                className="warehouse-inventory-table__header--icon"
                alt="Two Arrows Point Up and Down"
              />
            </div>
          </th>
          <th className="warehouse-inventory-table__header--cells">
            <div className="warehouse-inventory-table__header--flex">
              CATEGORY
              <img
                src={sortIcon}
                className="warehouse-inventory-table__header--icon"
                alt="Two Arrows Point Up and Down"
              />
            </div>
          </th>
          <th className="warehouse-inventory-table__header--cells">
            <div className="warehouse-inventory-table__header--flex">
              STATUS
              <img
                src={sortIcon}
                className="warehouse-inventory-table__header--icon"
                alt="Two Arrows Point Up and Down"
              />
            </div>
          </th>
          <th className="warehouse-inventory-table__header--cells">
            <div className="warehouse-inventory-table__header--flex">
              QUANTITY
              <img
                src={sortIcon}
                className="warehouse-inventory-table__header--icon"
                alt="Two Arrows Point Up and Down"
              />
            </div>
          </th>
          <th className="warehouse-inventory-table__header--cells warehouse-inventory-table__header--end">
            <div className="warehouse-inventory-table__header--flex ">
              ACTIONS
            </div>
          </th>
        </tr>
      </thead>

      <tbody className="warehouse-inventory-table__body">
        {warehouseInventory.map(
          ({ id, item_name, category, status, quantity }, index) => (
            <tr
              key={id}
              className={`warehouse-inventory-table__body--row ${
                index === warehouseInventory.length - 1
                  ? "warehouse-inventory-table__body--remove-border-bottom"
                  : ""
              }`}
            >
              <td className="warehouse-inventory-table__data--cells table__data--inventory-item">
                <h4 className="warehouse-inventory-table__data--header table__data--hidden ">
                  INVENTORY ITEM
                </h4>{" "}
                <Link
                  to={`/inventory/${id}`}
                  className="warehouse-inventory-table__data--link"
                >
                  {item_name}
                  <img
                    src={chevronRight}
                    alt="Arrow Point To Right"
                    className="arrow-animation"
                  />
                </Link>
              </td>
              <td className="warehouse-inventory-table__data--cells table__data--category">
                <h2 className="warehouse-inventory-table__data--header table__data--hidden">
                  CATEGORY
                </h2>
                <p className="warehouse-inventory-table__data--content">
                  {category}
                </p>
              </td>
              <td className="warehouse-inventory-table__data--cells table__data--status">
                <h2 className="warehouse-inventory-table__data--header table__data--hidden">
                  STATUS
                </h2>
                <div className="warehouse-inventory-table__data--stock">
                  <p
                    className={`warehouse-inventory-table__data--content ${
                      status === "In Stock"
                        ? "warehouse-inventory-table__data--stock--in"
                        : "warehouse-inventory-table__data--stock--out"
                    }`}
                  >
                    {status.toUpperCase()}
                  </p>
                </div>
              </td>

              <td className="warehouse-inventory-table__data--cells table__data--qty">
                <h2 className="warehouse-inventory-table__data--header table__data--hidden">
                  QUANTITY
                </h2>

                <p className="warehouse-inventory-table__data--content">
                  {quantity}
                </p>
              </td>
              <td className="warehouse-inventory-table__data--actions">
                
                <img
                  src={trashIcon}
                  alt="Garbage Red Color Icon"
                  className="warehouse-inventory-table__content--delete"
                />
                <Link to={`/inventory/${id}`} className="warehouse-inventory-table__data--edit">
                  <img
                    src={editIcon}
                    alt="Pencil Blue Color Icon"
                    className="warehouse-inventory-table__content--edit"
                  />
                </Link>
              </td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
};
