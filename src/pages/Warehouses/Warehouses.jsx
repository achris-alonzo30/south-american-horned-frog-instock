import "./Warehouses.scss";

import { useState, useEffect } from "react";
import { getAllWarehouse } from "../../lib/api-warehouses";

import searchIcon from "../../assets/icons/search-24px.svg";

import { Card } from "../../components/Card/Card";
import { CardHeader } from "../../components/CardHeader/CardHeader";
import { CardFooter } from "../../components/CardFooter/CardFooter";
import { DynamicInput } from "../../components/DynamicInput/DynamicInput";
import { DynamicButton } from "../../components/DynamicButton/DynamicButton";
import { WarehouseList } from "../../components/WarehouseList/WarehouseList";

export const Warehouses = () => {
  const [warehouses, setWarehouses] = useState([]);

  useEffect(() => {
    getAllWarehouse(setWarehouses);
  }, []);

  if (!warehouses) return <LoadingSpinner />;

  return (
    <main className="main">
      <Card>
        <CardHeader flexStyle="flexCol" browserName="Warehouse">
          <DynamicInput
            type="text"
            id="search"
            icon={searchIcon}
            placeholder="Search..."
          />
          <DynamicButton variant="add" addButtonName="Add New Warehouse" />
        </CardHeader>
        <WarehouseList warehouses={warehouses} />
      </Card>
    </main>
  );
};
