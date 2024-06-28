import "./InventoryItem.scss";
import { useEffect, useState } from "react";
import { getWarehouseDetails } from "../../lib/api-warehouses";
import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner";

function InventoryItem({ inventory }) {
  if (!inventory) return <LoadingSpinner />;

  return (
    <main className="inventory-item">
      <label className="inventory-item__label">
        ITEM DESCRIPTION:
        <p className="inventory-item__content">{inventory.description}</p>
      </label>
      <label className="inventory-item__label">
        CATEGORY:
        <p className="inventory-item__content">{inventory.category}</p>
      </label>
      <div className="inventory-item__flex">
        <label className="inventory-item__label">
          STATUS:
          {/* <p className="inventory-item__content">{inventory.status}</p> */}
          <div className="inventory-item--stock">
            <p
              className={`inventory-item__content ${
                inventory.status === "In Stock"
                  ? "inventory-item--stock--in"
                  : "inventory-item--stock--out"
              }`}
            >
              {console.log(inventory)}
              {inventory.status.toUpperCase()}
            </p>
          </div>
        </label>
        <label className="inventory-item__label">
          QUANTITY:
          <p className="inventory-item__content">{inventory.quantity}</p>
        </label>
      </div>
      <label className="inventory-item__label">
        WAREHOUSE:
        <p className="inventory-item__content">{inventory.warehouse_name}</p>
      </label>
    </main>
  );
}

export default InventoryItem;
