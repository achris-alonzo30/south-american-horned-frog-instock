import "./InventoryItem.scss";

function InventoryItem({ inventory }) {
  return (
    <main className="inventory-item">
      <div className="inventory-item__content--left">
        <label className="inventory-item__label">
          ITEM DESCRIPTION:
          <p className="inventory-item__content">{inventory.description}</p>
        </label>
        <label className="inventory-item__label inventory-item__label--category">
          CATEGORY:
          <p className="inventory-item__content">{inventory.category}</p>
        </label>
      </div>
      <div className="inventory-item__content--right">
        <div className="inventory-item__flex">
          <label className="inventory-item__label">
            STATUS:
            <div className="inventory-item--stock">
              <p
                className={`inventory-item__content ${
                  inventory.status === "In Stock"
                    ? "inventory-item--stock--in"
                    : "inventory-item--stock--out"
                }`}
              >
                {console.log(inventory)}
                {inventory.status ? inventory.status.toUpperCase() : ""}
              </p>
            </div>
          </label>
          <label className="inventory-item__label">
            QUANTITY:
            <p className="inventory-item__content">{inventory.quantity}</p>
          </label>
        </div>
        <label className="inventory-item__label inventory-item__label--warehouse">
          WAREHOUSE:
          <p className="inventory-item__content">{inventory.warehouse_name}</p>
        </label>
      </div>
    </main>
  );
}

export default InventoryItem;
