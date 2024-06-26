import "./WarehouseDetails.scss";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getWarehouseDetails, getSingleWarehouseInventories } from "../../lib/api-warehouses";

import { Card } from "../Card/Card";
import { CardHeader } from "../CardHeader/CardHeader";
import { DynamicButton } from "../DynamicButton/DynamicButton";
import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner";


export const WarehouseDetails = () => {
  const { warehouseId } = useParams();
  const [singleWarehouse, setSingleWarehouse] = useState(null);
  const [warehouseInventory, setWarehouseInventory] = useState([]);

  useEffect(() => {
    getWarehouseDetails(setSingleWarehouse, warehouseId);
    getSingleWarehouseInventories(setWarehouseInventory, warehouseId);
  }, [warehouseId]);

  if (!singleWarehouse && !warehouseInventory) return <LoadingSpinner />

  console.log("Single Warehouse", singleWarehouse);
  console.log("Warehouse Inventory", warehouseInventory);
  return (
    <main className="main">
      <Card>
        <CardHeader flexStyle="flexRow" browserName="Washington" withArrow>
          <DynamicButton variant="edit" />
        </CardHeader>
        <section className="card__details">
          <hgroup className="card__details--address">
            <h4 className="card__details--theader">WAREHOUSE ADDRES:</h4>
            <p className="card__details--content card__details--textWrap">33 Pearl Street SW, Washington, USA</p>
          </hgroup>

          <aside className="card__details--contacts">
            <hgroup className="card__details--contactName">
              <h4 className="card__details--theader">CONTACT NAME:</h4>
              <p className="card__details--content">Graeme Lyon </p>
              <p className="card__details--content">Warehouse Manager</p>
            </hgroup>
            <hgroup className="card__details--contactInfo">
              <h4 className="card__details--theader">CONTACT INFORMATION:</h4>
              <p className="card__details--content">+1 (647) 504-0911</p>
              <a href="mailto:glyon@instock.com" className="card__details--content">glyon@instock.com</a>
            </hgroup>
          </aside>
        </section>

      </Card>
    </main>
  );
};
