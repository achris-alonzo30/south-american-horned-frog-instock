import "./WarehouseDetails.scss";

import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function WarehouseDetails() {
  const [currentWarehouse, setCurrentWarehouse] = useState(null);

  const { warehouseId } = useParams();

  const getWarehouseInventory = async (warehouseId) => {
    try {
      let res = await axios.get(
        `http://localhost:8080/warehouses/:warehouseId/inventories`
      );
      setCurrentWarehouse(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getWarehouseInventory(warehouseId);
  }, [warehouseId]);

  return (
    <main className="warehouse-details">
      <section className="warehouse-details__content">
        <h1>{currentWarehouse.WarehouseDetails}</h1>
      </section>
    </main>
  );
}

export default WarehouseDetails;
