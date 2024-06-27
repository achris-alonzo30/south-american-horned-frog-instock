import "./InventoryDetails.scss";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSingleInventory } from "../../lib/api-inventories";

import searchIcon from "../../assets/icons/search-24px.svg";

import { Card } from "../../components/Card/Card";
import { CardHeader } from "../../components/CardHeader/CardHeader";
import { CardFooter } from "../../components/CardFooter/CardFooter";
import { DynamicInput } from "../../components/DynamicInput/DynamicInput";
import { DynamicButton } from "../../components/DynamicButton/DynamicButton";
import { InventoryList } from "../../components/InventoryList/InventoryList";
import { LoadingSpinner } from "../../components/LoadingSpinner/LoadingSpinner";

export const InventoryDetails = () => {
  const [inventory, setInventory] = useState([]);

  const { inventoryId } = useParams();

  useEffect(() => {
    getSingleInventory(setInventory, inventoryId);
  }, [inventoryId]);

  console.log(inventory.length);

  if (!inventory) return <LoadingSpinner />;

  return (
    <main className="main">
      <Card>
        <CardHeader flexStyle="flexCol" browserName={inventory.item_name}>
          <DynamicButton variant="edit" href="/inventory/edit" />
        </CardHeader>
        <CardFooter></CardFooter>
      </Card>
    </main>
  );
};
