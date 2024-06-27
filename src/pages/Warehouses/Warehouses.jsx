import "./Warehouses.scss";

import { useState, useEffect } from "react";
import { getAllWarehouse, deleteWarehouse } from "../../lib/api-warehouses";

import searchIcon from "../../assets/icons/search-24px.svg";

import { Card } from "../../components/Card/Card";
import { CardHeader } from "../../components/CardHeader/CardHeader";
import { DynamicInput } from "../../components/DynamicInput/DynamicInput";
import { DynamicButton } from "../../components/DynamicButton/DynamicButton";
import { WarehouseList } from "../../components/WarehouseList/WarehouseList";
import { LoadingSpinner } from "../../components/LoadingSpinner/LoadingSpinner";

export const Warehouses = () => {
  const [warehouses, setWarehouses] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedWarehouse, setSelectedWarehouse] = useState({
    id: "",
    warehouseName: "",
  });

  useEffect(() => {
    getAllWarehouse(setWarehouses);
  }, [selectedWarehouse.id, selectedWarehouse.warehouseName]);

  if (!warehouses) return <LoadingSpinner />;

  const handleOpenModal = (id, warehouseName) => {
    setIsModalOpen(!isModalOpen);
    setSelectedWarehouse({
      id,
      warehouseName,
    });
  };

  const handleDeleteWarehouse = async () => {
    await deleteWarehouse(selectedWarehouse.id);
    setIsModalOpen(false);

    getAllWarehouse(setWarehouses);
  };

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
            <DynamicButton
              href={"/warehouse/post"}
              variant="add"
              addButtonName="Add New Warehouse"
            />
          </CardHeader>
          <WarehouseList
            isModalOpen={isModalOpen}
            warehouses={warehouses}
            onDelete={handleDeleteWarehouse}
            warehouseName={selectedWarehouse.warehouseName}
            handleOpenModal={handleOpenModal}
          />
        </Card>
      </main>
    </>
  );
};
