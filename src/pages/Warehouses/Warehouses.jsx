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

export const Warehouses = () => {
  const [warehouses, setWarehouses] = useState([]);
  const [sortBy, setSortBy] = useState("");
  const [orderBy, setOrderBy] = useState("");

  useEffect(() => {
    getAllWarehouse(setWarehouses, sortBy, orderBy); 
  }, [sortBy, orderBy]);

  if (!warehouses) return <LoadingSpinner />;

  const handleSort = (col) => {
    if (sortBy === col) { 
      setOrderBy(orderBy === "asc" ? "desc" : "asc")
    } else {
      setSortBy(col);
      setOrderBy('asc');
    }
  }

  return (
    <>
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
          <WarehouseList
            onSort={handleSort}
            warehouses={warehouses}
            setWarehouses={setWarehouses}
          />
        </Card>
      </main>
    </>
  );
};
