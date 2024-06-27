import "./Inventory.scss";

import { useState, useEffect } from "react";
import { deleteInventory, getAllInventories } from "../../lib/api-inventories";

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedInventory, setSelectedInventory] = useState({
    id: "",
    inventoryName: "",
  });

  useEffect(() => {
    getAllInventories(setInventories);
  }, [selectedInventory.id, selectedInventory.inventoryName]);

  if (!inventories) return <LoadingSpinner />;

  const handleOpenModal = (id, inventoryName) => {
    setIsModalOpen(!isModalOpen);
    setSelectedInventory({
      id,
      inventoryName,
    });
  };

  const handleDeleteWarehouse = async () => {
    await deleteInventory(selectedInventory.id);
    setIsModalOpen(false);

    getAllInventories(setInventories);
  };

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
          isModalOpen={isModalOpen}
          inventories={inventories}
          onDelete={handleDeleteWarehouse}
          inventoryName={selectedInventory.inventoryName}
          handleOpenModal={handleOpenModal}
        />
        <CardFooter></CardFooter>
      </Card>
    </main>
  );
};
