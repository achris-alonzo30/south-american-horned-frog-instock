import "./WarehouseList.scss";

import { Link } from "react-router-dom";

import sortIcon from "../../assets/icons/sort-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import trashIcon from "../../assets/icons/delete_outline-24px.svg";
import chevronRight from "../../assets/icons/chevron_right-24px.svg";

export const WarehouseList = () => {
  return (
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
            <h2 className="table__data--header table__data--hidden">ADDRESS</h2>
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
  );
};
