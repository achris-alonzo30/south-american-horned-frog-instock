import "./Warehouses.scss";

import { useState, useEffect } from "react";

import searchIcon from "../../assets/icons/search-24px.svg";

import { Card } from "../../components/Card/Card";
import { DynamicInput } from "../../components/DynamicInput/DynamicInput";
import { CardHeader } from "../../components/CardHeader/CardHeader";
import { WarehouseList } from "../../components/WarehouseList/WarehouseList";
import { CardFooter } from "../../components/CardFooter/CardFooter";
import { getWarehouses } from "../../lib/api-warehouses";
import { DynamicButton } from "../../components/DynamicButton/DynamicButton";

export const Warehouses = () => {
  const [warehouses, setWarehouses] = useState([]);

  useEffect(() => {
    getWarehouses(setWarehouses);
  }, []);

  // Add Loading here
  if (!warehouses) return <></>;


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
        <WarehouseList />
        <CardFooter>
          <DynamicButton variant="cancel" />
          <DynamicButton variant="save" />
        </CardFooter>
      </Card>
    </main>
  );
};
