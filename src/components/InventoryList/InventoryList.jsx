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

      <table className="inventory-list-table">
        <thead className="inventory-list-table__header">
          <tr className="inventory-list-table__header--row">
            <th className="inventory-list-table__header--cells">
              <div className="inventory-list-table__header--flex">
                INVENTORY ITEM
                <img
                  src={sortIcon}
                  className="inventory-list-table__header--icon"
                  alt="Two Arrows Point Up and Down"
                />
              </div>
            </th>
            <th className="inventory-list-table__header--cells">
              <div className="inventory-list-table__header--flex">
                CATEGORY
                <img
                  src={sortIcon}
                  className="inventory-list-table__header--icon"
                  alt="Two Arrows Point Up and Down"
                />
              </div>
            </th>
            <th className="inventory-list-table__header--cells">
              <div className="inventory-list-table__header--flex">
                STATUS
                <img
                  src={sortIcon}
                  className="inventory-list-table__header--icon"
                  alt="Two Arrows Point Up and Down"
                />
              </div>
            </th>
            <th className="inventory-list-table__header--cells">
              <div className="inventory-list-table__header--flex">
                QTY
                <img
                  src={sortIcon}
                  className="inventory-list-table__header--icon"
                  alt="Two Arrows Point Up and Down"
                />
              </div>
            </th>
            <th className="inventory-list-table__header--cells">
              <div className="inventory-list-table__header--flex">
                WAREHOUSE
                <img
                  src={sortIcon}
                  className="inventory-list-table__header--icon"
                  alt="Two Arrows Point Up and Down"
                />
              </div>
            </th>
            <th className="inventory-list-table__header--cells inventory-list-table__header--end">
              <div className="inventory-list-table__header--flex ">ACTIONS</div>
            </th>
          </tr>
        </thead>
        <tbody className="inventory-list-table__body">
          {inventories.map(
            (
              { id, warehouse_name, item_name, category, status, quantity },
              index
            ) => (
              <tr
                key={id}
                className={`inventory-list-table__body--row ${
                  index === inventories.length - 1
                    ? "inventory-list-table__body--remove-border-bottom"
                    : ""
                }`}
              >
                <td className="inventory-list-table__data--cells table__data--inventory-item">
                  <h4 className="inventory-list-table__data--header table__data--hidden ">
                    INVENTORY ITEM
                  </h4>
                  <Link to={`/inventory/${id}`} className="inventory-list-table__data--link">
                    {item_name}
                    <img src={chevronRight} alt="Arrow Point To Right" className="arrow-animation" />
                  </Link>
                </td>
                <td className="inventory-list-table__data--cells table__data--category">
                  <h2 className="inventory-list-table__data--header table__data--hidden">
                    CATEGORY
                  </h2>
                  <p className="inventory-list-table__data--content">{category}</p>
                </td>
                <td className="inventory-list-table__data--cells table__data--status">
                  <h2 className="inventory-list-table__data--header table__data--hidden">
                    STATUS
                  </h2>
                  <div
                    className={`inventory-list-table__data--status-wrapper ${
                      status.toLowerCase() === "in stock"
                        ? "inventory-list-table__data--status-wrapper-in"
                        : "inventory-list-table__data--status-wrapper-out"
                    }`}
                  >
                    <p
                      className={`table__data--content ${
                        status.toLowerCase() === "in stock"
                          ? "inventory-list-table__data--status-in"
                          : "inventory-list-table__data--status-out"
                      }`}
                    >
                      {status.toUpperCase()}
                    </p>
                  </div>
                </td>
                <td className="inventory-list-table__data--cells table__data--qty">
                  <h2 className="inventory-list-table__data--header table__data--hidden">
                    QTY
                  </h2>
                  <p className="inventory-list-table__data--content">{quantity}</p>
                </td>
                <td className="inventory-list-table__data--cells inventory-list-table__data--invisible">
                  <h2 className="inventory-list-table__data--header inventory-list-table__data--hidden"></h2>
                </td>
                <td className="inventory-list-table__data--cells table__data--warehouse">
                  <h2 className="inventory-list-table__data--header table__data--hidden">
                    WAREHOUSE
                  </h2>
                  <p className="inventory-list-table__data--content">{warehouse_name}</p>
                </td>
                <td className="inventory-list-table__data--actions">
                  <button
                    className="inventory-list-table__data--delete"
                    onClick={() => handleOpenModal({ id, item_name })}
                  >
                    <img src={trashIcon} alt="Garbage Red Color Icon" />
                  </button>
                  <Link to={`/inventory/${id}`} className="inventory-list-table__data--edit">
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
