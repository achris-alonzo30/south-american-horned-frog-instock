import "./Inventory.scss";

import { useState, useEffect } from "react";
import { getAllInventories } from "../../lib/api-inventories";

import searchIcon from "../../assets/icons/search-24px.svg";

import { Card } from "../../components/Card/Card";
import { CardHeader } from "../../components/CardHeader/CardHeader";
import { CardFooter } from "../../components/CardFooter/CardFooter";
import { DynamicInput } from "../../components/DynamicInput/DynamicInput";
import { DynamicButton } from "../../components/DynamicButton/DynamicButton";
import { InventoryList } from "../../components/InventoryList/InventoryList";
import { LoadingSpinner } from "../../components/LoadingSpinner/LoadingSpinner";

export const Inventory = () => {
  const [inventories, setInventories] = useState([]);

  useEffect(() => {
    getAllInventories(setInventories);
  }, []);

  if (!inventories.length) return <LoadingSpinner />;

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
          <DynamicButton href={`/inventory/add-new-item`} variant="add" addButtonName="Add New Item" />
        </CardHeader>
        <InventoryList
          inventories={inventories}
          setInventories={setInventories}
        />
      </Card>
    </main>
  );
};
