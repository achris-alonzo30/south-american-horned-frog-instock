import "./WarehouseList.scss";

import { useState } from "react";
import { Link } from "react-router-dom";
import { getAllWarehouse, deleteWarehouse } from "../../lib/api-warehouses";

import sortIcon from "../../assets/icons/sort-24px.svg";
import editIcon from "../../assets/icons/edit_indigo-24px.svg";
import trashIcon from "../../assets/icons/delete_outline-24px.svg";
import chevronRight from "../../assets/icons/chevron_right-24px.svg";

import { Modal } from "../Modal/Modal";

export const WarehouseList = ({ warehouses, setWarehouses }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedWarehouse, setSelectedWarehouse] = useState(null);

  const handleOpenModal = (warehouse) => {
    setSelectedWarehouse(warehouse);
    setIsModalOpen(true);
  };

  const handleDeleteWarehouse = async () => {
    await deleteWarehouse(selectedWarehouse.id);
    await getAllWarehouse(setWarehouses);
    setIsModalOpen(false);
  };

  return (
    <>
      {isModalOpen && (
        <Modal
          isWarehouse
          onDelete={handleDeleteWarehouse}
          onClose={() => setIsModalOpen(false)}
          warehouseName={selectedWarehouse.warehouseName}
        />
      )}

      <table className="warehouse-list-table">
        <thead className="warehouse-list-table__header">
          <tr className="warehouse-list-table__header--row">
            <th className="warehouse-list-table__header--cells">
              <div className="warehouse-list-table__header--flex">
                WAREHOUSE
                <img
                  src={sortIcon}
                  className="warehouse-list-table__header--icon"
                  alt="Two Arrows Point Up and Down"
                />
              </div>
            </th>
            <th className="warehouse-list-table__header--cells">
              <div className="warehouse-list-table__header--flex">
                ADDRESS
                <img
                  src={sortIcon}
                  className="warehouse-list-table__header--icon"
                  alt="Two Arrows Point Up and Down"
                />
              </div>
            </th>
            <th className="warehouse-list-table__header--cells">
              <div className="warehouse-list-table__header--flex">
                CONTACT NAME
                <img
                  src={sortIcon}
                  className="warehouse-list-table__header--icon"
                  alt="Two Arrows Point Up and Down"
                />
              </div>
            </th>
            <th className="warehouse-list-table__header--cells">
              <div className="warehouse-list-table__header--flex">
                CONTACT INFORMATION
                <img
                  src={sortIcon}
                  className="warehouse-list-table__header--icon"
                  alt="Two Arrows Point Up and Down"
                />
              </div>
            </th>
            <th className="warehouse-list-table__header--cells warehouse-list-table__header--end">
              <div className="warehouse-list-table__header--flex">ACTIONS</div>
            </th>
          </tr>
        </thead>
        <tbody className="warehouse-list-table__body">
          {warehouses.map(
            (
              {
                id,
                city,
                country,
                address,
                contact_name,
                contact_phone,
                contact_email,
                warehouse_name,
              },
              index
            ) => (
              <tr
                key={id}
                className={`warehouse-list-table__body--row ${
                  index === warehouses.length - 1
                    ? "warehouse-list-table__body--remove-border-bottom"
                    : ""
                }`}
              >
                <td className={`warehouse-list-table__data--cells warehouse-list-table__data--location`}>
                  <h4 className="warehouse-list-table__data--header warehouse-list-table__data--hidden ">
                    WAREHOUSE
                  </h4>
                  <Link
                    to={`/warehouse/${id}`}
                    className="warehouse-list-table__data--link"
                  >
                    {warehouse_name}
                    <img
                      src={chevronRight}
                      alt="Arrow Point To Right"
                      className="arrow-animation"
                    />
                  </Link>
                </td>
                <td className="warehouse-list-table__data--cells warehouse-list-table__data--address ">
                  <h2 className="warehouse-list-table__data--header warehouse-list-table__data--hidden ">
                    ADDRESS
                  </h2>
                  <hgroup className="warehouse-list-table__data--fulladdress ">
                    <p className="warehouse-list-table__data--content">
                      {address},
                    </p>
                    <p className="warehouse-list-table__data--content">
                      {" "}
                      {city}, {country}
                    </p>
                  </hgroup>
                </td>
                <td className="warehouse-list-table__data--cells warehouse-list-table__data--name ">
                  <h2 className="warehouse-list-table__data--header warehouse-list-table__data--hidden ">
                    CONTACT NAME
                  </h2>
                  <p className="warehouse-list-table__data--content">
                    {contact_name}
                  </p>
                </td>
                <td className="warehouse-list-table__data--cells warehouse-list-table__data--contact ">
                  <h2 className="warehouse-list-table__data--header warehouse-list-table__data--hidden ">
                    CONTACT INFORMATION
                  </h2>
                  <hgroup>
                    <p className="warehouse-list-table__data--content warehouse-list-table__data--margin">
                      {contact_phone}
                    </p>
                    <Link
                      to="mailto:paujla@instock.com"
                      className="warehouse-list-table__data--content warehouse-list-table__data--email"
                    >
                      {contact_email}
                    </Link>
                  </hgroup>
                </td>
                <td className="warehouse-list-table__data--actions">
                  <button
                    className="warehouse-list-table__data--delete"
                    onClick={() =>
                      handleOpenModal({ id, warehouseName: warehouse_name })
                    }
                  >
                    <img src={trashIcon} alt="Garbage Red Color Icon" />
                  </button>
                  <Link
                    to={`/warehouse/${id}/edit`}
                    className="warehouse-list-table__data--edit"
                  >
                    <img src={editIcon} alt="Pencil Red Color Icon" />
                  </Link>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </>
  );
};
