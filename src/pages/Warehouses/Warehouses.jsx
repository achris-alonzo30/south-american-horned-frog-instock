import "./Warehouses.scss";

import { useState, useEffect } from "react";
import { getAllWarehouse } from "../../lib/api-warehouses";

import searchIcon from "../../assets/icons/search-24px.svg";

import { Card } from "../../components/Card/Card";
import { CardHeader } from "../../components/CardHeader/CardHeader";
import { DynamicInput } from "../../components/DynamicInput/DynamicInput";
import { DynamicButton } from "../../components/DynamicButton/DynamicButton";
import { WarehouseList } from "../../components/WarehouseList/WarehouseList";
import { LoadingSpinner } from "../../components/LoadingSpinner/LoadingSpinner";

export const Warehouses = ({ isNewWarehouse }) => {
  const [warehouses, setWarehouses] = useState([]);

  useEffect(() => {
    getAllWarehouse(setWarehouses);
  }, [isNewWarehouse]);

  if (!warehouses) return <LoadingSpinner />;

  return (
      <main className="main">
        <Card>
          <CardHeader flexStyle="flexCol" browserName="Warehouses">
            <DynamicInput
              type="text"
              id="search"
              icon={searchIcon}
              placeholder="Search..."
            />
            <DynamicButton
              variant="add"
              href="/warehouse/post"
              addButtonName="Add New Warehouse"
            />
          </CardHeader>
          <WarehouseList
            warehouses={warehouses}
            setWarehouses={setWarehouses}
          />
        </Card>
      </main>
  );
};
