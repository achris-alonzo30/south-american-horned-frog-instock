import "./InventoryList.scss";

import { Link } from "react-router-dom";

import sortIcon from "../../assets/icons/sort-24px.svg";
import editIcon from "../../assets/icons/edit_indigo-24px.svg";
import trashIcon from "../../assets/icons/delete_outline-24px.svg";
import chevronRight from "../../assets/icons/chevron_right-24px.svg";

export const InventoryList = () => {
  return (
    <table className="table">
      <thead className="table__header">
        <tr className="table__header--row">
          <th className="table__header--cells">
            <div className="table__header--content">
              INVENTORY ITEM
              <img
                src={sortIcon}
                className="table__header--icon"
                alt="Two Arrows Point Up and Down"
              />
            </div>
          </th>
          <th className="table__header--cells">
            <div className="table__header--content">
              CATEGORY
              <img
                src={sortIcon}
                className="table__header--icon"
                alt="Two Arrows Point Up and Down"
              />
            </div>
          </th>
          <th className="table__header--cells">
            <div className="table__header--content">
              STATUS
              <img
                src={sortIcon}
                className="table__header--icon"
                alt="Two Arrows Point Up and Down"
              />
            </div>
          </th>
          <th className="table__header--cells">
            <div className="table__header--content">
              QTY
              <img
                src={sortIcon}
                className="table__header--icon"
                alt="Two Arrows Point Up and Down"
              />
            </div>
          </th>
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
          <th className="table__header--end">
            <div className="table__header--content ">ACTIONS</div>
          </th>
        </tr>
      </thead>

      {/* CURRENTLY HOSTING 1 ROW OF DUMMY DATA */}
      <tbody className="table__body">
        <tr className="table__body--row">
          <td className="table__data--cells">
            <h4 className="table__data--header table__data--hidden ">
              INVENTORY ITEM
            </h4>
            <Link to="/" className="table__data--link">
              Television
              <img src={chevronRight} alt="Arrow Point To Right" />
            </Link>
          </td>
          <td className="table__data--cells">
            <h2 className="table__data--header table__data--hidden">
              CATEGORY
            </h2>
            <p className="table__data--content">Electronics</p>
          </td>
          <td className="table__data--cells">
            <h2 className="table__data--header table__data--hidden">STATUS</h2>
            <p className="table__data--content">IN STOCK</p>
          </td>
          <td className="table__data--cells">
            <h2 className="table__data--header table__data--hidden">QTY</h2>
            <p className="table__data--content">500</p>
          </td>
          <td className="table__data--cells">
            <h2 className="table__data--header table__data--hidden">
              WAREHOUSE
            </h2>
            <p className="table__data--content">Washington</p>
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
  );
};
