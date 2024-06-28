import "./Inventory.scss";

import { useState, useEffect } from "react";
import { getAllInventories } from "../../lib/api-inventories";

import searchIcon from "../../assets/icons/search-24px.svg";

import { Card } from "../../components/Card/Card";
import { CardHeader } from "../../components/CardHeader/CardHeader";
import { DynamicInput } from "../../components/DynamicInput/DynamicInput";
import { DynamicButton } from "../../components/DynamicButton/DynamicButton";
import { InventoryList } from "../../components/InventoryList/InventoryList";
import { LoadingSpinner } from "../../components/LoadingSpinner/LoadingSpinner";

export const Inventory = () => {
  const [inventories, setInventories] = useState([]);
  const [sortBy, setSortBy] = useState("warehouse_name");
  const [orderBy, setOrderBy] = useState("asc");

  useEffect(() => {
    getAllInventories(setInventories, sortBy, orderBy);
  }, [sortBy, orderBy]);

  if (!inventories.length) return <LoadingSpinner />;

  const handleSort = (col) => {
    if (sortBy === col) { 
      setOrderBy(orderBy === "asc" ? "desc" : "asc")
    } else {
      setSortBy(col);
      setOrderBy('asc');
    }
  }

  return (
    <main className="main">
      <Card>
        <CardHeader flexStyle="flexCol" browserName="Inventory">
          <DynamicInput
            type="text"
            id="search"
            icon={searchIcon}
            placeholder="Search..."
          />
          <DynamicButton variant="add" addButtonName="Add New Item" />
        </CardHeader>
        <InventoryList
          onSort={handleSort}
          inventories={inventories}
          setInventories={setInventories}
        />
      </Card>
    </main>
  );
};
