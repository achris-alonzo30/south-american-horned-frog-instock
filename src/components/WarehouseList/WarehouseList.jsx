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
              <tr key={id} className={`table__body--row ${
                index === warehouses.length - 1  ? "table__body--remove-border-bottom" : ""
              }`}>
                <td className="table__data--cells table__data--location">
                  <h4 className="table__data--header table__data--hidden ">
                    WAREHOUSE
                  </h4>
                  <Link to={`/warehouse/${id}`} className="table__data--link">
                    {warehouse_name}
                    <img src={chevronRight} alt="Arrow Point To Right" className="arrow-animation" />
                  </Link>
                </td>
                <td className="table__data--cells table__data--address">
                  <h2 className="table__data--header table__data--hidden">
                    ADDRESS
                  </h2>
                  <hgroup className="table__data--fulladdress">
                    <p className="table__data--content">
                      {address},
                    </p>
                    <p className="table__data--content"> {city}, {country}</p>
                  </hgroup>
                </td>
                <td className="table__data--cells table__data--name">
                  <h2 className="table__data--header table__data--hidden">
                    CONTACT NAME
                  </h2>
                  <p className="table__data--content">{contact_name}</p>
                </td>
                <td className="table__data--cells table__data--contact">
                  <h2 className="table__data--header table__data--hidden">
                    CONTACT INFORMATION
                  </h2>
                  <hgroup>
                    <p className="table__data--content table__data--margin">
                      {contact_phone}
                    </p>
                    <Link
                      to="mailto:paujla@instock.com"
                      className="table__data--content table__data--email"
                    >
                      {contact_email}
                    </Link>
                  </hgroup>
                </td>
                <td className="table__data--actions">
                  <button
                    className="table__data--delete"
                    onClick={() =>
                      handleOpenModal({ id, warehouseName: warehouse_name })
                    }
                  >
                    <img src={trashIcon} alt="Garbage Red Color Icon" />
                  </button>
                  <Link
                    to={`/warehouse/${id}/edit`}
                    className="table__data--edit"
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
