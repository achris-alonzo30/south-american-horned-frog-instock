import "./InventoryList.scss";

import { useState } from "react";
import { Link } from "react-router-dom";
import { deleteInventory, getAllInventories } from "../../lib/api-inventories";

import sortIcon from "../../assets/icons/sort-24px.svg";
import editIcon from "../../assets/icons/edit_indigo-24px.svg";
import trashIcon from "../../assets/icons/delete_outline-24px.svg";
import chevronRight from "../../assets/icons/chevron_right-24px.svg";

import { Modal } from "../Modal/Modal";

export const InventoryList = ({ inventories, setInventories }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedInventory, setSelectedInventory] = useState(null);

  const handleOpenModal = (selectedInventory) => {
    setSelectedInventory(selectedInventory);
    setIsModalOpen(true);
  };

  const handleDeleteInventory = async () => {
    await deleteInventory(selectedInventory.id);
    await getAllInventories(setInventories);
    setIsModalOpen(false);
  };
  return (
    <>
      {isModalOpen && (
        <Modal
          onDelete={handleDeleteInventory}
          onClose={() => setIsModalOpen(false)}
          inventoryName={selectedInventory.item_name}
        />
      )}

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
                QTY
                <img
                  src={sortIcon}
                  className="warehouse-list-table__header--icon"
                  alt="Two Arrows Point Up and Down"
                />
              </div>
            </th>
            <th className="warehouse-list-table__header--cells">
              <div className="warehouse-list-table__header--content">
                WAREHOUSE
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
        <tbody className="warehouse-list-table__body">
          {inventories.map(
            (
              { id, warehouse_name, item_name, category, status, quantity },
              index
            ) => (
              <tr
                key={id}
                className={`table__body--row ${
                  index === inventories.length - 1
                    ? "warehouse-list-table__body--remove-border-bottom"
                    : ""
                }`}
              >
                <td className="warehouse-list-table__data--cells table__data--inventory-item">
                  <h4 className="warehouse-list-table__data--header table__data--hidden ">
                    INVENTORY ITEM
                  </h4>
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
                  <div
                    className={`table__data--status-wrapper ${
                      status.toLowerCase() === "in stock"
                        ? "warehouse-list-table__data--status-wrapper-in"
                        : "warehouse-list-table__data--status-wrapper-out"
                    }`}
                  >
                    <p
                      className={`table__data--content ${
                        status.toLowerCase() === "in stock"
                          ? "warehouse-list-table__data--status-in"
                          : "warehouse-list-table__data--status-out"
                      }`}
                    >
                      {status.toUpperCase()}
                    </p>
                  </div>
                </td>
                <td className="warehouse-list-table__data--cells table__data--qty">
                  <h2 className="warehouse-list-table__data--header table__data--hidden">
                    QTY
                  </h2>
                  <p className="warehouse-list-table__data--content">{quantity}</p>
                </td>
                <td className="warehouse-list-table__data--cells table__data--invisible">
                  <h2 className="warehouse-list-table__data--header table__data--hidden"></h2>
                </td>
                <td className="warehouse-list-table__data--cells table__data--warehouse">
                  <h2 className="warehouse-list-table__data--header table__data--hidden">
                    WAREHOUSE
                  </h2>
                  <p className="warehouse-list-table__data--content">{warehouse_name}</p>
                </td>
                <td className="warehouse-list-table__data--actions">
                  <button
                    className="warehouse-list-table__data--delete"
                    onClick={() => handleOpenModal({ id, item_name })}
                  >
                    <img src={trashIcon} alt="Garbage Red Color Icon" />
                  </button>
                  <Link to={`/inventory/${id}`} className="warehouse-list-table__data--edit">
                    <img src={editIcon} alt="Pencil Blue Color Icon" />
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
