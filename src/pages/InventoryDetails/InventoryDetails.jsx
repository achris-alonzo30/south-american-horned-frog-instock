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
import InventoryItem from "../../components/InventoryItem/InventoryItem";
import { LoadingSpinner } from "../../components/LoadingSpinner/LoadingSpinner";

export const InventoryDetails = () => {
  const [inventory, setInventory] = useState([]);

  const { inventoryId } = useParams();

  useEffect(() => {
    getSingleInventory(setInventory, inventoryId);
  }, [inventoryId, inventory]);

  if (!inventory) return <LoadingSpinner />;

  return (
    <main className="main">
      <Card>
        <CardHeader
          withArrow
          tabletHeaderBorder
          flexStyle="flexRow"
          browserName={inventory.item_name}
        >
          <DynamicButton variant="edit" href="/inventory/edit" />
        </CardHeader>
        {console.log(inventory)}
        <InventoryItem inventory={inventory}></InventoryItem>
      </Card>
    </main>
  );
};

export default InventoryDetails;
