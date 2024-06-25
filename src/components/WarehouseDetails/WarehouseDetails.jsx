import "./WarehouseDetails.scss";

import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function WarehouseDetails() {
  const [currentWarehouseInventory, setCurrentWarehouse] = useState(null);

  const { warehouseId } = useParams();

  const getWarehouseInventory = async (warehouseId) => {
    try {
      let res = await axios.get(
        "http://localhost:8080/api/warehouses/" + warehouseId + "/inventories"
      );
      setCurrentWarehouse(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getWarehouseInventory(warehouseId);
  }, [warehouseId]);

  if (currentWarehouseInventory === null) {
    return <div>loading...</div>;
  }

  return (
    <main className="warehouse-details">
      <section className="warehouse-details__content">
        {currentWarehouseInventory.map((item) => (
          <h2 key={item.id}>{item.item_name}</h2>
        ))}
      </section>
    </main>
  );
}

export default WarehouseDetails;
