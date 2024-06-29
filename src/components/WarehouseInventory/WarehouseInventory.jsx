import "./WarehouseInventory.scss";

import { Link } from "react-router-dom";
import { deleteInventory, getAllInventories } from "../../lib/api-inventories";
import { getSingleWarehouseInventories } from "../../lib/api-warehouses";
import { useState } from "react";

import sortIcon from "../../assets/icons/sort-24px.svg";
import editIcon from "../../assets/icons/edit_indigo-24px.svg";
import trashIcon from "../../assets/icons/delete_outline-24px.svg";
import chevronRight from "../../assets/icons/chevron_right-24px.svg";
import { Modal } from "../Modal/Modal";

function WarehouseInventory({
  warehouseInventory,
  setWarehouseInventory,
  warehouseId,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedInventory, setSelectedInventory] = useState(null);

  const handleOpenModal = (selectedInventory) => {
    setSelectedInventory(selectedInventory);
    setIsModalOpen(true);
  };

  const handleDeleteInventory = async () => {
    await deleteInventory(selectedInventory.id);
    await getSingleWarehouseInventories(setWarehouseInventory, warehouseId);
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
                QUANTITY
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
        {warehouseInventory.map(
          ({ id, item_name, category, status, quantity }) => (
            <tbody key={id} className="table__body">
              <tr className="table__body--row">
                <td className="table__data--cells table__data--inventory-item">
                  <h4 className="table__data--header table__data--hidden ">
                    INVENTORY ITEM
                  </h4>{" "}
                  <Link to={`/inventory/${id}`} className="table__data--link">
                    {item_name}
                    <img src={chevronRight} alt="Arrow Point To Right" />
                  </Link>
                </td>
                <td className="table__data--cells table__data--category">
                  <h2 className="table__data--header table__data--hidden">
                    CATEGORY
                  </h2>
                  <p className="table__data--content">{category}</p>
                </td>
                <td className="table__data--cells table__data--status">
                  <h2 className="table__data--header table__data--hidden">
                    STATUS
                  </h2>
                  <div
                    className={`table__data--status-wrapper ${
                      status.toLowerCase() === "in stock"
                        ? "table__data--status-wrapper-in"
                        : "table__data--status-wrapper-out"
                    }`}
                  >
                    <p
                      className={`table__data--content ${
                        status.toLowerCase() === "in stock"
                          ? "table__data--status-in"
                          : "table__data--status-out"
                      }`}
                    >
                      {status.toUpperCase()}
                    </p>
                  </div>
                  {/* <div className="table__data--stock">
                    <p
                      className={`table__data--content ${
                        status === "In Stock"
                          ? "table__data--stock--in"
                          : "table__data--stock--out"
                      }`}
                    >
                      {status.toUpperCase()}
                    </p>
                  </div> */}
                </td>

                <td className="table__data--cells table__data--qty">
                  <h2 className="table__data--header table__data--hidden">
                    QUANTITY
                  </h2>

                  <p className="table__data--content">{quantity}</p>
                </td>
                <td className="table__data--actions">
                  <button
                    className="table__data--delete"
                    onClick={() => handleOpenModal({ id, item_name })}
                  >
                    <img src={trashIcon} alt="Garbage Red Color Icon" />
                  </button>
                  <Link to={`/inventory/${id}/edit`}>
                    <img
                      src={editIcon}
                      alt="Pencil Blue Color Icon"
                      className="table__content--edit"
                    />
                  </Link>
                </td>
              </tr>
            </tbody>
          )
        )}
      </table>
    </>
  );
}

export default WarehouseInventory;
