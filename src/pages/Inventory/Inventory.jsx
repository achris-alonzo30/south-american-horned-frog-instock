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

export const Inventory = () => {
  const [inventories, setInventories] = useState([]);

  useEffect(() => {
    getAllInventories(setInventories);
  }, []);

  // Add Loading here
  if (!inventories) return <></>;

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
        <InventoryList inventories={inventories} />
        <CardFooter></CardFooter>
      </Card>
    </main>
  );
};