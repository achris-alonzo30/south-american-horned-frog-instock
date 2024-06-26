import "./WarehouseDetails.scss";

import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getWarehouseDetails, getSingleWarehouseInventories } from "../../lib/api-warehouses";

import { Card } from "../../components/Card/Card";
import { CardHeader } from "../../components/CardHeader/CardHeader";
import { DynamicButton } from "../../components/DynamicButton/DynamicButton";
import { LoadingSpinner } from "../../components/LoadingSpinner/LoadingSpinner";


export const WarehouseDetails = () => {
  const { warehouseId } = useParams();
  const [singleWarehouse, setSingleWarehouse] = useState(null);
  const [warehouseInventory, setWarehouseInventory] = useState([]);

  useEffect(() => {
    getWarehouseDetails(setSingleWarehouse, warehouseId);
    getSingleWarehouseInventories(setWarehouseInventory, warehouseId);
  }, [warehouseId]);

  if (!singleWarehouse && !warehouseInventory) return <LoadingSpinner />

  const {id, warehouse_name, address, city, country, contact_name, contact_position, contact_phone, contact_email } = singleWarehouse;
  
  return (
    <main className="main">
      <Card>
        <CardHeader flexStyle="flexRow" browserName="Washington" withArrow>
          <DynamicButton variant="edit" />
        </CardHeader>
        <section className="card__details">
          <hgroup className="card__details--address">
            <h4 className="card__details--theader">WAREHOUSE ADDRESS:</h4>
            <hgroup className="card__details--flex">
              <p className="card__details--content">{address}</p>
              <p className="card__details--content">{city}, {country}</p>
            </hgroup>
            
          </hgroup>

          <aside className="card__details--contacts">
            <hgroup className="card__details--contactName">
              <h4 className="card__details--theader">CONTACT NAME:</h4>
              <p className="card__details--content">{contact_name}</p>
              <p className="card__details--content">{contact_position}</p>
            </hgroup>
            <hgroup className="card__details--contactInfo">
              <h4 className="card__details--theader">CONTACT INFORMATION:</h4>
              <p className="card__details--content card__details--margin">{contact_phone}</p>
              <Link to="mailto:glyon@instock.com" className="card__details--content card__details--link">{contact_email}</Link>
            </hgroup>
          </aside>
        </section>

      </Card>
    </main>
  );
};
